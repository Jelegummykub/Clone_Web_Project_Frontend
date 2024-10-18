// // // // import React, { useEffect, useState } from 'react';

// // // // const Accordion = () => {
// // // //   const [fileTree, setFileTree] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const [openFolders, setOpenFolders] = useState({});
// // // //   const [fileContent, setFileContent] = useState(null);

// // // //   useEffect(() => {
// // // //     const fetchFileTree = async () => {
// // // //       try {
// // // //         const response = await fetch('http://localhost:3001/');
// // // //         if (!response.ok) {
// // // //           throw new Error('Network response was not ok');
// // // //         }
// // // //         const data = await response.json();
// // // //         setFileTree(data);
// // // //       } catch (err) {
// // // //         setError(err.message);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchFileTree();
// // // //   }, []);

// // // //   const handleFolderClick = (folderName) => {
// // // //     setOpenFolders((prev) => ({
// // // //       ...prev,
// // // //       [folderName]: !prev[folderName],
// // // //     }));
// // // //   };

// // // //   const handleFileClick = async (filePath) => {
// // // //     try {
// // // //       const response = await fetch(`http://localhost:3001/read-file?path=${encodeURIComponent(filePath)}`);
// // // //       if (!response.ok) {
// // // //         throw new Error('Error reading file');
// // // //       }
// // // //       const data = await response.json();
// // // //       setFileContent(data);
// // // //     } catch (err) {
// // // //       setError(err.message);
// // // //     }
// // // //   };

// // // //   const renderTree = (node, currentPath = '') => {
// // // //     if (!node) return null;

// // // //     return (
// // // //       <ul className="list-disc pl-5">
// // // //         {node.files && node.files.length > 0 && (
// // // //           <li>
// // // //             <strong>Files:</strong>
// // // //             <ul className="list-inside">
// // // //               {node.files.map((file, index) => {
// // // //                 const filePath = `${currentPath}/${file}`; // สร้างเส้นทางไฟล์
// // // //                 return (
// // // //                   <li key={index} className="text-blue-500 cursor-pointer" onClick={() => handleFileClick(filePath)}>
// // // //                     {file}
// // // //                   </li>
// // // //                 );
// // // //               })}
// // // //             </ul>
// // // //           </li>
// // // //         )}
// // // //         {Object.keys(node).map((key) => {
// // // //           if (key !== 'files') {
// // // //             return (
// // // //               <li key={key} className="font-bold">
// // // //                 <span
// // // //                   className="cursor-pointer text-blue-600"
// // // //                   onClick={() => handleFolderClick(key)}
// // // //                 >
// // // //                   {key}
// // // //                 </span>
// // // //                 {openFolders[key] && (
// // // //                   <div className="ml-4">
// // // //                     {renderTree(node[key], `${currentPath}/${key}`)} {/* ส่งเส้นทางปัจจุบันไปยังฟังก์ชัน */}
// // // //                   </div>
// // // //                 )}
// // // //               </li>
// // // //             );
// // // //           }
// // // //           return null;
// // // //         })}
// // // //       </ul>
// // // //     );
// // // //   };

// // // //   if (loading) {
// // // //     return <div>Loading...</div>;
// // // //   }

// // // //   if (error) {
// // // //     return <div>Error: {error}</div>;
// // // //   }

// // // //   return (
// // // //     <div>
// // // //       <h1 className="text-xl font-bold">File Tree</h1>
// // // //       <div className="mt-4">
// // // //         {fileTree && renderTree(fileTree)}
// // // //       </div>
// // // //       {fileContent && (
// // // //         <div className="mt-4 p-4 bg-gray-100">
// // // //           <h2 className="text-lg font-bold">File Content</h2>
// // // //           {Array.isArray(fileContent) ? (
// // // //             <pre>{JSON.stringify(fileContent, null, 2)}</pre>
// // // //           ) : (
// // // //             <img src={fileContent.image} alt="DICOM Image" style={{ maxWidth: '100%', maxHeight: '400px' }} />
// // // //           )}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Accordion;


