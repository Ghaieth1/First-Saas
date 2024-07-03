import React from 'react';

const Footer = () => {
  return (
    <div className='py-16 px-5  flex justify-center'>
      <div className='flex   p-[24px] w-[1152px] '>
        <div className='w-[462px]'>
          <h1 className='text-white font-medium text-2xl pb-4'>Contact</h1>
          <ul className='text-gray-300 font-light text-lg '>
            <li className='pb-1.5'>Work inquires: work@vaultflow.com</li>
            <li className='pb-1.5'>PR and speaking: press@vaultflow.com</li>
            <li className='pb-10'>New business: newbusiness@vaultflow.com</li>
          </ul>

          <h1 className='text-white font-medium text-2xl pb-4'>Careers</h1>
          <p className='text-gray-300 font-light text-lg pb-10'>
            Careers@vaultflow.com
          </p>
          <p className='text-gray-500 font-light text-lg'>
            © 2023 Vaultflow. All Rights Reserved.
          </p>
        </div>
        <div className='px-[24px] w-[462px]'>
          <h1 className='text-white font-medium text-2xl pb-4'>Address</h1>
          <p className='text-gray-300 font-light text-lg pb-10'>
            398 11th Street, Floor 2 <br /> San Francisco, CA 94103
          </p>
          <h1 className='text-white font-medium text-2xl pb-4'>Social</h1>
          <ul className='text-gray-300 font-light text-lg pb-10 '>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Tik Tok</li>
          </ul>
        </div>
        <div className=' flex items-end justify-end  w-[180px]'>
          <img
            src='/src/assets/logo_vaultflow.png'
            alt='logo'
            className='w-[106px] '
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
