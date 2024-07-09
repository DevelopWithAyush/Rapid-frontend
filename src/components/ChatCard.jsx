import React, { memo } from "react";
const ChatCard = ({ isOnline, Avatar, Name, fetchChatList }) => {
  return (
    <div
      className="w-full rounded-xl px-[1vw] py-[1vh] flex flex-row items-center justify-between   "
      style={{ background: "rgba(39, 39, 39, 0.47)" }}
    >
      <div className="flex  items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden flex">
          <img src={Avatar} alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-white text-[20px] font-normal leading-5">
            Ayush Dubey
          </p>
          <p className="text-[#B3B3B3]  text-[12px] font-normal leading-3">
            Ayush Dubey
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-end gap-3">
        {isOnline && <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "100%",
            background: "#33FF00",
            boxShadow: "0px 0px 10px 3px rgba(36, 255, 0, 0.25)",
          }}
        />}
        <p className="text-[#5A5A5A] text-[16px] font-normal">21:00</p>
      </div>
    </div>
  );
};

export default memo(ChatCard);
