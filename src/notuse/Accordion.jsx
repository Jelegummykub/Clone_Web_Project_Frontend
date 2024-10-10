import React, { useEffect, useState } from 'react';
import FileListViewer from './FileListViewer';

const Accordion = () => {
    const [fileTree, setFileTree] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openFolders, setOpenFolders] = useState({});
    const [fileContent, setFileContent] = useState(null);

    useEffect(() => {
        const fetchFileTree = async () => {
            try {
                const response = await fetch('http://localhost:3001/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setFileTree(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFileTree();
    }, []);

    const handleFolderClick = (folderName) => {
        setOpenFolders((prev) => ({
            ...prev,
            [folderName]: !prev[folderName],
        }));
    };

    const handleFileClick = async (filePath) => {
        try {
            const encodedPath = encodeURIComponent(filePath);
            const response = await fetch(`http://localhost:3001/read-file?path=${encodedPath}`);
            if (!response.ok) {
                throw new Error('Error reading file');
            }
            const data = await response.json();
            setFileContent(data); // Update fileContent state
        } catch (err) {
            setError(err.message);
        }
    };

    const renderTree = (node, currentPath = '') => {
        if (!node) return null;

        return (
            <ul className="list-disc pl-5">
                {node.files && node.files.length > 0 && (
                    <li>
                        <strong>Files:</strong>
                        <ul className="list-inside">
                            {node.files.map((file, index) => {
                                const filePath = `${currentPath}/${file}`;
                                return (
                                    <li key={index} className="text-gray-400 cursor-pointer" onClick={() => handleFileClick(filePath)}>
                                        {file}
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                )}
                {Object.keys(node).map((key) => {
                    if (key !== 'files') {
                        return (
                            <li key={key} className="font-bold">
                                <span className="cursor-pointer text-black" onClick={() => handleFolderClick(key)}>
                                    {key}
                                </span>
                                {openFolders[key] && (
                                    <div className="ml-4">
                                        {renderTree(node[key], `${currentPath}/${key}`)}
                                    </div>
                                )}
                            </li>
                        );
                    }
                    return null;
                })}
            </ul>
        );
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div className="flex">
                <div className="w-1/2 p-4">
                    {fileContent && (
                        <div className="mt-4 p-4 bg-gray-100">
                            <h2 className="text-lg font-bold">DICOM Viewer</h2>
                            <FileListViewer dicomData={fileContent} /> {/* Pass fileContent as prop */}
                        </div>
                    )}
                </div>
                <div className='ml-[30%]'>
                    <h1 className="text-xl font-bold">Data Explorer</h1>
                    <div className="mt-4">{fileTree && renderTree(fileTree)}</div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
