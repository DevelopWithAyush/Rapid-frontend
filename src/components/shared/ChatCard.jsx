import React, { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { HandleContext } from "../../hooks/HandleState";
const ChatCard = ({
  _id,
  name,
  groupChat = false,
  avatar = [],
  sameSender = false,
  isOnline = true,
  newMessageAlert,
  index = 0,
}) => {
  const { handleDeleteChat } = useContext(HandleContext);
  return (
    <Link
      //   onContextMenu={(e)=>handleDeleteChat(e,_id,groupChat)}
      to={`/chat/${_id}`}
      className={`w-full rounded-xl px-[1vw] py-[1vh] flex flex-row items-center justify-between ${
        sameSender ? " bg-[#272727]  " : "  bg-[#272727] bg-opacity-[0.37] "
      }     hover:bg-opacity-[0.7]  `}
    >
      <div className="flex  items-center gap-5">
        <div className="w-16 h-16 rounded-full  flex relative">
          <img
            className="w-full h-full rounded-full"
            src={groupChat ? avatar[1] : avatar}
            alt=""
          />
          {isOnline && (
            <div
              className="absolute bottom-0 right-0 "
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "100%",
                background: "#33FF00",
                boxShadow: "0px 0px 10px 3px rgba(36, 255, 0, 0.25)",
              }}
            />
          )}
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-white text-[20px] font-normal leading-5 w-36 overflow-hidden whitespace-nowrap text-ellipsis">
            {name}
          </p>
          {newMessageAlert?.count > 0 && (
            <p className="text-[#6dff34]  text-[12px] font-normal leading-3 ">
              {newMessageAlert?.count } new{" "}
              {newMessageAlert?.count > 1 ? "messages" : "message"}
            </p>
          )}
        </div>
      </div>
      {/* <div className=" flex flex-col items-end gap-3">
        <p className="text-[#5A5A5A] text-[16px] font-normal">21:00</p>
      </div> */}
    </Link>
  );
};

export default memo(ChatCard);
