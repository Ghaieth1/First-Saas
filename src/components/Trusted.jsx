import React from 'react';
import LogoWrapper1 from '../images/brands/LogoWrapper-1.png';
import LogoWrapper2 from '../images/brands/LogoWrapper-2.png';
import LogoWrapper3 from '../images/brands/LogoWrapper-3.png';
import LogoWrapper4 from '../images/brands/LogoWrapper-4.png';
import LogoWrapper5 from '../images/brands/LogoWrapper-5.png';
import LogoWrapper6 from '../images/brands/LogoWrapper-6.png';

const Trusted = () => {
  return (
    <div className='flex flex-col p-[60px]'>
      <p className='text-white mx-auto p0-[60px] text-opacity-80 font-light text-xl'>
        Trusted by teams at over <strong>1300 </strong>of the world's leading
        organizations
      </p>
      <div className='flex justify-center gap-10 items-center'>
        <img src={LogoWrapper1} alt='dell' />
        <img src={LogoWrapper2} alt='zendesk' />
        <img src={LogoWrapper3} alt='rakuten' />
        <img src={LogoWrapper4} alt='pacific' />
        <img src={LogoWrapper5} alt='ncr' />
        <img src={LogoWrapper6} alt='lattice' />
      </div>
    </div>
  );
};

export default Trusted;
