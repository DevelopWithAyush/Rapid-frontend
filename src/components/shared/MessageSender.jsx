import React, { useState } from "react";
import { FaArrowRight, FaImage } from "react-icons/fa6";
import { MdAttachFile } from "react-icons/md";
import FileAttachment from "../features/FileAttachment";

const MessageSender = () => {
 
  return (
    <div className="h-[6%] flex flex-row items-center justify-between rounded-b-lg w-full px-6 ">
      <FileAttachment/>
      <form className=" w-full flex flex-row px-6 h-full justify-between bg-[#424242] rounded-full ">
        <input
          type="text"
          placeholder="Type new message ...."
          className=" w-full border-none outline-none bg-transparent"
        />
        <button className="h-full   ">
          {" "}
          <FaArrowRight className="text-[30px] text-[#FF4900] hover:translate-x-[5px] duration-100 " />
        </button>
      </form>
    </div>
  );
};

export default MessageSender;
