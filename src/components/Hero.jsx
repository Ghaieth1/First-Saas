import React from 'react';
import Button from './Button';
import vaultflowHero from '../images/VaultFlow_Hero.png';

const Hero = () => {
  return (
    <div className='flex flex-wrap justify-center  '>
      <div className='w-[960px] h-[400px]  text-center  content-center pt-[50px] '>
        <p className='text-[#F2F4F8] flex items-center justify-center text-lg font-light px-5 py-2.5 w-[417px] h-[46px] rounded-3xl border-[#FFFFFF] border-opacity-30 border-2 mx-auto'>
          We just raised $20M in Series B. Learn more
        </p>
        <div>
          <h1
            className='text-[80px] font-medium h-[160px] w-[960px] leading-[80px] mt-8 mx-auto'
            style={{
              background:
                'linear-gradient(90deg, #ECECEC 0%, rgba(236, 236, 236, 0) 180%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-0.03em',
            }}
          >
            Modern analytics
            <br />
            for the modern world
          </h1>
          <p className='my-6 text-lg font-light text-gray-300 text-opacity-65 w-[600px] mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, provident. Odio dolor corrupti aliquam possimus?
          </p>
        </div>
        <div className='flex  justify-center gap-4 '>
          <Button>Download the app</Button>
          <Button className='text-gray-300 border-2  border-[#ffffff75] rounded-3xl'>
            Talk to an expert
          </Button>
        </div>
      </div>
      <div>
        <img
          src={vaultflowHero}
          alt='vaultflow'
          className='pb-20 pt-20 my-20'
        />
      </div>
    </div>
  );
};

export default Hero;
