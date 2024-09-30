import React, { useState } from 'react';
import { cancel } from '../../assets';

const Cancel = () => {
  // State to control the popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to toggle the popup
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
    <button
    onClick={togglePopup}
    >
        <img src={cancel} alt=""/>
    </button>
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded shadow-lg">
            <h2 className="text-[20px] font-bold text-[#333333] mb-10">
              Your Reason For Cancelling Order
            </h2>
            <div className="relative flex items-center">
              {/* Custom select input */}
              <select
                name="HeadlineAct"
                id="HeadlineAct"
                className="mt-1.5 w-full rounded-md border-gray-300 bg-[#F5F5F5] border-2 text-gray-700 sm:text-sm p-4 appearance-none pr-10"
              >
                <option value="">Choose Options</option>
                <option value="JM">John Mayer</option>
                <option value="SRV">Stevie Ray Vaughn</option>
                <option value="JH">Jimi Hendrix</option>
              </select>
              {/* Custom arrow */}
              <div className=" absolute inset-y-0 top-2 right-1 flex items-center px-2 pointer-events-none">
                <div className="border-2 border-[#6E6E6E] bg-[#ffffff] rounded-md p-2 flex items-center justify-center">
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
            <div className="flex justify-center gap-4 mt-16">
              <button
                className="px-2 py-2 bg-[#f5f5f5] border-gray-500 border-2 text-[#333333] font-bold rounded-md"
                onClick={() => {
                  // Handle the cancellation logic here
                  togglePopup();
                }}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cancel;