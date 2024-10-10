import { faLeanpub } from '@fortawesome/free-brands-svg-icons';
import { faBox, faCaretDown, faCode, faCodeFork, faCompass, faFileLines, faMagnifyingGlass, faMessage, faPlus, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Readdata from './readdata';

function Data() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`flex transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-16'}`}>
                <div
                    className={`fixed top-0 left-0 h-full ${isOpen ? 'w-64' : 'w-16'} bg-base-100 border-r border-gray-300 transition-all duration-300 ease-in-out z-10`}>
                    <div className="p-4 flex flex-col">
                        <div className="mb-1 cursor-pointer" onClick={toggleSidebar}>
                            <div className="flex items-center mb-2">
                                <button className="btn btn-square btn-ghost mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-5 w-5 stroke-current mr-3">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                                {isOpen && <img className='w-1/2 h-1/2' src="/public/image/logo.png" alt="Logo" />}
                            </div>
                            <div className="flex items-center mb-2">
                                <button className={`btn btn-square btn-ghost mr-2 border-2 border-gray-300 rounded-full flex items-center transition-all duration-300 ${isOpen ? 'w-[50%]' : 'w-8'} h-10`}>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon className='w-6 h-6' icon={faPlus} style={{ color: "#6bb9f5" }} />
                                        {isOpen && <span className="ml-2">Create</span>}
                                    </div>
                                </button>
                            </div>
                            {[
                                { icon: faCompass, label: 'Home' },
                                { icon: faTrophy, label: 'Competitions' },
                                { icon: faBox, label: 'Datasets' },
                                { icon: faCodeFork, label: 'Models' },
                                { icon: faCode, label: 'Code' },
                                { icon: faMessage, label: 'Discussions' },
                                { icon: faLeanpub, label: 'Learn' },
                                { icon: faCaretDown, label: 'More' },
                            ].map(({ icon, label }) => (
                                <div className="flex items-center mb-2" key={label}>
                                    <FontAwesomeIcon className={`${isOpen ? 'w-[9%] h-[9%] ml-3' : 'w-[70%] h-[70%] ml-1 mt-2'}`} icon={icon} style={{ color: "#666666" }} />
                                    {isOpen && <a className="btn btn-ghost mr-11">{label}</a>}
                                </div>
                            ))}

                            <div className="flex items-center mb-2">
                                <FontAwesomeIcon className={`${isOpen ? 'w-[9%] h-[9%] ml-3 mt-[100px]' : 'w-[70%] h-[70%] ml-1 mt-[250px]'}`} icon={faFileLines} style={{ color: "#666666" }} />
                                {isOpen && <a className="btn btn-ghost mr-11 mt-[100px]">View Active Events</a>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 w-full max-w-7xl mx-auto p-6">
                    <div className="flex items-center space-x-4">
                        <div className="relative w-full">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400" />
                            </span>
                            <input
                                type="text"
                                className="input input-bordered w-full pl-10 rounded-full"
                                placeholder="Search..."
                            />
                        </div>
                        <button className="btn btn-ghost rounded-full">Sign In</button>
                        <button className="btn btn-neutral rounded-full">Register</button>
                    </div>
                    <div className='p-3 flex items-center'>
                        <img src="/public/image/images.png" alt="logo" className='w-[2%] h-[3%]' />
                        <p className='ml-5 text-xs'>Radiological Society of North America · Featured Code Competition · 10 hours to go</p>
                        <button className="btn btn-neutral rounded-full ml-[45%] btn-sm w-[10%] text-xs">Join Competition</button>
                        <div className="flex-none">
                            <button className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-5 w-5 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='p-3 flex items-center mt-6'>
                        <div>
                            <h1 className='text-4xl font-bold'>RSNA 2024 Lumber Spine Degenerative</h1>
                            <h1 className='text-4xl font-bold mt-2'>Classification</h1>
                            <p className='mt-1'>Classify lumbar spine degenerative conditions</p>
                        </div>
                        <img src="/public/image/header.png" alt="head" className='w-[25%] h-[25%] rounded-lg ml-[18%]' />
                    </div>
                    <div className='p-1 mt-4 flex items-center justify-center relative'>
                        <div className="absolute inset-x-0 bottom-0 w-full">
                            <div className="h-0.5 w-[100%] bg-gray-300"></div>
                        </div>
                        <Link to='/'>
                            <button className="btn btn-ghost">Overview</button>
                        </Link>
                        <button className="btn btn-ghost">Data</button>
                    </div>

                    <div className='flex mt-6'>
                        <div className='flex-col w-2/1 pr-2'>
                            <h1 className='text-2xl font-bold'>Dataset Description</h1>
                            <p className='mt-6'>
                                The goal of this competition is to identify medical conditions affecting the lumbar spine in MRI scans.
                            </p>
                            <p className='mt-3'>This competition uses a hidden test. When your submitted notebook is scored, the actual test data (including a full length sample submission) will be made available to your notebook.</p>
                            <h1 className='text-2xl font-bold mt-6 mb-6'>Files</h1>
                            <p className='font-bold'>train.csv Labels for the train set.</p>
                            <li className='mt-3'>study_id - The study ID. Each study may include multiple series of images.</li>
                            <li>[condition]_[level] - The target labels, such as spinal_canal_stenosis_l1_l2, with the severity levels of Normal/Mild, Moderate, or Severe. Some entries have incomplete labels.</li>

                            <p className='font-bold mt-3'>train_label_coordinates.csv</p>
                            <li className='mt-3'>study_id</li>
                            <li>series_id - The imagery series ID.</li>
                            <li>instance_number - The image's order number within the 3D stack.</li>
                            <li>condition - There are three core conditions: spinal canal stenosis, neural_foraminal_narrowing, and subarticular_stenosis. The latter two are considered for each side of the spine.</li>
                            <li>level - The relevant vertebrae, such as l3_l4</li>
                            <li>[x/y] - The x/y coordinates for the center of the area that defined the label.</li>

                            <p className='font-bold mt-3'>sample_submission.csv</p>
                            <li className='mt-3'>row_id - A slug of the study ID, condition, and level such as 12345_spinal_canal_stenosis_l3_l4.</li>
                            <li>[normal_mild/moderate/severe] - The three prediction columns.</li>


                            <p className='font-bold mt-3'>[train/test]_images/[study_id]/[series_id]/[instance_number].dcm The imagery data.</p>
                            <p className='font-bold mt-3'>[train/test]_series_descriptions.csv</p>
                            <li className='mt-3'>study_id</li>
                            <li>series_id</li>
                            <li>series_description The scan's orientation.</li>
                            <div className="h-0.5 w-full bg-gray-200 mt-5 mb-20"></div>

                        </div>
                        <div className='flex-col w-1/3 ml-40'>
                            <h1 className='text-1xl font-bold mt-2'>Files</h1>
                            <p className='text-xs'>147320 files</p>
                            <h1 className='text-1xl font-bold mt-8'>Size</h1>
                            <p className='text-xs'>35.34 GB</p>
                            <h1 className='text-1xl font-bold mt-8'>Type</h1>
                            <p className='text-xs'>dcm, csv</p>
                            <h1 className='text-1xl font-bold mt-8'>License</h1>
                            <p className='text-xs'>Subject to Competition Rules</p>

                        </div>
                    </div>
                    <div className='mb-20'>
                            <Readdata/>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-white opacity-5"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
}

export default Data;
