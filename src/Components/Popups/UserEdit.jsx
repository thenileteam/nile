import React, { useState } from 'react'
import { edit, noteedit, tickdouble } from '../../assets';

const UserEdit = () => {
    // State to control the popup visibility and animation
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isFinalConfirmationOpen, setIsFinalConfirmationOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // State for fade-out animation

  // Function to toggle the main popup visibility
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // Function to show the confirmation popup and hide the main popup
  const showConfirmation = () => {
    setFadeOut(true); // Start fade-out animation for the main popup
    setTimeout(() => {
      setIsPopupOpen(false); // Close the main popup after the animation
      setIsConfirmationOpen(true); // Open the confirmation popup
      setFadeOut(false); // Reset fade-out state
    }, 300); // Match this duration with your CSS transition duration
  };

  // Function to handle confirmation
  const handleConfirm = () => {
    // Logic for the edit action goes here
    setFadeOut(true); // Start fade-out animation for the confirmation popup
    setTimeout(() => {
      setIsConfirmationOpen(false); // Close the confirmation popup after the animation
      setIsFinalConfirmationOpen(true); // Open the final confirmation popup
      setFadeOut(false); // Reset fade-out state
    }, 300); // Match this duration with your CSS transition duration

    // Automatically close the final confirmation popup after 3 seconds
    setTimeout(() => {
      setIsFinalConfirmationOpen(false);
    }, 1000); // 3000 + 300 to allow time for fade-out
  };

  // Function to toggle the confirmation popup visibility
  const toggleConfirmation = () => {
    setFadeOut(true); // Start fade-out animation for the confirmation popup
    setTimeout(() => {
      setIsConfirmationOpen(!isConfirmationOpen); // Toggle confirmation popup
      setFadeOut(false); // Reset fade-out state
    }, 300); // Match this duration with your CSS transition duration
  };
  return (
    <>
        {/* Button to trigger the popup */}
        <button
        onClick={togglePopup}
         >
        <img src={edit} alt="" />
        </button>


        {/* Main Popup Modal */}
        {isPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-16 rounded-lg shadow-lg max-w-3xl w-full relative">
  
              {/* Popup Content */}
              <form>
                  <div className='grid grid-cols-2 gap-20'>
                      <div className='space-y-3'>
                          <div>
                              <h1 className='text-left font-bold text-[#333333] text-[20px]'>User Name</h1>
                              <p className='text-left'>Mukaila</p>
                          </div>
                          <div className="mb-4">
                              <label htmlFor="userrole" className="block text-[#333333] text-[14px] text-left mb-2">
                              User Role
                              </label>
                              <input
                              id="user_role"
                              type="text"
                              className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                              placeholder="Customer"
                              />
                          </div>
                            <h2 className="text-[18px] font-bold text-[#333333] mb-10 text-start">
                            Change User Status
                            </h2>
                            <div className="relative flex items-center">
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
                      <div className='space-y-3'>
                        <div>
                            <h1 className='text-left font-bold text-[#333333] text-[20px]'>User ID</h1>
                            <p className='text-[#6E6E6E] text-left'>5678</p>
                        </div>
                        <div>
                            <h1 className='text-left font-bold text-[#333333] text-[20px]'>Status</h1>
                            <p className='text-[#6E6E6E] text-left'>Active</p>
                        </div>
                        <div>
                            <h1 className='text-left font-bold text-[#333333] text-[20px]'>Status</h1>
                            <p className='text-[#6E6E6E] text-left'>Active</p>
                        </div>
                      </div>
                  </div>
                
                  <div className="flex justify-center gap-4 mt-16">
                    {/* Edit Button */}
                    <button
                    className="px-2 py-2 bg-[#f5f5f5] border-gray-500 border-2 text-black font-semibold rounded-md shadow-lg"
                    onClick={showConfirmation}
                    type="button"
                    >
                    <div className='flex items-center gap-1'>
                        <img src={noteedit} alt="" />
                        <p className='text-[#333333] font-bold'>Edit Now</p>
                    </div>
                    </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Confirmation Modal */}
        {isConfirmationOpen && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-sm w-full transform transition-all duration-300">
            <h1 className='text-[#333333] font-bold text-[18px]'>Are You Sure Of This Edit?</h1>
            <div className="flex justify-center gap-20">
              <button onClick={handleConfirm}>
                <div className='flex mt-10'>
                  <h1 className='text-[#333333] flex font-bold gap-1 items-center hover:border-[#ffffff] hover:bg-[#E2E8F0] transition ease-out duration-500 border-[#333333] border-2 p-2 px-6 rounded-md'>
                    Yes
                  </h1>
                </div>
              </button>
              <button onClick={toggleConfirmation}>
                <div className='flex mt-10'>
                  <h1 className='text-[#ffffff] hover:text-[#333333] transition ease-out duration-700 flex font-bold gap-1 items-center border-[#333333] hover:bg-[#E2E8F0] bg-[#333333] border-2 p-2 px-6 rounded-md'>
                    No
                  </h1>
                </div>
              </button>
            </div>
          </div>
        </div>
        )}

      {/* Final Confirmation Popup */}
      {isFinalConfirmationOpen && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-[200px] w-full transform transition-all duration-300">
            <div>
              <h1 className='text-[16px] font-bold text-[#333333]'>User Profile Updated</h1>
            </div>
            <div className='flex justify-center mt-5'>
              <img src={tickdouble} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default UserEdit