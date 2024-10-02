import React, { useState } from 'react'
import { moneyreceive, refund, tickdouble } from '../../assets';

const Refund = () => {
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
        <img src={refund} alt="" />
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
                            <h1 className='text-left font-bold text-[#333333] text-[20px]'>Order Details</h1>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="orderid" className="block text-[#333333] text-[14px] text-left mb-2">
                            Order ID
                            </label>
                            <input
                            id="order_id"
                            type="text"
                            className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                            placeholder="7842"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="orderdate" className="block text-[#333333] text-[14px] text-left mb-2">
                            Order Date
                            </label>
                            <input
                            id="order_date"
                            type="text"
                            className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                            placeholder="7842"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="productname" className="block text-[#333333] text-[14px] text-left mb-2">
                            Product Name
                            </label>
                            <input
                            id="product_name"
                            type="text"
                            className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                            placeholder="7842"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="quantity" className="block text-[#333333] text-[14px] text-left mb-2">
                            Quantity
                            </label>
                            <input
                            id="quantity"
                            type="text"
                            className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                            placeholder="7842"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="totalamount" className="block text-[#333333] text-[14px] text-left mb-2">
                            Total Amount
                            </label>
                            <input
                            id="total_amount"
                            type="text"
                            className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                            placeholder="7842"
                            />
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div>
                            <h1 className='text-left font-bold text-[#333333] text-[20px]'>Customer Informations</h1>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="customername" className="block text-[#333333] text-[14px] text-left mb-2">
                            Customer Name
                            </label>
                            <input
                            id="customer_name"
                            type="text"
                            className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                            placeholder="7842"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-[#333333] text-[14px] text-left mb-2">
                            Email Address
                            </label>
                            <input
                            id="email"
                            type="email"
                            className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                            placeholder="7842"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phonenumber" className="block text-[#333333] text-[14px] text-left mb-2">
                            Phone Number
                            </label>
                            <input
                            id="phone_number"
                            type="text"
                            className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                            placeholder="7842"
                            />
                        </div>
                    </div>
                </div>
              
              <div className="flex justify-center gap-4 mt-16">
                {/* Cancel Button */}
                <button
                  className="px-2 py-2 bg-[#f5f5f5] border-gray-500 border-2 text-black font-semibold rounded-md shadow-lg"
                  onClick={showConfirmation}
                  type="button"
                >
                  <div className='flex items-center gap-1'>
                    <img src={moneyreceive} alt="" />
                    <p className='text-[#333333] font-bold'>Refund Now</p>
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
            <h1 className='text-[#333333] font-bold text-[18px]'>Are You Sure Of This Refunding ?</h1>
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
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-[250px] w-full transform transition-all duration-300">
            <div>
              <h1 className='text-[16px] font-bold text-[#333333]'>Refunded Succesfully</h1>
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

export default Refund