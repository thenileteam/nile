import React, { useState } from 'react'
import { content, download, image, nilelogo, notification, notification1, preference, product, productloading, promotion } from '../assets';
import { Link } from 'react-router-dom';
import Links from '../Links';

const Notification = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const closeSidebar = () => {
        if (sidebarOpen) setSidebarOpen(false);
    };
  return (
    <>
        <div className='bg-[#F5F5F5] pb-56'>
        <div className="flex">
        {/* Overlay for small screens */}
        {sidebarOpen && (
            <div
            className="fixed inset-0 bg-black opacity-50 lg:hidden"
            onClick={closeSidebar}
            ></div>
        )}

        {/* Sidebar */}
        <div
            className={`fixed top-0 left-0 h-full w-[290px] z-10 bg-[#F5F5F5] border-2 text-white p-5 transition-transform transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0`}
        >
            <img src={nilelogo} alt="" className='w-[170px] flex mx-auto'/>
            <Links />
        </div>

        {/* Navbar */}
        <div className="flex-grow lg:ml-64">
            <nav className="bg-gray-100 p-4 shadow-md flex items-center gap-5 fixed w-full">
            <button
                className="lg:hidden text-gray-800 z-20"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                    sidebarOpen
                        ? 'M6 18L18 6M6 6l12 12' // Close icon
                        : 'M4 6h16M4 12h16M4 18h16' // Menu icon
                    }
                />
                </svg>
            </button>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 ml-20'>
                    <img src={notification1} alt="" />
                    <h1 className="text-[32px] font-bold">Notifications</h1>
                </div>
                <div className='flex items-center gap-10 ml-[380px]'>
                    <div className="relative">
                        <label htmlFor="Search" className="sr-only"> Search </label>

                        <input
                            type="text"
                            id="Search"
                            placeholder=""
                            className="w-[300px] rounded-md border-[#6E6E6E] border-2 p-8 py-2.5 pe-10 shadow-sm sm:text-sm"
                        />

                        <span className="absolute inset-y-0 start-0 grid w-10 place-content-center">
                            <button type="button" className="text-gray-600 hover:text-gray-700">
                            <span className="sr-only">Search</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-4"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                            </button>
                        </span>
                    </div>
                    <div>
                        <Link to="/notification"><img src={notification} alt="" /></Link>
                    </div>
                    <div>
                        <Link to="/profile"><img src={image} alt="" /></Link>
                    </div>
                </div>
            </div>
            </nav>


            <div className='mt-40 px-24'>
                <div className='flex items-center justify-center gap-3 px-20 mt-10'>
                    <div className='flex items-center gap-1'>
                        <h1 className='text-[#333333] font-bold text-[16px]'>Filter By :</h1>
                        <img src={preference} alt="" />
                    </div>
                    <div className='flex items-center gap-2'>
                        <div>
                            <h1 className='bg-[#6E6E6E] p-2 w-fit rounded-md text-[#ffffff]'>All</h1>
                        </div>
                        <div>
                            <h1 className='bg-[#FFFFFF] p-2 w-fit rounded-md text-[#6E6E6E] font-bold'>Today</h1>
                        </div>
                        <div>
                            <h1 className='bg-[#FFFFFF] p-2 w-fit rounded-md text-[#6E6E6E] font-bold'>This Month</h1>
                        </div>
                        <div>
                            <h1 className='bg-[#FFFFFF] p-2 w-fit rounded-md text-[#6E6E6E] font-bold'>This Year</h1>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-7 mt-10'>
                    <div className='space-y-5'>
                        <h1 className='text-[#333333] text-[24px] font-bold'>Unread Notification</h1>
                        <div className='bg-[#E2E8F0] w-fit p-5 rounded-lg mt-7'>
                            <div className='flex gap-5'>
                                <h1 className='text-[#6E6E6E]'>Lorem ipsum dolor sit amet consectetur. Nulla amet <br /> rutrum nulla lorem sit. Eu pharetra magna eget <br /> risus malesuada pretium tortor commodo <br /> consectetur. Elementum purus.</h1>
                                <div>
                                    <p className='text-[#333333] font-bold text-center'>9:41am</p>
                                    <p className='text-[#7E76BC] font-extrabold text-center mt-2'>Mark As read</p>
                                    <p className='text-[#7E76BC] font-extrabold text-center mt-2'>Delete</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#E2E8F0] w-fit p-5 rounded-lg'>
                            <div className='flex gap-5'>
                                <h1 className='text-[#6E6E6E]'>Lorem ipsum dolor sit amet consectetur. Nulla amet <br /> rutrum nulla lorem sit. Eu pharetra magna eget <br /> risus malesuada pretium tortor commodo <br /> consectetur. Elementum purus.</h1>
                                <div>
                                    <p className='text-[#333333] font-bold text-center'>9:41am</p>
                                    <p className='text-[#7E76BC] font-extrabold text-center mt-2'>Mark As read</p>
                                    <p className='text-[#7E76BC] font-extrabold text-center mt-2'>Delete</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#E2E8F0] w-fit p-5 rounded-lg'>
                            <div className='flex gap-5'>
                                <h1 className='text-[#6E6E6E]'>Lorem ipsum dolor sit amet consectetur. Nulla amet <br /> rutrum nulla lorem sit. Eu pharetra magna eget <br /> risus malesuada pretium tortor commodo <br /> consectetur. Elementum purus.</h1>
                                <div>
                                    <p className='text-[#333333] font-bold text-center'>9:41am</p>
                                    <p className='text-[#7E76BC] font-extrabold text-center mt-2'>Mark As read</p>
                                    <p className='text-[#7E76BC] font-extrabold text-center mt-2'>Delete</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#E2E8F0] w-fit p-5 rounded-lg'>
                            <div className='flex gap-5'>
                                <h1 className='text-[#6E6E6E]'>Lorem ipsum dolor sit amet consectetur. Nulla amet <br /> rutrum nulla lorem sit. Eu pharetra magna eget <br /> risus malesuada pretium tortor commodo <br /> consectetur. Elementum purus.</h1>
                                <div>
                                    <p className='text-[#333333] font-bold text-center'>9:41am</p>
                                    <p className='text-[#7E76BC] font-extrabold text-center mt-2'>Mark As read</p>
                                    <p className='text-[#7E76BC] font-extrabold text-center mt-2'>Delete</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#E2E8F0] w-fit p-5 rounded-lg'>
                            <div className='flex gap-5'>
                                <h1 className='text-[#6E6E6E]'>Lorem ipsum dolor sit amet consectetur. Nulla amet <br /> rutrum nulla lorem sit. Eu pharetra magna eget <br /> risus malesuada pretium tortor commodo <br /> consectetur. Elementum purus.</h1>
                                <div>
                                    <p className='text-[#333333] font-bold text-center'>9:41am</p>
                                    <p className='text-[#7E76BC] font-extrabold text-center mt-2'>Mark As read</p>
                                    <p className='text-[#7E76BC] font-extrabold text-center mt-2'>Delete</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <ol className="flex justify-center gap-3 text-xs font-medium mt-3">
                            <li>
                                <a
                                href="#"
                                className="inline-flex size-8 items-center justify-center rounded border border-gray-300 bg-white hover:bg-[#6E6E6E] text-gray-900 hover:text-[#E2E8F0] rtl:rotate-180"
                                >
                                <span className="sr-only">Prev Page</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                href="#"
                                className="block size-8 rounded border border-[#7E76BC] bg-white text-center leading-8 text-[#7E76BC]"
                                >
                                1
                                </a>
                            </li>

                            <li className="block size-8 rounded border border-gray-300 bg-white text-center leading-8 text-gray-900">
                                2
                            </li>

                            <li>
                                <a
                                href="#"
                                className="block size-8 rounded border border-gray-300 bg-white text-center leading-8 text-gray-900"
                                >
                                ...
                                </a>
                            </li>

                            <li>
                                <a
                                href="#"
                                className="block size-8 rounded border border-gray-300 bg-white text-center leading-8 text-gray-900"
                                >
                                9
                                </a>
                            </li>

                            <li>
                                <a
                                href="#"
                                className="block size-8 rounded border border-gray-300 bg-white text-center leading-8 text-gray-900"
                                >
                                10
                                </a>
                            </li>

                            <li>
                                <a
                                href="#"
                                className="inline-flex size-8 items-center justify-center rounded border border-gray-300 bg-white hover:bg-[#6E6E6E] text-gray-900 hover:text-[#E2E8F0] rtl:rotate-180"
                                >
                                <span className="sr-only">Next Page</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                                </a>
                            </li>
                            </ol>
                        </div>
                    </div>

                    <div className='space-y-5'>
                        <h1 className='text-[#333333] text-[24px] font-bold'>Read Notification</h1>
                        <div className='bg-[#FFFFFF] w-fit p-5 rounded-lg mt-7'>
                            <div className='flex gap-5'>
                                <h1 className='text-[#6E6E6E]'>Lorem ipsum dolor sit amet consectetur. Nulla amet <br /> rutrum nulla lorem sit. Eu pharetra magna eget <br /> risus malesuada pretium tortor commodo <br /> consectetur. Elementum purus.</h1>
                                <div>
                                    <p className='text-[#333333] font-bold text-center mt-6'>9:41am</p>
                                    <p className='text-[#7E76BC] font-extrabold text-center mt-1'>Delete</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#FFFFFF] w-fit p-5 rounded-lg'>
                            <div className='flex gap-5'>
                                <h1 className='text-[#6E6E6E]'>Lorem ipsum dolor sit amet consectetur. Nulla amet <br /> rutrum nulla lorem sit. Eu pharetra magna eget <br /> risus malesuada pretium tortor commodo <br /> consectetur. Elementum purus.</h1>
                                <div>
                                    <p className='text-[#333333] font-bold text-center mt-6'>9:41am</p>
                                    <p className='text-[#7E76BC] font-extrabold text-center mt-1'>Delete</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#FFFFFF] w-fit p-5 rounded-lg'>
                            <div className='flex gap-5'>
                                <h1 className='text-[#6E6E6E]'>Lorem ipsum dolor sit amet consectetur. Nulla amet <br /> rutrum nulla lorem sit. Eu pharetra magna eget <br /> risus malesuada pretium tortor commodo <br /> consectetur. Elementum purus.</h1>
                                <div>
                                    <p className='text-[#333333] font-bold text-center mt-6'>9:41am</p>
                                    <p className='text-[#7E76BC] font-extrabold text-center mt-1'>Delete</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#FFFFFF] w-fit p-5 rounded-lg'>
                            <div className='flex gap-5'>
                                <h1 className='text-[#6E6E6E]'>Lorem ipsum dolor sit amet consectetur. Nulla amet <br /> rutrum nulla lorem sit. Eu pharetra magna eget <br /> risus malesuada pretium tortor commodo <br /> consectetur. Elementum purus.</h1>
                                <div>
                                    <p className='text-[#333333] font-bold text-center mt-6'>9:41am</p>
                                    <p className='text-[#7E76BC] font-extrabold text-center mt-1'>Delete</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#FFFFFF] w-fit p-5 rounded-lg'>
                            <div className='flex gap-5'>
                                <h1 className='text-[#6E6E6E]'>Lorem ipsum dolor sit amet consectetur. Nulla amet <br /> rutrum nulla lorem sit. Eu pharetra magna eget <br /> risus malesuada pretium tortor commodo <br /> consectetur. Elementum purus.</h1>
                                <div>
                                    <p className='text-[#333333] font-bold text-center mt-6'>9:41am</p>
                                    <p className='text-[#7E76BC] font-extrabold text-center mt-1'>Delete</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <ol className="flex justify-center gap-3 text-xs font-medium mt-3">
                            <li>
                                <a
                                href="#"
                                className="inline-flex size-8 items-center justify-center rounded border border-gray-300 bg-white hover:bg-[#6E6E6E] text-gray-900 hover:text-[#E2E8F0] rtl:rotate-180"
                                >
                                <span className="sr-only">Prev Page</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                href="#"
                                className="block size-8 rounded border border-[#7E76BC] bg-white text-center leading-8 text-[#7E76BC]"
                                >
                                1
                                </a>
                            </li>

                            <li className="block size-8 rounded border border-gray-300 bg-white text-center leading-8 text-gray-900">
                                2
                            </li>

                            <li>
                                <a
                                href="#"
                                className="block size-8 rounded border border-gray-300 bg-white text-center leading-8 text-gray-900"
                                >
                                ...
                                </a>
                            </li>

                            <li>
                                <a
                                href="#"
                                className="block size-8 rounded border border-gray-300 bg-white text-center leading-8 text-gray-900"
                                >
                                9
                                </a>
                            </li>

                            <li>
                                <a
                                href="#"
                                className="block size-8 rounded border border-gray-300 bg-white text-center leading-8 text-gray-900"
                                >
                                10
                                </a>
                            </li>

                            <li>
                                <a
                                href="#"
                                className="inline-flex size-8 items-center justify-center rounded border border-gray-300 bg-white hover:bg-[#6E6E6E] text-gray-900 hover:text-[#E2E8F0] rtl:rotate-180"
                                >
                                <span className="sr-only">Next Page</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                                </a>
                            </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center px-48 justify-end'>
                <div className=' flex mt-10'>
                    
                    <h1 className='text-[#333333] flex font-bold gap-1 items-center border-[#333333] border-2 p-2 rounded-md'>
                        <img src={download} alt="" />
                        Export CSV
                    </h1>
                </div>
            </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Notification