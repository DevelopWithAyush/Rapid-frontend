import React from 'react'
import { FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const ChatHeader = () => {
  return (
      <div className="h-[8%] flex flex-row items-center justify-between bg-[#FF4900] rounded-t-lg py-2 px-6">
          <div className="flex h-full flex-row items-center gap-5 justify-start">
              <div className=" h-full aspect-square rounded-full bg-white"></div>
              <p className="text-[16px] font-medium ">ayushdubey2017</p>
          </div>
          <Link to={"/"} className="text-[24px]">
              {" "}
              <FaXmark />{" "}
          </Link>
      </div>
  )
}

export default ChatHeader
