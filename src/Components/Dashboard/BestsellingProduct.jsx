import React, { useState } from 'react'
import { add, arrowleft, download, image, nilelogo, notification, preference, saletag, saletag2, storeverified, transaction, trash, uptown } from '../../assets';
import { Link } from 'react-router-dom';
import Links from '../../Links';
import Edit from '../Popups/Edit';

const BestsellingProduct = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const closeSidebar = () => {
        if (sidebarOpen) setSidebarOpen(false);
    };
  return (
    <>
       <div className='bg-[#F5F5F5] pb-20'>
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
                <div className='flex items-center gap-3 ml-20'>
                    <Link to="/dashboard">
                        <img src={arrowleft} alt="" />
                    </Link>
                    <img src={saletag2} alt="" />
                    <h1 className="text-[32px] font-bold">Best Selling Products</h1>
                </div>
                <div className='flex items-center gap-10 ml-[300px]'>
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

            <div className="p-6 mt-28 px-28">
                <div className='flex gap-16'>
                    <div className='bg-[#FFFFFF] border-2 shadow-sm w-[216px] p-5 rounded-md'>
                        <img src={saletag} alt="" />
                        <h1 className='text-[#333333] text-[22px] font-bold mt-1'>50,0000</h1>
                        <p className='text-[#6E6E6E]'>Total orders</p>
                    </div>
                    <div className='bg-[#FFFFFF] border-2 shadow-sm w-[216px] p-5 rounded-md'>
                        <img src={storeverified} alt="" />
                        <h1 className='text-[#333333] text-[22px] font-bold mt-1'>50,0000</h1>
                        <p className='text-[#6E6E6E]'>Total orders</p>
                    </div>
                    <div className='bg-[#FFFFFF] border-2 shadow-sm w-[216px] p-5 rounded-md'>
                        <img src={transaction} alt="" />
                        <h1 className='text-[#333333] text-[22px] font-bold mt-1'>50,0000</h1>
                        <p className='text-[#6E6E6E]'>Total orders</p>
                    </div>
                    <div className='bg-[#FFFFFF] border-2 shadow-sm w-[216px] p-5 rounded-md'>
                        <img src={uptown} alt="" />
                        <h1 className='text-[#333333] font-bold text-[24px]'>System Health</h1>
                    </div>
                </div>
            </div>

            <div className="px-20 mt-10">
                <div className="border-2 border-white shadow-[0px_4px_10px_rgba(0,0,0,0.3)]"></div>
            </div>

            <div className='flex items-center justify-end px-20 mt-10'>
                <h1 className='text-[#333333] font-bold text-[16px]'>Filter By :</h1>
                <img src={preference} alt="" />
            </div>


            <div className="px-20">
            <table className=" w-full border-separate border-spacing-y-5">
                <thead>
                <tr className='text-left bg-[#E2E8F0] shadow-lg'>
                    <th className="px-2 py-3 font-bold text-[14px] text-center">Product ID</th>
                    <th className="px-2 py-3 font-bold text-[14px] text-center">Store Name</th>
                    <th className="px-2 py-3 font-bold text-[14px] text-center">Product Name</th>
                    <th className="px-2 py-3 font-bold text-[14px] text-center">Category</th>
                    <th className="px-2 py-3 font-bold text-[14px] text-center">Price</th>
                    <th className="px-2 py-3 font-bold text-[14px] text-center">Date Added</th>
                    <th className="px-2 py-3 font-bold text-[14px] text-center">Stock Level</th>
                    <th className="px-2 py-3 font-bold text-[14px] text-center">Status</th>
                    <th className="px-2 py-3 font-bold text-[14px] text-center">Actions</th>
                    <th className="px-2 py-3 font-bold text-[14px] text-center flex items-center justify-center gap-1">Bulk Action
                      <div>
                        <img src={trash} alt="" />
                      </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                {/* Row 1 */}
                <tr className='bg-[#ffffff] shadow-md'>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">5321</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Kulev Shoes</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Lion's Den</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">57</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">$350</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">05/11/2024</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Pending</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Pending</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center flex items-center justify-center gap-3">
                        <Edit />
                        <img src={trash} alt="" />
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center gap-3">
                        <input
                            type="checkbox"
                            id="MarketingAccept"
                            name="marketing_accept"
                            className="size-5 rounded-md bg-white shadow-sm"
                        />
                    </td>
                </tr>

                {/* Row 2 */}
                <tr className='bg-[#ffffff] shadow-md'>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">5321</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Kulev Shoes</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Lion's Den</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">57</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">$350</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">05/11/2024</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Pending</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Pending</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center flex items-center justify-center gap-3">
                        <Edit />
                        <img src={trash} alt="" />
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center gap-3">
                        <input
                            type="checkbox"
                            id="MarketingAccept"
                            name="marketing_accept"
                            className="size-5 rounded-md bg-white shadow-sm"
                        />
                    </td>
                </tr>

                {/* Row 3 */}
                <tr className='bg-[#ffffff] shadow-md'>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">5321</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Kulev Shoes</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Lion's Den</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">57</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">$350</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">05/11/2024</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Pending</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Pending</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center flex items-center justify-center gap-3">
                        <Edit />
                        <img src={trash} alt="" />
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center gap-3">
                        <input
                            type="checkbox"
                            id="MarketingAccept"
                            name="marketing_accept"
                            className="size-5 rounded-md bg-white shadow-sm"
                        />
                    </td>
                </tr>

                {/* Row 4 */}
                <tr className='bg-[#ffffff] shadow-md'>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">5321</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Kulev Shoes</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Lion's Den</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">57</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">$350</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">05/11/2024</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Pending</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Pending</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center flex items-center justify-center gap-3">
                        <Edit />
                        <img src={trash} alt="" />
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center gap-3">
                        <input
                            type="checkbox"
                            id="MarketingAccept"
                            name="marketing_accept"
                            className="size-5 rounded-md bg-white shadow-sm"
                        />
                    </td>
                </tr>

                {/* Row 5 */}
                <tr className='bg-[#ffffff] shadow-md'>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">5321</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Kulev Shoes</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Lion's Den</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">57</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">$350</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">05/11/2024</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Pending</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Pending</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center flex items-center justify-center gap-3">
                        <Edit />
                        <img src={trash} alt="" />
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center gap-3">
                        <input
                            type="checkbox"
                            id="MarketingAccept"
                            name="marketing_accept"
                            className="size-5 rounded-md bg-white shadow-sm"
                        />
                    </td>
                </tr>

                {/* Row 6 */}
                <tr className='bg-[#ffffff] shadow-md'>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">5321</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Kulev Shoes</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Lion's Den</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">57</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">$350</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">05/11/2024</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Pending</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Pending</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center flex items-center justify-center gap-3">
                        <Edit />
                        <img src={trash} alt="" />
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center gap-3">
                        <input
                            type="checkbox"
                            id="MarketingAccept"
                            name="marketing_accept"
                            className="size-5 rounded-md bg-white shadow-sm"
                        />
                    </td>
                </tr>

                {/* Row 7 */}
                <tr className='bg-[#ffffff] shadow-md'>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">5321</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Kulev Shoes</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Lion's Den</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">57</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">$350</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">05/11/2024</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Pending</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center">Pending</td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center flex items-center justify-center gap-3">
                        <Edit />
                        <img src={trash} alt="" />
                    </td>
                    <td className="px-2 py-3 text-[#6E6E6E] text-center gap-3">
                        <input
                            type="checkbox"
                            id="MarketingAccept"
                            name="marketing_accept"
                            className="size-5 rounded-md bg-white shadow-sm"
                        />
                    </td>
                </tr>
                </tbody>
            </table>
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

            <div className='flex items-center px-20 justify-end gap-10'>
                <div className=' flex mt-10'>
                    
                    <h1 className='text-[#333333] flex font-bold gap-1 items-center border-[#333333] border-2 p-2 rounded-md'>
                        <img src={add} alt="" />
                        Add Product
                    </h1>
                </div>
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

export default BestsellingProduct