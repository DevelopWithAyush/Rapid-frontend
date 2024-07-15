import React, { useContext, useRef } from "react";
import { FaImage, FaVideo } from "react-icons/fa6";
import { MdAttachFile, MdAudiotrack } from "react-icons/md";
import { HandleContext } from "../../hooks/HandleState";
import toast from "react-hot-toast";
import { useSendAttachmentsMutation } from "../../redux/api/api";
import { FaFileAlt } from "react-icons/fa";

const FileAttachment = ({chatId}) => {
  const { attachment, setAttachment } = useContext(HandleContext);
  const imageRef = useRef(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const fileRef = useRef(null);

  const [sendAttachments] = useSendAttachmentsMutation();
  const fileChangeHandler = async (e, key) => {
    const files = Array.from(e.target.files);
    if (files.length <= 0) return;
    if (files.length > 5)
      return toast.error(`You can only send 5 ${key} at a time`);

    const toastId = toast.loading(`Sending ${key}...`);
    try {
      const myForm = new FormData();
      myForm.append("chatId", chatId);
      files.forEach((file)=> myForm.append("files",file))
      const res = await sendAttachments(myForm);
      if (res.data) {
        return toast.success(`${key} sent successfully`, { id: toastId });
        
      } else {
        
        return toast.error( res?.error?.data?.message, { id: toastId });
      }
    } catch (error) {
      toast.error(error, { id: toastId });
    }
  };
  const selectImage = () => imageRef.current?.click();
  const selectAudio = () => audioRef.current?.click();
  const selectVideo = () => videoRef.current?.click();
  const selectFile = () => fileRef.current?.click();
  return (
    <>
      <div className=" h-full relative  m-3 flex flex-col items-center justify-center rounded-full">
        <MdAttachFile
          onClick={() => [setAttachment(!attachment)]}
          className="  text-[30px] rotate-[35deg]"
        />
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[100%] bg-[#FF4900] transition-all duration-300 origin-bottom ${attachment ? "scale-100" : "scale-0"
            } py-2 px-1   rounded-lg flex flex-col items-center justify-start gap-1 `}
        >
          <div
            onClick={() => {
              selectImage();
              setAttachment(!attachment);
            }}
            className="w-full rounded-lg flex flex-row items-center justify-start gap-2 hover:bg-black hover:bg-opacity-30 transition-all duration-300 py-1 px-3 "
          >
            <FaImage /> <p>Image</p>
            <input
              type="file"
              multiple
              accept="image/png, image/jpeg, image/gif"
              style={{ display: "none" }}
              onChange={(e) => fileChangeHandler(e, "Images")}
              ref={imageRef}
            />
          </div>
          <div
            onClick={() => {
              selectAudio();
              setAttachment(!attachment);
            }}
            className="w-full rounded-lg flex flex-row items-center justify-start gap-2 hover:bg-black hover:bg-opacity-30 transition-all duration-300 py-1 px-3 "
          >
            <MdAudiotrack /> <p>Audio</p>
            <input
              type="file"
              multiple
              accept="audio/mpeg, audio/wav"
              style={{ display: "none" }}
              onChange={(e) => fileChangeHandler(e, "Audios")}
              ref={audioRef}
            />
          </div>
          <div
            onClick={() => {
              selectVideo();
              setAttachment(!attachment);
            }}
            className="w-full rounded-lg flex flex-row items-center justify-start gap-2 hover:bg-black hover:bg-opacity-30 transition-all duration-300 py-1 px-3 "
          >
            <FaVideo /> <p>Videos</p>
            <input
              type="file"
              multiple
              accept="video/mp4, video/webm, video/ogg"
              style={{ display: "none" }}
              onChange={(e) => fileChangeHandler(e, "Videos")}
              ref={videoRef}
            />
          </div>
          <div
            onClick={() => {
              selectFile();
              setAttachment(!attachment);
            }}
            className="w-full rounded-lg flex flex-row items-center justify-start gap-2 hover:bg-black hover:bg-opacity-30 transition-all duration-300 py-1 px-3 "
          >
            <FaFileAlt /> <p>Files</p>
            <input
              type="file"
              multiple
              accept="*"
              style={{ display: "none" }}
              onChange={(e) => fileChangeHandler(e, "Files")}
              ref={fileRef}
            />
          </div>
        </div>
      </div>
    </>
   
  );
};

export default FileAttachment;
