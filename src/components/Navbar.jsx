import React from 'react';
import Button from './Button';

const Navbar = () => {
  return (
    <div className='pt-8 px-5 py-20'>
      <div className='flex justify-between bg-[#0B081C] px-10 rounded-3xl items-center h-[72px] bg-opacity-50 backdrop-blur-md'>
        <img src='../imagess/logo_vaultflow.png' alt='logo' />

        <div>
          <ul className='flex gap-8 text-[#ECECEC] font-light '>
            <li>Features</li>
            <li>Pricing</li>
            <li>About us</li>
          </ul>
        </div>

        <Button>Download the app</Button>
      </div>
    </div>
  );
};

export default Navbar;
