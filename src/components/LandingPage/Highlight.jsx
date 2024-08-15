import React from 'react'
import icon1 from '../../assets/image/3dicons.png'
import icon2 from '../../assets/image/3dicons-1.png'
import icon3 from '../../assets/image/3dicons-2.png'
import icon4 from '../../assets/image/3dicons-3.png'
import LadyWithPhone from '../../assets/image/LadyWithPhone.png'
const Highlight = () => {
  return (
      <section className='flex flex-col items-start justify-start gap-[25px] md:gap-[50px] px-[10px] md:px-[20px]'>
          <div className='container mx-auto max-w-[88rem] bg-white py-10 px-5 xl:px-20 flex flex-col items-start justify-center rounded-[10px] md:rounded-[20px] gap-14' style={{
              boxShadow: "4px 4px 8.6px 0px rgba(0, 0, 0, 0.25)"
          }}>
              <h3 className='text-black text-[28px] md:text-[36px] font-bold' >Highlight Features</h3>
              <div className='self-center flex flex-row flex-wrap items-center justify-center gap-[50px] sm:gap-[70px] md:gap-[90px] xl:gap-[130px]'>
                  <IconCard iconAddress={icon1} description={"Fast & Reliable"} />
                  <IconCard iconAddress={icon2} description={"Unlimited Sharing"} />
                  <IconCard iconAddress={icon3} description={"Secure Encription"} />
                  <IconCard iconAddress={icon4} description={"Seamless Sync"} />

              </div>
          </div>
          <div className='container mx-auto max-w-[88rem] bg-black flex  flex-col lg:flex-row items-center justify-between pt-12 px-6 md:px-12 rounded-[10px] md:rounded-[20px]'>
              <div className='flex flex-col self-start items-start justify-start gap-[37px]' >
                  <p className=' text-white text-[24px] font-bold '>Why Rapid?</p>
                  <p className=' text-white text-[28px] sm:text-[48px] md:text-[56px] font-bold leading-[100%] max-w-[263px] sm:max-w-[461px]  md:max-w-[600px] '>Our mission is user  <span className='text-[#FF541E]' >convenience</span> </p>
                  <p className=' text-white max-w-[450px] '>Rapid makes your communication with relatives, work friends, family more fun. Stay connected with them with plentiful features.</p>
              </div>
              <img  className='self-end' src={LadyWithPhone} alt="" />
          </div>
          <div className=' container mx-auto max-w-[88rem] grid grid-cols-11 gap-[25px] lg:gap-[32px]' >
              <div className='col-span-11 lg:col-span-4  bg-white p-6 lg:p-12 rounded-[20px] '
                  style={{
                      boxShadow: "4px 4px 12px 0px rgba(0, 0, 0, 0.25)"
                  }}>
                  <p className='text-[32px] leading-[120%] font-bold ' >Rapid guarantees comfort and safety because we understand how important <span className='text-[#FF541E]'>privacy</span> is.</p>
              </div>
              <div className='col-span-11 lg:col-span-7 bg-white p-6 lg:p-12 flex flex-col items-center justify-center gap-5 rounded-[20px]'
                  style={{
                      boxShadow: "4px 4px 12px 0px rgba(0, 0, 0, 0.25)"
                  }}>
                  <p className=' text-[20px] font-medium text-center'>Rapid makes your communication with relatives, work friends, family more fun. Stay connected with them with plentiful features.
</p>
                  <p className=' text-[20px] font-medium text-center'>"We provide a variety of useful features in helping smooth the relationship of a communication relationship." -CEO</p>
              </div>
              
          </div>
      </section>
  )
}

const IconCard = ({iconAddress,description}) => {
    return (
        <div className='flex flex-col items-center justify-center gap-[22px]'>
            <div className='p-6 flex flex-col items-center justify-center bg-[#303030] rounded-[24px]' >
                <img className='w-full ' src={iconAddress} alt="" />
            </div>
            <p className='text-[20px] text-[#000] font-bold '>{ description}</p>
        </div>
    )
}

export default Highlight
