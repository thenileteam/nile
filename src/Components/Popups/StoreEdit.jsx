import React, { useState } from 'react'
import { edit, noteedit } from '../../assets';

const StoreEdit = () => {
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
        <img src={edit} alt="" />
        </button>


        {isPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-16 rounded-lg shadow-lg max-w-3xl w-full relative">
  
              {/* Popup Content */}
              <form>
                  <div className='grid grid-cols-2 gap-20'>
                      <div className='space-y-3'>
                          <div>
                              <h1 className='text-left font-bold text-[#333333] text-[20px]'>Date Created</h1>
                              <p className='text-left'>15/09/2024</p>
                          </div>
                          <div className="mb-4">
                              <label htmlFor="orderid" className="block text-[#333333] text-[14px] text-left mb-2">
                              Store Name
                              </label>
                              <input
                              id="order_id"
                              type="text"
                              className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                              placeholder="15/09/2024"
                              />
                          </div>
                      </div>
                      <div className='space-y-3'>
                        <div>
                            <h1 className='text-left font-bold text-[#333333] text-[20px]'>Store Owner</h1>
                            <p className='text-[#6E6E6E] text-left'>Bola</p>
                        </div>
                        <div>
                            <h1 className='text-left font-bold text-[#333333] text-[20px]'>Status</h1>
                            <p className='text-[#6E6E6E] text-left'>Active</p>
                        </div>
                      </div>
                  </div>
                
                  <div className="flex justify-center gap-4 mt-16">
                    {/* Cancel Button */}
                    <button
                    className="px-2 py-2 bg-[#f5f5f5] border-gray-500 border-2 text-black font-semibold rounded-md shadow-lg"
                    onClick={togglePopup}
                    type="button"
                    >
                    <div className='flex items-center gap-1'>
                        <img src={noteedit} alt="" />
                        <p className='text-[#333333] font-bold'>Edit Store</p>
                    </div>
                    </button>
                </div>
              </form>
            </div>
          </div>
        )}
    </>
  )
}

export default StoreEdit