// // // import React, { useEffect, useState } from 'react';
// // // import DICOMViewer from './DICOMViewer';

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
// // //       const encodedPath = encodeURIComponent(filePath);
// // //       const response = await fetch(`http://localhost:3001/read-file?path=${encodedPath}`);
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
// // //                 const filePath = `${currentPath}/${file}`;
// // //                 return (
// // //                   <li key={index} className="text-gray-400 cursor-pointer" onClick={() => handleFileClick(filePath)}>
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
// // //                 <span className="cursor-pointer text-black" onClick={() => handleFolderClick(key)}>
// // //                   {key}
// // //                 </span>
// // //                 {openFolders[key] && (
// // //                   <div className="ml-4">
// // //                     {renderTree(node[key], `${currentPath}/${key}`)}
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
// // //       <div className="flex">
// // //         <div className="w-1/2 p-4">
// // //           {fileContent && (
// // //             <div className="mt-4 p-4 bg-gray-100">
// // //               <h2 className="text-lg font-bold">Data</h2>
// // //               {fileContent.image ? (
// // //                 <DICOMViewer filePath={fileContent.image} />
// // //               ) : (
// // //                 <pre>{JSON.stringify(fileContent, null, 2)}</pre>
// // //               )}
// // //             </div>
// // //           )}
// // //         </div>
// // //         <div className='ml-[30%]'>
// // //           <h1 className="text-xl font-bold">Data Explorer</h1>
// // //           <div className="mt-4">{fileTree && renderTree(fileTree)}</div>
// // //         </div>
// // //       </div>
// // //     </div>

// // //   );
// // // };

// // // export default Accordion;


// // import axios from 'axios';
// // import cornerstone from 'cornerstone-core';
// // import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
// // import dicomParser from 'dicom-parser';
// // import React, { useEffect, useState } from 'react';

// // const FileListViewer = () => {
// //     const [files, setFiles] = useState([]);
// //     const [imageId, setImageId] = useState('');
// //     const [dicomData, setDicomData] = useState(null);
// //     const [error, setError] = useState('');

// //     useEffect(() => {
// //         // Configure cornerstone WADO image loader
// //         cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
// //         cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

// //         // Enable the cornerstone element for rendering
// //         const element = document.getElementById('dicomImage');
// //         cornerstone.enable(element);

// //         // Fetch file list from API
// //         axios.get('http://localhost:3001/list-files')
// //             .then(response => {
// //                 setFiles(response.data);
// //             })
// //             .catch(error => {
// //                 console.error('Error fetching file list:', error);
// //             });
// //     }, []);

// //     const handleFileClick = (fileName) => {
// //         const filePath = `http://localhost:3001/read-dicom?file=${fileName}`;
// //         axios.get(filePath, { responseType: 'arraybuffer' })
// //             .then(response => {
// //                 const byteArray = new Uint8Array(response.data);
// //                 const dataSet = dicomParser.parseDicom(byteArray);
// //                 setDicomData(dataSet);
// //                 const imageId = `wadouri:${filePath}`;
// //                 setImageId(imageId);
// //                 setError('');
// //             })
// //             .catch(error => {
// //                 console.error('Error reading file content:', error);
// //                 setError('Error loading DICOM file.');
// //             });
// //     };

// //     useEffect(() => {
// //         const element = document.getElementById('dicomImage');

// //         if (imageId) {
// //             cornerstone.loadImage(imageId)
// //                 .then(image => {
// //                     cornerstone.displayImage(element, image);
// //                 })
// //                 .catch(err => {
// //                     console.error('Error loading image:', err);
// //                     setError(`Error displaying DICOM image: ${err.message}`);
// //                 });
// //         }
// //     }, [imageId]);

// //     const renderMetadata = (dataSet) => {
// //         let metadata = 'DICOM Metadata:\n';
// //         if (dataSet.elements) {
// //             Object.entries(dataSet.elements).forEach(([tag, element]) => {
// //                 let value = 'N/A';
// //                 try {
// //                     value = dataSet.string(tag) || 'N/A';
// //                 } catch (error) {
// //                     console.error(`Error retrieving value for tag ${tag}:`, error);
// //                 }

// //                 // Check if the value is empty or contains non-printable characters
// //                 if (value === '' || value === undefined || value === null) {
// //                     value = 'N/A (Empty value)';
// //                 } else if (!isPrintable(value)) {
// //                     value = 'N/A (Non-printable characters)';
// //                 }

// //                 metadata += `${element.name || tag}: ${value}\n`;
// //             });
// //         } else {
// //             metadata += 'No metadata available.\n';
// //         }
// //         return metadata;
// //     };

// //     const isPrintable = (str) => {
// //         return /^[\x20-\x7E]*$/.test(str); // Check if all characters are printable ASCII
// //     };

