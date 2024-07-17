import React, { useCallback, useContext, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { NEW_MESSAGE, START_TYPING, STOP_TYPING } from "../../constants/events";
import { SocketContext } from "../../hooks/socket";
import FileAttachment from "../features/FileAttachment";
import { useSocketEvents } from "../../hooks/hooks";

const MessageSender = ({ chatId, members, setUserTyping, setIamTyping,IamTyping }) => {
  const [message, setMessage] = useState("");
 
 
  const typingTimeout = useRef(null);

  const { socket } = useContext(SocketContext);

  const sendMessageHandler = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    socket.emit(NEW_MESSAGE, { chatId, members, message });
    setMessage("");
  };

  const startTypingListener = useCallback(
    (data) => {
      if (data.chatId !== chatId) return;
      setUserTyping(true);
    },
    [chatId]
  );

  const stopTypingListener = useCallback(
    (data) => {
      if (data.chatId !== chatId) return;
      setUserTyping(false);
    },
    [chatId]
  );

  const eventHandlers = {
    [START_TYPING]: startTypingListener,
    [STOP_TYPING]: stopTypingListener,
  };

  useSocketEvents(socket, eventHandlers);

  const messageOnChange = (e) => {
    setMessage(e.target.value);
    if (!IamTyping) {
      socket.emit(START_TYPING,{ members, chatId });
      setIamTyping(true);
    }
    if(typingTimeout.current) clearTimeout(typingTimeout.current)

    typingTimeout.current = setTimeout(() => {
      socket.emit(STOP_TYPING,{members,chatId})
      setIamTyping(false)
    }, 1000);
  };

  return (
    <div className="h-[6%] flex flex-row items-center justify-between rounded-b-lg w-full px-6 ">
      <FileAttachment chatId={chatId} />
      <form
        onSubmit={sendMessageHandler}
        className=" w-full flex flex-row px-6 h-full justify-between bg-[#424242] rounded-full "
      >
        <input
          type="text"
          placeholder="Type new message ...."
          className=" w-full border-none outline-none bg-transparent"
          value={message}
          onChange={messageOnChange}
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
