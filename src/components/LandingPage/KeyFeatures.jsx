import React from 'react'
import keyfeature from '../../assets/image/Frame 23.png'
import noti from '../../assets/image/noti.png'

const KeyFeatures = () => {
  return (
      <section className=' container mx-auto max-w-[88rem] mt-[100px] grid grid-cols-12 gap-[20px] md:gap-[20px] lg:gap-[32px] px-[10px] md:px-[20px]'>
          <div className=' col-span-12 md:col-span-6   '> 
              {/* onbox */}
              <div className='w-full pt-[38px] pl-[38px]  bg-[#1E1E1E] rounded-[10px] md:rounded-[10px]  flex flex-col items-start justify-center gap-20 overflow-hidden'>
                  <p className='text-white text-[28px] sm:text-[48px] md:text-[56px] font-bold'>Key <span className='text-[#FF541E]'>Features</span></p>
                  <img className='self-end' src={keyfeature} alt="" />

              </div>
              <div>
                  
              </div>
        </div>
          <div className=' col-span-12 md:col-span-6 flex flex-col items-center justify-center gap-[20px] md:gap-[40px]  '> 
              <div className='w-full   bg-black rounded-[10px] md:rounded-[20px] flex flex-col items-center justify-center overflow-hidden pb-10 md:pb-20'>
                  <img className='w-full' src={noti} alt="noti" />
                  <p className='text-white text-[20px] md:text-[36px] font-medium ' >Get the instant <span className='text-[#FF541E]'>notification</span>!</p>
              </div>
              <div className='w-full h-[372px]  bg-white rounded-[10px] md:rounded-[20px] flex flex-col items-center justify-end px-5 md:px-10 overflow-hidden pb-10 ' style={{
                  boxShadow: "4px 4px 12px 0px rgba(0, 0, 0, 0.25)"
              }}>
                  <p className='text-black text-[36px] leading-[36px] font-bold ' >File sharing with no compression to keep the quality</p>
              </div>
        </div>
      
    </section>
  )
}

export default KeyFeatures