// //     return (
// //         <div>
// //             <h1>File List</h1>
// //             <ul>
// //                 {files.map((file, index) => (
// //                     <li key={index} onClick={() => handleFileClick(file)}>
// //                         <button>{file}</button>
// //                     </li>
// //                 ))}
// //             </ul>

// //             <h2>DICOM Image</h2>
// //             <div id="dicomImage" style={{ width: '512px', height: '512px' }}></div>
// //             {error && <p style={{ color: 'red' }}>{error}</p>}
// //             {dicomData && (
// //                 <div>
// //                     <h2>DICOM Metadata</h2>
// //                     <pre>{renderMetadata(dicomData)}</pre>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default FileListViewer;

// import axios from 'axios';
// import cornerstone from 'cornerstone-core';
// import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
// import dicomParser from 'dicom-parser';
// import React, { useEffect, useState } from 'react';

// const FileListViewer = () => {
//     const [files, setFiles] = useState(null); // Store the whole file structure
//     const [imageId, setImageId] = useState('');
//     const [dicomData, setDicomData] = useState(null);
//     const [error, setError] = useState('');
//     const [openFolders, setOpenFolders] = useState({}); // State to track opened folders

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

//     const handleFileClick = (filePath) => {
//         const fileURL = `http://localhost:3001/read-dicom?file=${filePath}`;
//         axios.get(fileURL, { responseType: 'arraybuffer' })
//             .then(response => {
//                 const byteArray = new Uint8Array(response.data);
//                 const dataSet = dicomParser.parseDicom(byteArray);
//                 setDicomData(dataSet);
//                 const imageId = `wadouri:${fileURL}`;
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

//     const renderTree = (node, currentPath = '') => {
//         if (!node) return null;

