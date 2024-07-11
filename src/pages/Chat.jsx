import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Link } from "react-router-dom";
import { FaArrowRight, FaXmark } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { MdAttachFile } from "react-icons/md";
import { IoSend } from "react-icons/io5";

const Chat = () => {
  return (
    <AppLayout>
      <div className="h-[8%] flex flex-row items-center justify-between bg-[#FF4900] rounded-t-lg py-3 px-6">
        <div className="flex flex-row items-center gap-5 justify-start">
          <div className="w-[50px] h-[50px] rounded-full bg-white"></div>
          <p className="text-[16px] font-medium ">ayushdubey2017</p>
        </div>
        <Link to={"/"} className="text-[24px]">
          {" "}
          <FaXmark />{" "}
        </Link>
      </div>
      <div className="h-[84%] flex"></div>
      <div className="h-[8%] flex flex-row items-center justify-between rounded-b-lg w-full px-6 ">
        <div className=" m-3 flex flex-col items-center justify-center rounded-full">
          <MdAttachFile className="text-[30px]" />
        </div>
        <form className=" w-full flex flex-row px-6 h-full justify-between bg-[#424242] rounded-full ">
          <input
            type="text"
            placeholder="Type new message ...."
            className=" w-full border-none outline-none bg-transparent"
          />
          <button className="h-full   " >
            {" "}
            <FaArrowRight className="text-[30px] text-[#FF4900] hover:translate-x-[5px] duration-100 "  />
          </button>
        </form>
      </div>
    </AppLayout>
  );
};

export default Chat;
