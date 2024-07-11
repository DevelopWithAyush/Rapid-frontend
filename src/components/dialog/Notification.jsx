import React, { useContext } from 'react'
import { HandleContext } from '../../hooks/HandleState'
import { FaXmark } from 'react-icons/fa6'
import NotificationCard from '../shared/NotificationCard'

const Notification = () => {
    const {setIsNoti,isNoti} = useContext(HandleContext)
  return (
      <div
          className={`absolute bottom-0 left-0 translate-y-[100%] -translate-x-[100%] origin-top-right transition-all duration-500 ${isNoti ? " scale-100" : "scale-0"
              } bg-[#FF4900]  w-[400px] h-[500px] z-[100] rounded-b-xl rounded-tl-xl flex flex-col items-center justify-start py-3 px-3 gap-5`}
      >
          <div className="flex flex-row items-center justify-between w-full text-[20px]">
              <p>Notification </p>
              <button onClick={() => setIsNoti(false)}>
                  <FaXmark />
              </button>
          </div>
          <div className='flex flex-col items-center justify-start gap-5 w-full'>
            <NotificationCard/>
          </div>
      </div>
  )
}

export default Notification