//         return (
//             <ul className="list-disc pl-5">
//                 {node.map((item, index) => {
//                     const path = `${currentPath}/${item.name}`;
//                     if (item.type === 'folder') {
//                         return (
//                             <li key={index} className="font-bold">
//                                 <span
//                                     className="cursor-pointer text-black"
//                                     onClick={() => setOpenFolders(prev => ({ ...prev, [path]: !prev[path] }))} // Toggle open/close folder
//                                 >
//                                     {item.name}
//                                 </span>
//                                 {openFolders[path] && (
//                                     <div className="ml-4">
//                                         {renderTree(item.contents, path)} {/* Render contents of folder */}
//                                     </div>
//                                 )}
//                             </li>
//                         );
//                     } else if (item.type === 'file') {
//                         return (
//                             <li key={index} className="text-gray-400 cursor-pointer" onClick={() => handleFileClick(path)}>
//                                 {item.name}
//                             </li>
//                         );
//                     }
//                     return null;
//                 })}
//             </ul>
//         );
//     };

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
//             {files ? renderTree(files) : <p>Loading files...</p>}

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
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import cornerstone, { enable } from 'cornerstone-core';
import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import dicomParser from 'dicom-parser';
import Papa from 'papaparse';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Readdata() {

    const [files, setFiles] = useState(null)
    const [dicomData, setDicomData] = useState(null)
    const [imageId, setImageId] = useState('')
    const [csvData, setCsvData] = useState([])
    const [openFolders, setOpenFolders] = useState({})
    const [chartData, setChartData] = useState({})
    const [page, setpage] = useState(0)
    const rowpage = 15;

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

    useEffect(() => {
        if (csvData.length > 0) {
            const newChartData = {};
            const headers = Object.keys(csvData[0]);
            // console.log(headers)

            headers.forEach(header => {
                const values = csvData.map(row => row[header])
                const numericValues = values.filter(value => !isNaN(parseFloat(value)) && isFinite(value))
                // console.log(values.length - 1)
                // console.log(!isNumeric)
                if (values.length - 1 > 10) {
                    if (!numericValues.length && values.length) {
                        newChartData[header] = {
                            type: 'count',
                            totalCount: values.length - 1
                        }
                    } else {
                        const counts = numericValues.reduce((acc, value) => {
                            acc[value] = (acc[value] || 0) + 1;
                            return acc;
                        }, {});
                        // console.log(counts)

                        newChartData[header] = {
                            type: 'chart',
                            labels: Object.keys(counts),
                            datasets: [{
                                label: header,
                                data: Object.values(counts),
                                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            }]
                        };
                    }
                } else if (values.length - 1 < 10 && values.length - 1 > 0) {
                    newChartData[header] = {
                        type: 'count',
                        totalCount: values.length - 1
                    }
                }

                if (values.length - 1 > 100) {
                    if (numericValues.length && values.length) {
                        const maxvalue = Math.max(...numericValues.map(Number))
                        const minvalue = Math.min(...numericValues.map(Number))
                        // console.log(minvalue)

                        const binSize = Math.ceil((maxvalue - minvalue) / 10)
                        // console.log(binSize)
                        // console.log(binSize)
                        const bins = {}
                        numericValues.forEach(value => {
                            const binIndex = Math.floor((Number(value) - minvalue) / binSize) * binSize + minvalue
                            console.log(binIndex)
                            bins[binIndex] = (bins[binIndex] || 0) + 1
                            // console.log(binIndex)
                        })

                        newChartData[header] = {
                            type: 'chart',
                            labels: Object.keys(bins).map(bin => {
                                return `${Number(bin)}-${Number(bin) + binSize}`;
                            }),
                            datasets: [{
                                label: header,
                                data: Object.values(bins),
                                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            }]
                        }
                    } else {
                        const counts = values.reduce((acc, value) => {
                            acc[value] = (acc[value] || 0) + 1;
                            return acc;
                        }, {});

                        const sortedCounts = Object.entries(counts).sort((a, b) => b[1] - a[1]);
                        const totalCount = values.length - 1;

                        let stringData = sortedCounts.slice(0, 2).map(([label, count]) => ({
                            label,
                            count,
                            percentage: ((count / totalCount) * 100).toFixed(0)
                        }));
                        // console.log(sortedCounts.length)
                        const otherCount = totalCount - stringData.reduce((sum, item) => sum + item.count, 0);
                        if (otherCount > 0) {
                            stringData.push({
                                label: `Other (${otherCount})`,
                                count: otherCount,
                                percentage: ((otherCount / totalCount) * 100).toFixed(0)
                            });
                        }

                        newChartData[header] = {
                            type: 'string',
                            stringData
                        };
                    }
                }

            });

            setChartData(newChartData);
        }
    }, [csvData, page]);

    const handleNextPage = () => {
        if ((page + 1) * rowpage < csvData.length) {
            setpage(page + 1);
        }
    }

    const handlePreviousPage = () => {
        if (page > 0) {
            setpage(page - 1);
        }
    }


    const renderCSVData = () => {
        if (csvData.length === 0) return null;
        const startpage = page * rowpage
        const endpage = startpage + rowpage
        const paginatedData = csvData.slice(startpage, endpage)
        const options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        };

        return (
            <div>
                <h2 className="text-2xl font-bold mb-4">CSV Data</h2>
                <table className="min-w-full border-collapse table-fixed">
                    <thead>
                        <tr>
                            {Object.keys(csvData[0]).map((header, index) => (
                                <th key={index} className="border px-4 py-2 bg-gray-100">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-32 sticky top-0 bg-white z-10">
                            {Object.keys(csvData[0]).map((header, index) => (
                                <td key={index} className="border px-4 py-2">
                                    {chartData[header]?.type === 'count' ? (
                                        <div className="h-32 flex items-center justify-center">
                                            <span className="text-1xl font-bold">
                                                {chartData[header].totalCount} total values
                                            </span>
                                        </div>
                                    ) : chartData[header]?.type === 'chart' ? (
                                        <div className="h-32">
                                            <Bar options={options} data={chartData[header]} />
                                        </div>
                                    ) : chartData[header]?.type === 'string' ? (
                                        <div className="h-32 flex items-center justify-center">
                                            <ul>
                                                {chartData[header].stringData.map((item, i) => (
                                                    <li key={i} className='font-bold'>
                                                        {item.label}: {item.percentage} %
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <div className="h-32 flex items-center justify-center">
                                            <span className="text-lg">Data column</span>
                                        </div>
                                    )}
                                </td>
                            ))}
                        </tr>
                        {paginatedData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {Object.values(row).map((cell, cellIndex) => (
                                    <td key={cellIndex} className="border px-4 py-2">{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='flex justify-between mt-4'>
                    <button className='btn btn-outline btn-info' onClick={handlePreviousPage}>
                        Previous Page
                    </button>
                    <button className="btn btn-outline btn-info" onClick={handleNextPage} disabled={(page + 1) * rowpage >= csvData.length}>
                        Next Page
                    </button>
                </div>

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
        return typeof str === 'string' && /^[\x20-\x7E]*$/.test(str);
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
                        <>
                            <div className="border border-gray-300 p-4 mb-4">
                                <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
                                    {renderCSVData()}
                                </div>
                            </div>
                        </>

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