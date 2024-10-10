import axios from 'axios';
import cornerstone from 'cornerstone-core';
import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import dicomParser from 'dicom-parser';
import Papa from 'papaparse'; // Add this for parsing CSV files
import React, { useEffect, useState } from 'react';

const FileListViewer = () => {
    const [files, setFiles] = useState(null); // Store the whole file structure
    const [imageId, setImageId] = useState('');
    const [dicomData, setDicomData] = useState(null);
    const [csvData, setCsvData] = useState([]); // State for CSV data
    const [error, setError] = useState('');
    const [openFolders, setOpenFolders] = useState({}); // State to track opened folders

    useEffect(() => {
        // Configure cornerstone WADO image loader
        cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
        cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

        // Enable the cornerstone element for rendering
        const element = document.getElementById('dicomImage');
        cornerstone.enable(element);

        // Fetch file list from API
        axios.get('http://localhost:3001/list-files')
            .then(response => {
                setFiles(response.data);
            })
            .catch(error => {
                console.error('Error fetching file list:', error);
            });
    }, []);

    const handleFileClick = (filePath) => {
        const isDicom = filePath.endsWith('.dcm'); // Check if the file is a DICOM
        const isCSV = filePath.endsWith('.csv'); // Check if the file is a CSV

        if (isDicom) {
            const fileURL = `http://localhost:3001/read-dicom?file=${filePath}`;
            axios.get(fileURL, { responseType: 'arraybuffer' })
                .then(response => {
                    const byteArray = new Uint8Array(response.data);
                    const dataSet = dicomParser.parseDicom(byteArray);
                    setDicomData(dataSet);
                    const imageId = `wadouri:${fileURL}`;
                    setImageId(imageId);
                    setError('');
                })
                .catch(error => {
                    console.error('Error reading file content:', error);
                    setError('Error loading DICOM file.');
                });
        } else if (isCSV) {
            const fileURL = `http://localhost:3001/read-csv?file=${filePath}`;
            axios.get(fileURL)
                .then(response => {
                    // Use PapaParse to parse CSV data
                    Papa.parse(response.data, {
                        header: true,
                        complete: (results) => {
                            setCsvData(results.data); // Set CSV data
                            setError('');
                        },
                        error: (error) => {
                            console.error('Error parsing CSV file:', error);
                            setError('Error loading CSV file.');
                        }
                    });
                })
                .catch(error => {
                    console.error('Error reading CSV file:', error);
                    setError('Error loading CSV file.');
                });
        }
    };

    useEffect(() => {
        const element = document.getElementById('dicomImage');

        if (imageId) {
            cornerstone.loadImage(imageId)
                .then(image => {
                    cornerstone.displayImage(element, image);
                })
                .catch(err => {
                    console.error('Error loading image:', err);
                    setError(`Error displaying DICOM image: ${err.message}`);
                });
        }
    }, [imageId]);

    const renderTree = (node, currentPath = '') => {
        if (!node) return null;

        return (
            <ul className="list-disc pl-5">
                {node.map((item, index) => {
                    const path = `${currentPath}/${item.name}`;
                    if (item.type === 'folder') {
                        return (
                            <li key={index} className="font-bold">
                                <span
                                    className="cursor-pointer text-black"
                                    onClick={() => setOpenFolders(prev => ({ ...prev, [path]: !prev[path] }))}
                                >
                                    {item.name}
                                </span>
                                {openFolders[path] && (
                                    <div className="ml-4">
                                        {renderTree(item.contents, path)}
                                    </div>
                                )}
                            </li>
                        );
                    } else if (item.type === 'file') {
                        return (
                            <li key={index} className="text-gray-400 cursor-pointer" onClick={() => handleFileClick(path)}>
                                {item.name}
                            </li>
                        );
                    }
                    return null;
                })}
            </ul>
        );
    };

    const renderCSVData = () => {
        if (csvData.length === 0) return null;

        return (
            <div>
                <h2>CSV Data</h2>
                <table className="min-w-full">
                    <thead>
                        <tr>
                            {Object.keys(csvData[0]).map((header, index) => (
                                <th key={index} className="border px-4 py-2">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {csvData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {Object.values(row).map((cell, cellIndex) => (
                                    <td key={cellIndex} className="border px-4 py-2">{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    const renderMetadata = (dataSet) => {
        let metadata = 'DICOM Metadata:\n';
        if (dataSet.elements) {
            Object.entries(dataSet.elements).forEach(([tag, element]) => {
                let value = 'N/A';
                try {
                    value = dataSet.string(tag) || 'N/A';
                } catch (error) {
                    console.error(`Error retrieving value for tag ${tag}:`, error);
                }

                if (value === '' || value === undefined || value === null) {
                    value = 'N/A (Empty value)';
                } else if (!isPrintable(value)) {
                    value = 'N/A (Non-printable characters)';
                }

                metadata += `${element.name || tag}: ${value}\n`;
            });
        } else {
            metadata += 'No metadata available.\n';
        }
        return metadata;
    };

    const isPrintable = (str) => {
        return /^[\x20-\x7E]*$/.test(str);
    };

    return (
        <div>
            <h1>File List</h1>
            {files ? renderTree(files) : <p>Loading files...</p>}

            <h2>DICOM Image</h2>
            <div id="dicomImage" style={{ width: '512px', height: '512px' }}></div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {dicomData && (
                <div>
                    <h2>DICOM Metadata</h2>
                    <pre>{renderMetadata(dicomData)}</pre>
                </div>
            )}
            {renderCSVData()} {/* Render CSV data here */}
        </div>
    );
};

export default FileListViewer;
