import React, { useContext } from 'react'
import male from '../../assets/image/male.png'
import female from '../../assets/image/Frame 2.png'
import fire from '../../assets/image/fire.png'
import heart from '../../assets/image/heart.png'
import { HandleContext } from '../../hooks/HandleState'

const LandingHerosection = () => {

    const {  setOpenLogin } = useContext(HandleContext);


  return (
    <section className='container relative mx-auto max-w-[88rem] h-[100vh] flex  flex-col items-center lg:items-start justify-center gap-[50px] px-6 '>
          <h2 className='max-w-[444px] leading-[120%] text-[56px]  lg:text-start text-center font-mon_bold text-black '><span className='text-[#FF541E]'>Connect </span> with your circle in fun way !</h2>
          <button onClick={(e) => {
              e.preventDefault();
              setOpenLogin(true)
          }} className='inline-flex py-3 px-[22px] justify-center items-center bg-[#FF541E] rounded-[32px] text-white text-2xl capitalize font-semibold' >start Making Friend</button>
          <Male></Male>
          <Female content={"Coffe shop at 5?"} top={"20%"} right={"0%"}/>
          <Female content={"Okay "} top={"60%"}  right={"0%"}/>
          <Fire top="20%" right="60%"/>
          <Fire top="15%" right="30%"/>
          <Fire top="50%" right="0%"/>
          <Heart top="70%" right="70%"/>
          <Heart top="60%" right="10%"/>
          <Heart top="90%" right="20%"/>
          <Heart top="70%" right="40%"/>
    </section>
  )
}


const Male = () => {
    return (
        <div className='z-10 absolute top-[80%] hidden  lg:top-[40%] -translate-x-[80%] lg:-translate-x-[70%] right-0 lg:flex flex-row  items-center justify-center'>
            <img src={male} alt="male" className='w-[100px] lg:w-[200px]' /> 
            <div className='flex p-3 lg:py-6  lg:px-5 justify-center items-center rounded-t-[20px] rounded-br-[20px] bg-white text-[16px] lg:text-[24px] font-mon_bold  '
                style={{
                    boxShadow:" 4px 4px 83.4px 0px rgba(0, 0, 0, 0.30)"
            }}>Sure, see you soon!</div>
        </div>
    )
}
const Female = ({content, top,right}) => {
    return (
        <div className='z-10 absolute  hidden lg:flex flex-row-reverse gap-3 lg:gap-0  items-center justify-center' style={{
            top: top,
            right:right
        }}>
            <img src={female} alt="male" className='w-[100px] lg:w-[200px]' /> 
            <div className='flex  p-3 lg:py-6  lg:px-5 justify-center items-center rounded-t-[20px] rounded-bl-[20px] text-white bg-[#FF541E] text-[16px] lg:text-[24px] font-mon_bold  '
                style={{
                    boxShadow:" 4px 4px 83.4px 0px rgba(0, 0, 0, 0.30)"
                }}>{ content}</div>
        </div>
    )
}
const Fire =({top,right}) => {
    return (
        <div className={`absolute  `} style={{
            top: top,
            right:right
        }}>
            <img src={fire} alt=""  />
        </div>
    )
}
const Heart =({top,right}) => {
    return (
        <div className={`absolute  `} style={{
            top: top,
            right:right
        }}>
            <img src={heart} alt="" />
        </div>
    )
}

export default LandingHerosection
