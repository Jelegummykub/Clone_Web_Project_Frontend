import axios from 'axios';
import cornerstone, { enable } from 'cornerstone-core';
import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import dicomParser from 'dicom-parser';
import Papa from 'papaparse';
import React, { useEffect, useState } from 'react';

function Readdata() {

    const [files, setFiles] = useState(null)
    const [dicomData, setDicomData] = useState(null)
    const [imageId, setImageId] = useState('')
    const [csvData, setCsvData] = useState([])
    const [openFolders, setOpenFolders] = useState({})

    useEffect(() => {
        cornerstoneWADOImageLoader.external.cornerstone = cornerstone
        cornerstoneWADOImageLoader.external.dicomParser = dicomParser

        const element = document.getElementById('dicomImage')
        cornerstone, enable(element)

        axios.get('http://localhost:3001/list-files').then(response => {
            setFiles(response.data)
        }).catch(error => {
            console.error('Error', error)
        })
    }, [])

    const handleFileClick = (filePath) => {
        const isDicom = filePath.endsWith('.dcm')
        const isCSV = filePath.endsWith('.csv')

        if (isDicom) {
            const fileURL = `http://localhost:3001/read-dicom?file=${filePath}`
            axios.get(fileURL, { responseType: 'arraybuffer' }).then(response => {
                const byteArray = new Uint8Array(response.data)
                // console.log(byteArray)
                const dataSet = dicomParser.parseDicom(byteArray)
                // console.log(dataSet)
                setDicomData(dataSet)
                const imageId = `wadouri:${fileURL}`
                setImageId(imageId)
            }).catch(error => {
                console.log('Error ', error)
            })
        } else if (isCSV) {
            const fileURL = `http://localhost:3001/read-csv?file=${filePath}`
            axios.get(fileURL).then(response => {
                Papa.parse(response.data, {
                    header: true,
                    complete: (result) => {
                        setCsvData(result.data)
                    },
                    error: (error) => {
                        console.error('Error : ', error)
                    }
                })
            }).catch(error => {
                console.error('Error : ', error)
            })
        }
    }

    useEffect(() => {
        const element = document.getElementById('dicomImage')

        if (imageId) {
            cornerstone.loadImage(imageId).then(image => {
                cornerstone.displayImage(element, image)
            }).catch(error => {
                console.error('Error : ', error)
            })
        }
    }, [imageId])

    const randerTree = (node, currentPath = '') => {
        if (!node) {
            return null
        }

        return (
            <ul className="list-disc pl-5">
                {node.map((item, index) => {
                    const path = `${currentPath}/${item.name}`
                    if (item.type === 'folder') {
                        return (
                            <li key={index} className="font-bold">
                                <span className="cursor-pointer text-black"
                                    onClick={() => setOpenFolders(prev => ({
                                        ...prev,
                                        [path]: !prev[path]
                                    }))}
                                >
                                    {item.name}
                                </span>
                                {openFolders[path] && (
                                    <div className="ml-4">
                                        {randerTree(item.contents, path)}
                                    </div>
                                )}
                            </li>
                        )
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
        )
    }
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
            <div className='flex'>
                

                <div className='w-[83%] p-4 mr-10'>
                    <div className="border border-gray-300 p-4 mb-4">
                        <h2 className='mb-10'>DICOM Image</h2>
                        <div id="dicomImage" style={{ width: '512px', height: '512px' }}></div>
                    </div>

                    {dicomData && (
                        <div className="border border-gray-300 p-4 mb-4">
                            <h2 className='mb-10'>DICOM Metadata</h2>
                            <pre>{renderMetadata(dicomData)}</pre>
                        </div>
                    )}

                    {csvData.length > 0 && (
                        <div className="border border-gray-300 p-4 mb-4">
                            {renderCSVData()}
                        </div>
                    )}
                </div>
                <div className='w-1/3 p-4'>
                    <h1 className='font-bold text-2xl mb-3'>Data Explorer</h1>
                    {files ? randerTree(files) : <p>Loading files...</p>}
                </div>
            </div>
        </div>
    );
};

export default Readdata