import React, { useContext, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { NEW_MESSAGE } from "../../constants/events";
import { SocketContext } from "../../hooks/socket";
import FileAttachment from "../features/FileAttachment";

const MessageSender = ({ chatId, members }) => {
  const [message, setMessage] = useState("");

  const { socket } = useContext(SocketContext);

  const sendMessageHandler = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    socket.emit(NEW_MESSAGE, { chatId, members, message });
    setMessage("");
  };
  return (
    <div className="h-[6%] flex flex-row items-center justify-between rounded-b-lg w-full px-6 ">
      <FileAttachment />
      <form
        onSubmit={sendMessageHandler}
        className=" w-full flex flex-row px-6 h-full justify-between bg-[#424242] rounded-full "
      >
        <input
          type="text"
          placeholder="Type new message ...."
          className=" w-full border-none outline-none bg-transparent"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="h-full   ">
          {" "}
          <FaArrowRight className="text-[30px] text-[#FF4900] hover:translate-x-[5px] duration-100 " />
        </button>
      </form>
    </div>
  );
};

export default MessageSender;
