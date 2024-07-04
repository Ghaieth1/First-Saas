import React from 'react';
import Button from './Button';

const Slide = () => {
  return (
    <div className=' p-[60px] w-[1200px]  h-[440px] mx-auto border-2 border-[#3b3449] shadow-[0_-3px_10px_rgb(81,74,97)]  rounded-[20px]  '>
      <div className='flex flex-col items-center mx-auto text-center w-[768px] h-[320px] '>
        <h1 className='text-white font-bold text-5xl pb-6'>
          Our powerful analytics provides invaluable insights.
        </h1>
        <p className=' pb-6 font-light text-gray-300  leading-[150%]'>
          Unlock the power of data with our cutting-edge analytics product. Get
          instant <br /> insights with our user-friendly Analytics Dashboard,
          and take advantage of our <br /> innovative digital credit tokens to
          reward your customers and incentivize <br /> engagement.
        </p>
        <Button className='text-gray-300 border-2  border-[#ffffff75] rounded-3xl'>
          Download the app
        </Button>
      </div>
    </div>
  );
};

export default Slide;
