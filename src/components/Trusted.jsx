import React from 'react';

const Trusted = () => {
  return (
    <div className='flex flex-col p-[60px] '>
      <p className='text-white mx-auto pb-[60px]  text-opacity-80 font-light text-xl'>
        Trusted by teams at over <strong>1,000 </strong> of the world's leading
        organizations
      </p>
      <div className='flex justify-center gap-10 items-center '>
        <img src='../images/brands/LogoWrapper.png' alt='dell' />
        <img src='../images/brands/LogoWrapper-1.png' alt='zendesk' />
        <img src='../images/brands/LogoWrapper-2.png' alt='rakuten' />
        <img src='../images/brands/LogoWrapper-3.png' alt='pacific' />
        <img src='../images/brands/LogoWrapper-4.png' alt='ncr' />
        <img src='../images/brands/LogoWrapper-5.png' alt='lattice' />
        <img src='../images/brands/LogoWrapper-6.png' alt='ted' />
      </div>
    </div>
  );
};

export default Trusted;
