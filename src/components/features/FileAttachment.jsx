import React, { useContext } from "react";
import { FaImage } from "react-icons/fa6";
import { MdAttachFile } from "react-icons/md";
import { HandleContext } from "../../hooks/HandleState";

const FileAttachment = () => {
  const { attachment, setAttachment } = useContext(HandleContext);
  return (
    <div className=" h-full relative  m-3 flex flex-col items-center justify-center rounded-full">
      <MdAttachFile
        onClick={() => [setAttachment(!attachment)]}
        className="  text-[30px]"
      />
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[100%] bg-[#FF4900] transition-all duration-300 origin-bottom ${
          attachment ? "scale-100" : "scale-0"
        } py-2 px-1   rounded-lg flex flex-col items-center justify-start gap-1 `}
      >
        <div
          onClick={() => {
            setAttachment(!attachment);
          }}
          className="w-full rounded-lg flex flex-row items-center justify-start gap-2 hover:bg-black hover:bg-opacity-30 transition-all duration-300 py-1 px-3 "
        >
          <FaImage /> <p>Image</p>
        </div>
        <div
          onClick={() => {
            setAttachment(!attachment);
          }}
          className="w-full rounded-lg flex flex-row items-center justify-start gap-2 hover:bg-black hover:bg-opacity-30 transition-all duration-300 py-1 px-3 "
        >
          <FaImage /> <p>Video</p>
        </div>
        <div
          onClick={() => {
            setAttachment(!attachment);
          }}
          className="w-full rounded-lg flex flex-row items-center justify-start gap-2 hover:bg-black hover:bg-opacity-30 transition-all duration-300 py-1 px-3 "
        >
          <FaImage /> <p>File</p>
        </div>
      </div>
    </div>
  );
};

export default FileAttachment;
