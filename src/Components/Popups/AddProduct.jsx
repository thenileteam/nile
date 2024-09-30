import React, { useState } from 'react'
import { add, addimage } from '../../assets';

const AddProduct = () => {
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
                Add Product
              </h1>
          </div>
        </button>

        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-16 rounded-lg shadow-lg max-w-3xl w-full relative ">

            {/* Popup Content */}
            <form>
                <div className='grid grid-cols-2 gap-20'>
                    <div>
                        <div>
                          <h1 className='text-[#333333] text-[20px] font-bold'>Basic Product Informations</h1>
                        </div>
                        <div className="mb-4 mt-5">
                            <label htmlFor="category" className="block text-[#333333] text-[14px] text-left mb-2">
                            Category
                            </label>
                            <input
                            id="category"
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
                            <label htmlFor="productdescription" className="block text-[#333333] text-[14px] text-left mb-2">
                            Product Desription
                            </label>
                            <input
                            id="product_description"
                            type="text"
                            className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                            placeholder="7842"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="stockquantity" className="block text-[#333333] text-[14px] text-left mb-2">
                            Product Name
                            </label>
                            <input
                            id="stock_quantity"
                            type="text"
                            className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                            placeholder="7842"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Quantity Size" className="block text-[#333333] text-[14px] text-left mb-2">
                          Quantity Size
                            </label>
                            <input
                            id="Quantity_Size"
                            type="text"
                            className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                            placeholder="XXL"
                            />
                        </div>
                    </div>
                    <div>
                          <div>
                            <h1 className='text-[#333333] text-[20px] font-bold'>Customer Informations</h1>
                          </div>
                          <div className="mb-4 mt-5">
                            <label htmlFor="price" className="block text-[#333333] text-[14px] text-left mb-2">
                            Price
                            </label>
                            <input
                            id="price"
                            type="text"
                            className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                            placeholder="7842"
                            />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="discountedprice" className="block text-[#333333] text-[14px] text-left mb-2">
                            Dsicounted Price
                            </label>
                            <input
                            id="discounted_price"
                            type="text"
                            className="w-full border-gray-500 border-2 bg-[#F5F5F5] rounded-md p-2"
                            placeholder="7842"
                            />
                          </div>
                          <div className='mt-16'>
                            <div>
                              <h1 className='text-[#333333] text-[20px] font-bold'>Stock Status</h1>
                            </div>
                              <div className="relative flex items-center mt-2">
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
                </div>


                <div className='flex justify-center'>
                  <img src={addimage} alt="" />
                </div>

                <div className="flex justify-center gap-4 mt-16">
                  {/* Cancel Button */}
                  <button
                  onClick={togglePopup}
                  type="button"
                  >
                  <div className='flex'>
                      <h1 className='text-[#333333] flex font-bold gap-1 items-center border-[#333333] border-2 p-2 rounded-md'>
                        <img src={add} alt="" />
                        Add Product
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

export default AddProduct;