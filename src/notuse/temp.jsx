// // // import React, { useEffect, useState } from 'react';

// // // const Accordion = () => {
// // //   const [fileTree, setFileTree] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [openFolders, setOpenFolders] = useState({});
// // //   const [fileContent, setFileContent] = useState(null);

// // //   useEffect(() => {
// // //     const fetchFileTree = async () => {
// // //       try {
// // //         const response = await fetch('http://localhost:3001/');
// // //         if (!response.ok) {
// // //           throw new Error('Network response was not ok');
// // //         }
// // //         const data = await response.json();
// // //         setFileTree(data);
// // //       } catch (err) {
// // //         setError(err.message);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchFileTree();
// // //   }, []);

// // //   const handleFolderClick = (folderName) => {
// // //     setOpenFolders((prev) => ({
// // //       ...prev,
// // //       [folderName]: !prev[folderName],
// // //     }));
// // //   };

// // //   const handleFileClick = async (filePath) => {
// // //     try {
// // //       const response = await fetch(`http://localhost:3001/read-file?path=${encodeURIComponent(filePath)}`);
// // //       if (!response.ok) {
// // //         throw new Error('Error reading file');
// // //       }
// // //       const data = await response.json();
// // //       setFileContent(data);
// // //     } catch (err) {
// // //       setError(err.message);
// // //     }
// // //   };

// // //   const renderTree = (node, currentPath = '') => {
// // //     if (!node) return null;

// // //     return (
// // //       <ul className="list-disc pl-5">
// // //         {node.files && node.files.length > 0 && (
// // //           <li>
// // //             <strong>Files:</strong>
// // //             <ul className="list-inside">
// // //               {node.files.map((file, index) => {
// // //                 const filePath = `${currentPath}/${file}`; // สร้างเส้นทางไฟล์
// // //                 return (
// // //                   <li key={index} className="text-blue-500 cursor-pointer" onClick={() => handleFileClick(filePath)}>
// // //                     {file}
// // //                   </li>
// // //                 );
// // //               })}
// // //             </ul>
// // //           </li>
// // //         )}
// // //         {Object.keys(node).map((key) => {
// // //           if (key !== 'files') {
// // //             return (
// // //               <li key={key} className="font-bold">
// // //                 <span
// // //                   className="cursor-pointer text-blue-600"
// // //                   onClick={() => handleFolderClick(key)}
// // //                 >
// // //                   {key}
// // //                 </span>
// // //                 {openFolders[key] && (
// // //                   <div className="ml-4">
// // //                     {renderTree(node[key], `${currentPath}/${key}`)} {/* ส่งเส้นทางปัจจุบันไปยังฟังก์ชัน */}
// // //                   </div>
// // //                 )}
// // //               </li>
// // //             );
// // //           }
// // //           return null;
// // //         })}
// // //       </ul>
// // //     );
// // //   };

// // //   if (loading) {
// // //     return <div>Loading...</div>;
// // //   }

// // //   if (error) {
// // //     return <div>Error: {error}</div>;
// // //   }

// // //   return (
// // //     <div>
// // //       <h1 className="text-xl font-bold">File Tree</h1>
// // //       <div className="mt-4">
// // //         {fileTree && renderTree(fileTree)}
// // //       </div>
// // //       {fileContent && (
// // //         <div className="mt-4 p-4 bg-gray-100">
// // //           <h2 className="text-lg font-bold">File Content</h2>
// // //           {Array.isArray(fileContent) ? (
// // //             <pre>{JSON.stringify(fileContent, null, 2)}</pre>
// // //           ) : (
// // //             <img src={fileContent.image} alt="DICOM Image" style={{ maxWidth: '100%', maxHeight: '400px' }} />
// // //           )}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Accordion;


// // import React, { useEffect, useState } from 'react';
// // import DICOMViewer from './DICOMViewer';

// // const Accordion = () => {
// //   const [fileTree, setFileTree] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [openFolders, setOpenFolders] = useState({});
// //   const [fileContent, setFileContent] = useState(null);

// //   useEffect(() => {
// //     const fetchFileTree = async () => {
// //       try {
// //         const response = await fetch('http://localhost:3001/');
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         const data = await response.json();
// //         setFileTree(data);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchFileTree();
// //   }, []);

// //   const handleFolderClick = (folderName) => {
// //     setOpenFolders((prev) => ({
// //       ...prev,
// //       [folderName]: !prev[folderName],
// //     }));
// //   };

// //   const handleFileClick = async (filePath) => {
// //     try {
// //       const encodedPath = encodeURIComponent(filePath);
// //       const response = await fetch(`http://localhost:3001/read-file?path=${encodedPath}`);
// //       if (!response.ok) {
// //         throw new Error('Error reading file');
// //       }
// //       const data = await response.json();
// //       setFileContent(data);
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };


// //   const renderTree = (node, currentPath = '') => {
// //     if (!node) return null;

