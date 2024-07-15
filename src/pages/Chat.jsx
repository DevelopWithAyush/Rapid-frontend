import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../components/features/Loader";
import AppLayout from "../components/layout/AppLayout";
import ChatHeader from "../components/shared/ChatHeader";
import MessageComponents from "../components/shared/MessageComponents";
import MessageSender from "../components/shared/MessageSender";
import { NEW_MESSAGE } from "../constants/events";
import { useErrors, useSocketEvents } from "../hooks/hooks";
import { SocketContext } from "../hooks/socket";
import {useInfiniteScrollTop} from "6pp"
import {
  useGetMessagesFromIdQuery,
  useToGetChatDetailQuery,
} from "../redux/api/api";

const Chat = () => {
  const containerRef = useRef(null);
  const { user } = useSelector((state) => state.auth);
  const { chatId } = useParams();
  const chatDetails = useToGetChatDetailQuery({ chatId, skip: !chatId });
  const { socket } = useContext(SocketContext);
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  

  const newMessageHandler = useCallback((data) => {
    if (chatId === data.chatId) {
      setMessages((prev) => [...prev, data.message]);
      // console.log(data)
      
    } else {
    }
  }, [chatId]);

  const oldMessageChunk = useGetMessagesFromIdQuery({ chatId, page });


  const { data:oldMessage, setData:setOldMessage } = useInfiniteScrollTop(containerRef,
    oldMessageChunk.data?.totalPages,
    page,
    setPage,
    oldMessageChunk.data?.messages
  )




  const errors = [
    { isError: chatDetails.isError, error: chatDetails.error },
    { isError: oldMessageChunk.isError, error: oldMessageChunk.error },
  ];

  useErrors(errors);

  const eventHandler = { [NEW_MESSAGE]: newMessageHandler };
  useSocketEvents(socket, eventHandler);

  console.log(oldMessage)
  let allMessages  = [...oldMessage,...messages]
  useEffect(() => {

    return () => {
      setMessages([]);
      setOldMessage([]);
      setPage(1)
    }

  }, [chatId]);
  return chatDetails.isLoading ? (
    <Loader />
  ) : (
    <AppLayout>
      <ChatHeader chatId={chatId} />
      <div
        ref={containerRef}
        className="h-[86%] w-full flex flex-col items-start justify-start gap-5 p-4 overflow-auto scrollbar  "
      >
        {!oldMessageChunk.isLoading &&
          allMessages.map((i) => {
            return <MessageComponents key={i._id} message={i} user={user} />;
          })}
      </div>
      <MessageSender
        chatId={chatId}
        members={chatDetails?.data?.chat?.members}
      />
    </AppLayout>
  );
};

export default Chat;
