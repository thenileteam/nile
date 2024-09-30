import React, { useState } from 'react'
import { trash } from '../../assets';

const FinanceRefund = () => {
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
          <div>
            <p>Refund Now</p>
          </div>
        </button>


        {isPopupOpen && (
            <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">

                    <div>
                        <h1 className='text-[16px] font-bold text-[#333333]'>Are You Sure Of This Refunding ?</h1>
                    </div>

                    <div className="flex items-center justify-center gap-28">
                        {/* Cancel Button */}
                        <button
                        onClick={togglePopup}
                        type="button"
                        >
                        <div className=' flex mt-10'>
                            <h1 className='text-[#333333] flex font-bold gap-1 items-center border-[#333333] border-2 p-2 px-6 rounded-md'>
                                Yes
                            </h1>
                        </div>
                        </button>

                        {/* Cancel Button */}
                        <button
                        onClick={togglePopup}
                        type="button"
                        >
                        <div className=' flex mt-10'>
                            <h1 className='text-[#ffffff] flex font-bold gap-1 items-center border-[#333333] bg-[#333333] border-2 p-2 px-6 rounded-md'>
                                No
                            </h1>
                        </div>
                        </button>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default FinanceRefund