// //     return (
// //       <ul className="list-disc pl-5">
// //         {node.files && node.files.length > 0 && (
// //           <li>
// //             <strong>Files:</strong>
// //             <ul className="list-inside">
// //               {node.files.map((file, index) => {
// //                 const filePath = `${currentPath}/${file}`;
// //                 return (
// //                   <li key={index} className="text-gray-400 cursor-pointer" onClick={() => handleFileClick(filePath)}>
// //                     {file}
// //                   </li>
// //                 );
// //               })}
// //             </ul>
// //           </li>
// //         )}
// //         {Object.keys(node).map((key) => {
// //           if (key !== 'files') {
// //             return (
// //               <li key={key} className="font-bold">
// //                 <span className="cursor-pointer text-black" onClick={() => handleFolderClick(key)}>
// //                   {key}
// //                 </span>
// //                 {openFolders[key] && (
// //                   <div className="ml-4">
// //                     {renderTree(node[key], `${currentPath}/${key}`)}
// //                   </div>
// //                 )}
// //               </li>
// //             );
// //           }
// //           return null;
// //         })}
// //       </ul>
// //     );
// //   };

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   return (
// //     <div>
// //       <div className="flex">
// //         <div className="w-1/2 p-4">
// //           {fileContent && (
// //             <div className="mt-4 p-4 bg-gray-100">
// //               <h2 className="text-lg font-bold">Data</h2>
// //               {fileContent.image ? (
// //                 <DICOMViewer filePath={fileContent.image} />
// //               ) : (
// //                 <pre>{JSON.stringify(fileContent, null, 2)}</pre>
// //               )}
// //             </div>
// //           )}
// //         </div>
// //         <div className='ml-[30%]'>
// //           <h1 className="text-xl font-bold">Data Explorer</h1>
// //           <div className="mt-4">{fileTree && renderTree(fileTree)}</div>
// //         </div>
// //       </div>
// //     </div>

// //   );
// // };

// // export default Accordion;


// import axios from 'axios';
// import cornerstone from 'cornerstone-core';
// import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
// import dicomParser from 'dicom-parser';
// import React, { useEffect, useState } from 'react';

// const FileListViewer = () => {
//     const [files, setFiles] = useState([]);
//     const [imageId, setImageId] = useState('');
//     const [dicomData, setDicomData] = useState(null);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         // Configure cornerstone WADO image loader
//         cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
//         cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

//         // Enable the cornerstone element for rendering
//         const element = document.getElementById('dicomImage');
//         cornerstone.enable(element);

//         // Fetch file list from API
//         axios.get('http://localhost:3001/list-files')
//             .then(response => {
//                 setFiles(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching file list:', error);
//             });
//     }, []);

//     const handleFileClick = (fileName) => {
//         const filePath = `http://localhost:3001/read-dicom?file=${fileName}`;
//         axios.get(filePath, { responseType: 'arraybuffer' })
//             .then(response => {
//                 const byteArray = new Uint8Array(response.data);
//                 const dataSet = dicomParser.parseDicom(byteArray);
//                 setDicomData(dataSet);
//                 const imageId = `wadouri:${filePath}`;
//                 setImageId(imageId);
//                 setError('');
//             })
//             .catch(error => {
//                 console.error('Error reading file content:', error);
//                 setError('Error loading DICOM file.');
//             });
//     };

//     useEffect(() => {
//         const element = document.getElementById('dicomImage');

//         if (imageId) {
//             cornerstone.loadImage(imageId)
//                 .then(image => {
//                     cornerstone.displayImage(element, image);
//                 })
//                 .catch(err => {
//                     console.error('Error loading image:', err);
//                     setError(`Error displaying DICOM image: ${err.message}`);
//                 });
//         }
//     }, [imageId]);

//     const renderMetadata = (dataSet) => {
//         let metadata = 'DICOM Metadata:\n';
//         if (dataSet.elements) {
//             Object.entries(dataSet.elements).forEach(([tag, element]) => {
//                 let value = 'N/A';
//                 try {
//                     value = dataSet.string(tag) || 'N/A';
//                 } catch (error) {
//                     console.error(`Error retrieving value for tag ${tag}:`, error);
//                 }

//                 // Check if the value is empty or contains non-printable characters
//                 if (value === '' || value === undefined || value === null) {
//                     value = 'N/A (Empty value)';
//                 } else if (!isPrintable(value)) {
//                     value = 'N/A (Non-printable characters)';
//                 }

//                 metadata += `${element.name || tag}: ${value}\n`;
//             });
//         } else {
//             metadata += 'No metadata available.\n';
//         }
//         return metadata;
//     };

//     const isPrintable = (str) => {
//         return /^[\x20-\x7E]*$/.test(str); // Check if all characters are printable ASCII
//     };

//     return (
//         <div>
//             <h1>File List</h1>
//             <ul>
//                 {files.map((file, index) => (
//                     <li key={index} onClick={() => handleFileClick(file)}>
//                         <button>{file}</button>
//                     </li>
//                 ))}
//             </ul>

//             <h2>DICOM Image</h2>
//             <div id="dicomImage" style={{ width: '512px', height: '512px' }}></div>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {dicomData && (
//                 <div>
//                     <h2>DICOM Metadata</h2>
//                     <pre>{renderMetadata(dicomData)}</pre>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FileListViewer;

import axios from 'axios';
import cornerstone from 'cornerstone-core';
import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import dicomParser from 'dicom-parser';
import React, { useEffect, useState } from 'react';

const FileListViewer = () => {
    const [files, setFiles] = useState(null); // Store the whole file structure
    const [imageId, setImageId] = useState('');
    const [dicomData, setDicomData] = useState(null);
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
                                    onClick={() => setOpenFolders(prev => ({ ...prev, [path]: !prev[path] }))} // Toggle open/close folder
                                >
                                    {item.name}
                                </span>
                                {openFolders[path] && (
                                    <div className="ml-4">
                                        {renderTree(item.contents, path)} {/* Render contents of folder */}
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

                // Check if the value is empty or contains non-printable characters
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
        return /^[\x20-\x7E]*$/.test(str); // Check if all characters are printable ASCII
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
        </div>
    );
};

export default FileListViewer;
