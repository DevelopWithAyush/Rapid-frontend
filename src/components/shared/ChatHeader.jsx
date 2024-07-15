import React from 'react'
import { FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { useToGetChatDetailQuery } from '../../redux/api/api'
import { useSelector } from 'react-redux';

const ChatHeader = ({chatId}) => {
    const completeChatDetails = useToGetChatDetailQuery({ chatId, populate: true, skip: !chatId })
    const {user} = useSelector((state)=>state.auth)
    const chat = completeChatDetails?.data?.chat
    const otherMember = chat?.members.find((member) => member._id.toString() !== user._id.toString());
  return (
      <div className="h-[8%] flex flex-row items-center justify-between bg-[#FF4900] rounded-t-lg py-2 px-6">
          <div className="flex h-full flex-row items-center gap-5 justify-start">
              <div className=" h-full aspect-square overflow-hidden rounded-full bg-white">
                  <img className='w-full h-full ' src={chat?.groupChat ? "" : otherMember?.avatar} alt="" />
              </div>
              <p className="text-[16px] font-medium ">{chat?.groupChat ?chat?.name :otherMember?.name }</p>
          </div>
          <Link to={"/"} className="text-[24px]">
              {" "}
              <FaXmark />{" "}
          </Link>
      </div>
  )
}

export default ChatHeader
