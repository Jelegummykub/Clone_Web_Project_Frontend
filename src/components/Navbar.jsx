import { faLeanpub } from '@fortawesome/free-brands-svg-icons';
import { faBox, faCaretDown, faCode, faCodeFork, faCompass, faCopy, faFileLines, faMagnifyingGlass, faMessage, faPlus, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const [copied, setCopied] = useState(false);
    const codeText = `row_id,normal_mild,moderate,severe
    123456_left_neural_foraminal_narrowing_l1_l2,0.333,0.333,0.333
    123456_left_neural_foraminal_narrowing_l2_l3,0.333,0.333,0.333
    123456_left_neural_foraminal_narrowing_l3_l4,0.333,0.333,0.333
    etc.`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeText)
            .then(() => setCopied(true))
            .catch(err => console.error('Failed to copy text: ', err));
        setTimeout(() => setCopied(false), 2000)
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
                        <button className="btn btn-ghost">Overview</button>
                        <Link to='/Data'>
                            <button className="btn btn-ghost">Data</button>
                        </Link>
                    </div>

                    <div className='flex mt-6  '>
                        <div className='flex-col'>
                            <h1 className='text-2xl font-bold'>Overview</h1>
                            <p className='mt-1'>
                                The goal of this competition is to create models that can be used to aid in the detection and classification of
                            </p>
                            <p>degenerative spine conditions using lumbar spine MR images. Competitors will develop models that simulate a</p>
                            <p>radiologist's performance in diagnosing spine conditions.</p>
                            <img src="/public/image/time.png" alt="" className='w-[90%] h-[3%] mt-3' />
                            <div className="h-0.5 w-full bg-gray-200 mt-2"></div>
                            <h1 className='text-2xl font-bold mt-2'>Description</h1>
                            <p className='mt-6'>Low back pain is the leading cause of disability worldwide, according to the World Health Organization, affecting 619 million people in 2020. Most people experience low back pain at some point in their lives, with the frequency increasing with age. Pain and restricted mobility are often symptoms of spondylosis, a set of degenerative spine conditions including degeneration of intervertebral discs and subsequent narrowing of the spinal canal (spinal stenosis), subarticular recesses, or neural foramen with associated compression or irritations of the nerves in the low back.</p>
                            <p className='mt-5'>Magnetic resonance imaging (MRI) provides a detailed view of the lumbar spine vertebra, discs and nerves, enabling radiologists to assess the presence and severity of these conditions. Proper diagnosis and grading of these conditions help guide treatment and potential surgery to help alleviate back pain and improve overall health and quality of life for patients.</p>
                            <p className='mt-5'>RSNA has teamed with the American Society of Neuroradiology (ASNR) to conduct this competition exploring whether artificial intelligence can be used to aid in the detection and classification of degenerative spine conditions using lumbar spine MR images.</p>
                            <p className='mt-5'>The challenge will focus on the classification of five lumbar spine degenerative conditions: Left Neural Foraminal Narrowing, Right Neural Foraminal Narrowing, Left Subarticular Stenosis, Right Subarticular Stenosis, and Spinal Canal Stenosis. For each imaging study in the dataset, we’ve provided severity scores (Normal/Mild, Moderate, or Severe) for each of the five conditions across the intervertebral disc levels L1/L2, L2/L3, L3/L4, L4/L5, and L5/S1.</p>
                            <p className='mt-5'>To create the ground truth dataset, the RSNA challenge planning task force collected imaging data sourced from eight sites on five continents. This multi-institutional, expertly curated dataset promises to improve standardized classification of degenerative lumbar spine conditions and enable development of tools to automate accurate and rapid disease classification.</p>
                            <p className='mt-5'>Challenge winners will be recognized at an event during the RSNA 2024 annual meeting. For more information on the challenge, contact RSNA Informatics staff at informatics@rsna.org.</p>
                            <div className="h-0.5 w-full bg-gray-200 mt-2"></div>
                            <h1 className='text-2xl font-bold mt-2'>Evaluation</h1>
                            <p className='mt-6'>Submissions are evaluated using the average of sample weighted log losses and an any_severe_spinal prediction generated by the metric. The metric notebook can be found here.</p>
                            <p className='mt-6'>The sample weights are as follows:</p>
                            <li className='mt-6'>1 for normal/mild.</li>
                            <li>2 for moderate.</li>
                            <li>4 for severe.</li>
                            <p className='mt-5'>For each row ID in the test set, you must predict a probability for each of the different severity levels. The file should contain a header and have the following format:</p>
                            <div className='relative p-4 border rounded bg-gray-100 mt-3'>
                                <pre>
                                    <code>{codeText}</code>
                                </pre>
                                <button
                                    onClick={copyToClipboard}
                                    className='absolute top-2 right-2  text-white px-2 py-1 rounded'
                                >
                                    <FontAwesomeIcon icon={faCopy} style={{ color: "#212121", marginRight: '4px' }} />
                                    {/* {copied ? 'Copied!' : 'Copy'} */}
                                </button>
                            </div>
                            <p className='mt-5'>In rare cases the lowest vertebrae aren't visible in the imagery. You still need to make predictions (nulls will cause errors), but those rows will not be scored.
                                For this competition, the any_severe_scalar has been set to 1.0.
                            </p>
                            <div className="h-0.5 w-full bg-gray-200 mt-2"></div>
                            <h1 className='text-2xl font-bold mt-3'>Timeline</h1>
                            <li className='font-bold mt-6'>May 16, 2024 - Start Date.</li>
                            <li className='font-bold'>October 1, 2024 - Entry Deadline. You must accept the competition rules before this date in order to compete.</li>
                            <li className='font-bold'>October 1, 2024 - Team Merger Deadline. This is the last day participants may join or merge t</li>
                            <li className='font-bold'>October 8, 2024 - Final Submission Deadline.</li>
                            <li className='font-bold'>October 28, 2024 - Winners’ Requirements Deadline. This is the deadline for winners to submit to the host/Kaggle their training code, video, method description.</li>
                            <p className='mt-6'>All deadlines are at 11:59 PM UTC on the corresponding day unless otherwise noted. The competition organizers reserve the right to update the contest timeline if they deem it necessary.</p>

                            <div className="h-0.5 w-full bg-gray-200 mt-2"></div>
                            <h1 className='text-2xl font-bold mt-3'>Prizes</h1>
                            <li className='mt-6'>1st Place - $ 12,000</li>
                            <li>2nd Place - $ 10,000</li>
                            <li>3rd Place - $ 8,000</li>
                            <li>4th Place - $ 5,000</li>
                            <li>5th - 9th Places - $ 3,000 each</li>
                            <p className='mt-4'>Because this competition is being hosted in coordination with the Radiological Society of North America (RSNA®) Annual Meeting, winners will be invited and strongly encouraged to attend the conference with waived fees, contingent on review of solution and fulfillment of winners' obligations.</p>
                            <p className='mt-3'>Note that, per the competition rules, in addition to the standard Kaggle Winners' Obligations (open-source licensing requirements, solution packaging/delivery, presentation to host), the host team also asks that you:</p>
                            <p className='mt-3'>(i) create a short video presenting your approach and solution, and</p>
                            <p className='mt-3'>(ii) publish a link to your open sourced code on the competition forum</p>
                            <p className='mt-3'>(iii) (strongly suggested) make some version of your model publicly available for more hands-on testing purposes only. As an example of a hosted algorithm, please see http://demos.md.ai/#/bone-age.</p>

                            <div className="h-0.5 w-full bg-gray-200 mt-2"></div>
                            <h1 className='text-2xl font-bold mt-3'>Acknowledgements</h1>
                            <p className='mt-5 font-bold'>Challenge Organizing Team</p>
                            <p className='mt-3'>- Tyler Richards, MD - University of Utah</p>
                            <p className='mt-3'>- Jason Talbott, MD, PhD - University of California San Francisco</p>
                            <p className='mt-3'>- Adam Flanders, MD - Thomas Jefferson University</p>
                            <p className='mt-3'>- Robyn Ball, PhD - The Jackson Laboratory</p>
                            <p className='mt-3'>- Errol Colak, MD - Unity Health Toronto</p>
                            <p className='mt-3'>- Felipe C. Kitamura, MD, PhD - Universidade Federal de São Paulo</p>
                            <p className='mt-3'>- Luciano M. Prevedello, MD, MPH - Ohio State University</p>
                            <p className='mt-3'>- John Mongan, MD, PhD - University of California San Francisco</p>
                            <p className='mt-5 font-bold'>Data Contributors</p>
                            <p className='mt-3'>Thanks to the following institutions, which contributed de-identified MR images that were assembled to create the challenge dataset:</p>
                            <li className='mt-4'>Chiang Mai University, Thailand</li>
                            <li>Dasa, Brazil</li>
                            <li >Gold Coast University Hospital, Southport, Queensland, Australia</li>
                            <li >Koç University, Istanbul, Turkey</li>
                            <li >University of Sarajevo, Bosnia and Herzegovina</li>
                            <li >Thomas Jefferson University Hospital, Philadelphia, PA, USA</li>
                            <li >Universidade Federal de São Paulo, Brazil</li>
                            <li >University of California San Francisco, USA</li>
                            <li >University of Utah, Salt Lake City, Utah, USA</li>
                            <p className='mt-6'>Additional thanks to the following contributing sites:</p>
                            <li >Queen's University at Kingston, Ontario, Canada</li>
                            <li >Tallaght University Hospital, Dublin, Ireland</li>
                            <li >University Hospitals Cleveland Medical Center, Cleveland, OH, USA</li>
                            <img src="/public/image/w.png" alt="" className='mt-5 w-[80%] h-[6%]' />
                            <p className='mt-5 font-bold'>Data Curators</p>
                            <li className='mt-4'>Maryam Vazirabad – RSNA</li>
                            <li>Hui-Ming Lin, HBSc – Unity Health Toronto</li>
                            <p className='mt-5 font-bold'>Data Annotators</p>
                            <p className='mt-3'>The challenge organizers wish to thank the American Society of Neuroradiology for helping to members to label the dataset used in the challenge. ASNR is the world’s leading organization for the future of neuroradiology representing more than 5,300 radiologists, researchers, interventionalists, and imaging scientists.</p>
                            <img src="/public/image/ASNR logo.png" alt="" className='mt-12 mb-12 w-[15%] h-[1%]' />
                            <p className="mt-3">Arsany Hakim, MD - Bern University Hospital, Inselspital</p>
                            <p className="mt-3">Lai Peng Chan, FRCR, MBBS - Singapore General Hospital</p>
                            <p className="mt-3">Vinson Louis Uytana, MD - Cedars-Sinai Medical Center</p>
                            <p className="mt-3">Anthony Kam, MD, PhD - Loyola University Medical Center</p>
                            <p className="mt-3">Venkata Naga Srinivas Dola, DM, FRCR - Children’s National Hospital, George Washington University</p>
                            <p className="mt-3">Girish Bathla, MD, FRCR - Associate Professor, Mayo Clinic, Rochester</p>
                            <p className="mt-3">Yonghan Ting, FRCR - National University Hospital, Singapore</p>
                            <p className="mt-3">Daniel Murphy, MD - University of Utah</p>
                            <p className="mt-3">David Vu, MD - Scripps Clinic Medical Group</p>
                            <p className="mt-3">Gagandeep Choudhary, MD, MBBS - Oregon Health and Science University</p>
                            <p className="mt-3">Tze Chwan Lim, FRCR, MBBS - Woodlands Health</p>
                            <p className="mt-3">Luciano Farage, MD - UNIEURO</p>
                            <p className="mt-3">Christie Lincoln, MD - MD Anderson Cancer Center</p>
                            <p className="mt-3">Kian Ming Chew, MBChB - Woodlands Health Singapore</p>
                            <p className="mt-3">Katie Bailey, MD - University of South Florida</p>
                            <p className="mt-3">Eduardo Portela de Oliveira, MD - The Ottawa Hospital, University of Ottawa</p>
                            <p className="mt-3">Fanny Moron, MD - Baylor College of Medicine</p>
                            <p className="mt-3">Achint Kumar Singh , MD - UT Health San Antonio</p>
                            <p className="mt-3">Nico Sollmann, MD, PhD - University Hospital Ulm</p>
                            <p className="mt-3">Kim Seifert, MD, MS - Stanford</p>
                            <p className="mt-3">Eric D. Schwartz, MD - Director of Neuroradiology, St. Elizabeth's Medical Center</p>
                            <p className="mt-3">Mariana Sanchez Montaño, MD - Rh Radiologos</p>
                            <p className="mt-3">Charlotte Yuk-Yan Chung, MD, PhD - NYU Langone Health</p>
                            <p className="mt-3">Lubdha Shah , MD - University of Utah</p>
                            <p className="mt-3">Ling Ling Chan, FRCR, MBBS - Singapore General Hospital</p>
                            <p className="mt-3">Scott R. Andersen, MD - Colorado Kaiser</p>
                            <p className="mt-3">Troy Hutchins, MD - University of Utah</p>
                            <p className="mt-3">Rita Nassanga, Mmed Radiology, MBChB - Makerere University, Kampala Uganda</p>
                            <p className="mt-3">Rukya Ali Masum - Ohio State Wexner Medical Center</p>
                            <p className="mt-3">Karl Soderlund, MD - Naval Medical Center Portsmouth</p>
                            <p className="mt-3">Le Roy Chong, MBBS, FRCR - Changi General Hospital</p>
                            <p className="mt-3">Jonathan D. Clemente, MD - Carolinas Medical Center</p>
                            <p className="mt-3">Ali Haikal Hussain, FRCR, MBChB - University of Rochester</p>
                            <p className="mt-3">Keynes Low - Woodlands Health</p>
                            <p className="mt-3">Mohiuddin Hadi, MD - University of Louisville</p>
                            <p className="mt-3">Michael Hollander, MD - Danbury Radiology Associates</p>
                            <p className="mt-3">Nurul Hafidzah Binti Rahim, MD - Hospital Putrajaya, Malaysia</p>
                            <p className="mt-3">Angela Guarnizo Capera, MD - Fundación Santa Fe de Bogotá</p>
                            <p className="mt-3">Lex A. Mitchell, MD - Hawaii Permanente Medical Group</p>
                            <p className="mt-3">Gennaro D'Anna, MD - ASST Ovest Milanese</p>
                            <p className="mt-3">Ellen Hoeffner, MD - University of Michigan</p>
                            <p className="mt-3">John L. Go, MD - University of Southern California</p>
                            <p className="mt-3">Facundo Nahuel Diaz, MD - Atrys Health / Hospital Italiano de Buenos Aires</p>
                            <p className="mt-3">Jacob Ormsby, MD, MBA - University of New Mexico</p>
                            <p className="mt-3">Jaya Nath, MD - Northport VA Medical center</p>
                            <p className="mt-3">Nathaniel von Fischer, MD - Kaiser Permanente South San Francisco</p>
                            <p className="mt-3">Vahe M. Zohrabian, MD - Northwell Health, North Shore University Hospital</p>
                            <p className="mt-3">Mary Niroshinee Muthukumarasamy, MBBS, MD - Ministry of Health, Sri Lanka</p>
                            <p className="mt-3">Sucari Vlok, MBChB, MMed - Tygerberg Hospital, University of Stellenbosch</p>
                            <p className="mt-3">Nafisa Paruk, FCRad diagnostics, 2 SA, MBChB - Dr. Oosthuizen and Partners</p>
                            <p className="mt-3">Shayan Sirat Maheen Anwar, MBBS, FCPS - Aga Khan University Hospital</p>
                            <p className="mt-3">Giuseppe Cruciata, MD - Stony Brook University Hospital</p>
                            <p className="mt-3">Omar Islam, MD, FRCPC - Queen's University</p>
                            <p className="mt-3">Loizos Siakallis, MD - University College London</p>
                            <p className="mt-3">Ichiro Ikuta, MD, MMSc - Mayo Clinic Arizona</p>
                            <img src="/public/image/MD.ai logo.png" alt="" className='mt-12 mb-12 w-[15%] h-[1%]' />
                            <p className='mt-5'>Special thanks to MD.ai for providing tooling for the data annotation process</p>

                            <div className="h-0.5 w-full bg-gray-200 mt-2"></div>
                            <h1 className='text-2xl font-bold mt-3'>Citation</h1>
                            <p className='mt-6 mb-44'>Tyler Richards, Jason Talbott, Robyn Ball, Errol Colak, Adam Flanders, Felipe Kitamura, John Mongan, Luciano Prevedello, Maryam Vazirabad.. (2024). RSNA 2024 Lumbar Spine Degenerative Classification. Kaggle. https://kaggle.com/competitions/rsna-2024-lumbar-spine-degenerative-classification</p>


                        </div>
                        <div className=''>
                            <h1 className='text-1xl font-bold mt-3'>Competition Host</h1>
                            <div className='flex items-center'>
                                <p className='text-xs mt-2'>Radiological Society of North </p>
                                <img src="/public/image/images.png" alt="logo" className='w-[20%] h-[20%] mt-1 ml-2' />
                            </div>
                            <p className='text-xs'>America</p>
                            <h1 className='text-1xl font-bold mt-3'>Prizes & Awards</h1>
                            <p className='text-xs mt-2'>$50,000</p>
                            <p className='text-xs'>Awards Points & Medals</p>
                            <h1 className='text-1xl font-bold mt-3'>Participation</h1>
                            <p className='text-xs mt-2'>14,720 Entrants</p>
                            <p className='text-xs'>2,471 Participants</p>
                            <p className='text-xs'>1,903 Teams</p>
                            <p className='text-xs'>23,443 Submissions</p>
                        </div>
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

export default Navbar;
