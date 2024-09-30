import React, { useState } from 'react'
import { moneyreceive, refund } from '../../assets';

const Refund = () => {
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
                  onClick={togglePopup}
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
    </>
  )
}

export default Refund