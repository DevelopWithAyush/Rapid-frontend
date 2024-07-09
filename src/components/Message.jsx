import React from "react";
import SenderMessage from "./SenderMessage";
import ReciverMesssage from "./ReciverMesssage";

const Message = () => {
  return (
    <div className="col-span-8 bg-[#272727] rounded-[12px] p-4 w-full  h-full">
      <SenderMessage />
      <ReciverMesssage />
    </div>
  );
};

export default Message;
