import React, { useState } from 'react';

const ProductCard = () => {
  // State to track the selected image
  const [selectedImage, setSelectedImage] = useState('/view1.png');

  // List of images for the gallery
  const images = [
    '/view1.png',
    '/view2.png',
    '/view3.png',
    '/view4.png',
    '/view5.png',
  ];

  return (
    <div >
    <div className="flex justify-center bg-black text-white p-6">
      {/* Left section - Image Gallery */}
          
                  <div className="mb-4 w-2/6 flex
                  ">
      <div className="flex flex-col space-y-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product view ${index + 1}`}
            className="w-20 h-20 border border-red-500 cursor-pointer"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
          <img src={selectedImage} alt="Selected Product" className="w-2/3 ml-6  h-auto border border-red-500" />
        </div>
      {/* Right section - Product Details */}
      <div className=" flex w-1/3">
        {/* Main selected image */}
<div className=''>

        <h2 className="text-4xl font-bold">Achilles Fitness<br/> Donkey Calf Raise Attachment</h2>
        <p className="mt-2 text-3xl">for the smith machine</p>
        <p className="mt-4 text-2xl font-bold">$300</p>

        {/* Color Picker */}
        <div className="mt-6 w-3/5 justify-between flex">
        <div className="mt-6">
          <label className="block text-sm font-medium">Color:</label>
          <div className="mt-2">
            <span className="w-8 h-8 rounded-full border border-gray-300 inline-block bg-black"></span>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="mt-6">
          <label className="block text-sm font-medium">Quantity:</label>
          <div className="mt-2">
            <input
              type="number"
              defaultValue="1"
              min="1"
              className="w-16 p-2 border text-black border-gray-300 rounded"
              />
              </div>
          </div>
          </div>

        {/* Buy Button */}
        <div className="mt-6">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            BUY ON AMAZON
          </button>
        </div>
        </div>
    </div>
      </div>
      <div className="flex border-b-2 justify-center border-gray-700 bg-transparent">
      <div className="tab active text-pink-500 border-b-2 border-pink-500 px-4 py-2 cursor-pointer">DESCRIPTION</div>
      <div className="tab text-white hover:text-pink-500 px-4 py-2 cursor-pointer">INSTRUCTION VIDEO</div>
      <div className="tab text-white hover:text-pink-500 px-4 py-2 cursor-pointer">
        REVIEWS 
      </div>
    </div>
      <div className="max-w-3xl mx-auto p-6 bg-transparent rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Donkey Calf Raise Attachment</h2>
      <p className="text-white mb-4">
        The Donkey Calf Raise Attachment for the Smith Machine is a premium gym accessory designed to target and isolate the calf muscles. It works in conjunction with the Smith Machine, a popular weightlifting apparatus that features a barbell fixed within vertical steel rails for controlled movement.
      </p>
      <p className="text-white mb-4">
        This attachment includes a padded device that enhances comfort during use. The barbell's height is adjustable to accommodate different users. To perform the exercises, users place their feet on a platform and execute calf raises, lifting the weight with their calf muscles.
      </p>
      <p className="text-white mb-4">
        Named after the traditional "donkey calf raise" exercise—where a person bends forward while performing calf raises—the attachment allows for a similar motion with added stability. It enables users to concentrate fully on engaging the calf muscles without the need to maintain balance.
      </p>
      <p className="text-white mb-4">
        By using the Donkey Calf Raise Attachment, individuals can specifically target the gastrocnemius and soleus muscles, aiding in the development of strength and size. It’s an excellent tool for enhancing lower-body workouts and achieving comprehensive muscular development.
      </p>
    </div>
    </div>
  );
};

export default ProductCard;
