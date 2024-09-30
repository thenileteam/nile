import React, { useState } from 'react';
import { edit, noteedit } from '../../assets';

const StoreShipment = () => {
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
        <div className='flex items-center justify-center gap-2'>
            <img src={edit} alt="" />
            <h1 className='text-[#7E76BC]'>Track</h1>
        </div>
      </button>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-16 rounded-lg shadow-lg max-w-3xl w-full relative">

            {/* Popup Content */}
            <form>
                <div className='grid grid-cols-2 gap-20'>
                    <div className='space-y-3'>
                        <div>
                            <h1 className='text-left font-bold text-[#333333] text-[20px]'>Shipment ID</h1>
                            <p className='text-[#6E6E6E] text-left'>5678</p>
                        </div>
                        <div>
                            <h1 className='text-left font-bold text-[#333333] text-[20px]'>Order ID</h1>
                            <p className='text-[#6E6E6E] text-left'>5678</p>
                        </div>
                            <h2 className="text-[18px] font-bold text-[#333333] mb-10 text-start">
                            Order ID
                            </h2>
                            <div className="relative flex items-center">
                            {/* Custom select input */}
                            <select
                                name="HeadlineAct"
                                id="HeadlineAct"
                                className="-mt-1.5 w-full rounded-md border-gray-500 bg-[#F5F5F5] border-2 text-gray-700 sm:text-sm p-3 appearance-none pr-10"
                            >
                                <option value="">Choose Options</option>
                                <option value="JM">John Mayer</option>
                                <option value="SRV">Stevie Ray Vaughn</option>
                                <option value="JH">Jimi Hendrix</option>
                            </select>
                            {/* Custom arrow */}
                            <div className=" absolute inset-y-0 -top-2 right-1 flex items-center px-2 pointer-events-none">
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
                    <div className='space-y-3'>
                        <div>
                            <h1 className='text-left font-bold text-[#333333] text-[20px]'>Customer Name</h1>
                            <p className='text-[#6E6E6E] text-left'>Bola</p>
                        </div>
                        <div>
                            <h1 className='text-left font-bold text-[#333333] text-[20px]'>Status</h1>
                            <p className='text-[#6E6E6E] text-left'>Active</p>
                        </div>
                        <div>
                            <h1 className='text-left font-bold text-[#333333] text-[20px]'>Shipment Date</h1>
                            <p className='text-[#6E6E6E] text-left'>Pending</p>
                        </div>
                        <div>
                            <h1 className='text-left font-bold text-[#333333] text-[20px]'>Shipment Date</h1>
                            <p className='text-[#6E6E6E] text-left'>15/09/2024</p>
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
                    <p className='text-[#333333] font-bold'>Edit Shipment</p>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default StoreShipment;