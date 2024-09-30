import React, { useState } from 'react'
import { add } from '../../assets';

const AssignRole = () => {
  // State to control the popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to toggle the popup visibility
  const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
  };
  return (
    <>
        {/* Button to trigger the popup */}
        <button
        onClick={togglePopup}
         >
          <div className=' flex mt-10'>
              <h1 className='text-[#333333] flex font-bold gap-1 items-center border-[#333333] border-2 p-2 rounded-md'>
                <img src={add} alt="" />
                Assign Role
              </h1>
          </div>
        </button>

        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-16 rounded-lg shadow-lg max-w-3xl w-full relative">

            {/* Popup Content */}
            <form>
                <div className='grid grid-cols-2 gap-20'>
                    <div>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-[#333333] text-[14px] text-left mb-2">
                            User Name
                            </label>
                            <input
                            id="user_name"
                            type="text"
                            className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                            placeholder="Customer"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="rolename" className="block text-[#333333] text-[14px] text-left mb-2">
                            Role Name
                            </label>
                            <input
                            id="role_name"
                            type="text"
                            className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                            placeholder="Customer"
                            />
                        </div>
                    </div>
                    <div>
                            <label htmlFor="username" className="block text-[#333333] text-[14px] text-left mb-2">
                            Permission
                            </label>
                          <div className="relative flex items-center -mt-3">
                          {/* Custom select input */}
                          <select
                              name="HeadlineAct"
                              id="HeadlineAct"
                              className="mt-1.5 w-full rounded-md border-gray-500 bg-[#F5F5F5] border-2 text-gray-700 sm:text-sm p-3 appearance-none pr-10"
                          >
                              <option value="">Choose Options</option>
                              <option value="JM">John Mayer</option>
                              <option value="SRV">Stevie Ray Vaughn</option>
                              <option value="JH">Jimi Hendrix</option>
                          </select>
                          {/* Custom arrow */}
                          <div className=" absolute inset-y-0 top-2 right-1 flex items-center px-2 pointer-events-none">
                              <div className="border-2 border-gray-500 bg-[#ffffff] rounded-md p-1 flex items-center justify-center">
                              <svg width="20" height="20" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                  d="M13 1.32622C13 1.32622 8.5811 7.32617 7 7.32617C5.4188 7.32617 1 1.32617 1 1.32617"
                                  stroke="#333333"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  />
                              </svg>
                              </div>
                          </div>
                          </div>
                    </div>
                </div>
              
                <div className="flex justify-center gap-4 mt-16">
                  {/* Cancel Button */}
                  <button
                  onClick={togglePopup}
                  type="button"
                  >
                  <div className=' flex mt-10'>
                      <h1 className='text-[#333333] flex font-bold gap-1 items-center border-[#333333] border-2 p-2 rounded-md'>
                        <img src={add} alt="" />
                        Assign Role
                      </h1>
                  </div>
                  </button>
                </div>
            </form>
          </div>
        </div>
        )};
    </>
  );
};

export default AssignRole;