import React from 'react';

const Features = () => {
  return (
    <div>
      <div className='flex flex-col items-center p-[24px] text-center'>
        <h1 className='text-white text-5xl pb-[24px] leading-[120%] '>
          Features that <br /> work for your <br /> future.
        </h1>
        <p className='text-lg font-light text-gray-300 pb-[80px] leading-[160%]'>
          Check out our amazing features and experience the <br /> power of
          Vaultflow for yourself
        </p>
      </div>
      <div>
        <div>
          <div className='flex mx-auto w-[1180px] gap-6 '>
            <div className='flex flex-col items-start w-[578px] border-2 rounded-[20px] p-[60px] bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-700 '>
              <div className='pb-4'>
                <img
                  src='/src/assets/analytics.png'
                  alt='analytics'
                  className='w-[50px] h-[50px] '
                />
              </div>
              <div>
                <h1 className='text-white pb-2.5 '>Analytics Dashboard</h1>
                <p className='text-white pb-2.5 w-[458px]'>
                  Our Analytics Dashboard provides a clear and intuitive
                  interface for you to easily analyze your data. From
                  customizable graphs to real-time data updates, our dashboard
                  offers everything you need to gain valuable insights.
                </p>
                <p className='text-white '>View dashboard</p>
              </div>
            </div>
            <div className='flex flex-col items-start w-[578px] '>
              <div className='pb-4'>
                <img
                  src='/src/assets/analytics.png'
                  alt='analytics'
                  className='w-[50px] h-[50px] '
                />
              </div>
              <div>
                <h1 className='text-white pb-2.5'>Analytics Dashboard</h1>
                <p className='text-white pb-2.5'>
                  Our Analytics Dashboard provides a clear and intuitive
                  interface for you to easily analyze your data. From
                  customizable graphs to real-time data updates, our dashboard
                  offers everything you need to gain valuable insights.
                </p>
                <p className='text-white '>View dashboard</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Features;
