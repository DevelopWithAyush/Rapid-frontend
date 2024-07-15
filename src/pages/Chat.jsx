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
    setMessages((prev) => [...prev, data.message]);
  }, []);

  const oldMessage = useGetMessagesFromIdQuery({ chatId, page });

  

  useEffect(() => {
    setMessages([]);
    oldMessage.refetch();
  }, [chatId]);

  const errors = [
    { isError: chatDetails.isError, error: chatDetails.error },
    { isError: oldMessage.isError, error: oldMessage.error },
  ];

  useErrors(errors);

  const eventHandler = { [NEW_MESSAGE]: newMessageHandler };
  useSocketEvents(socket, eventHandler);

  return chatDetails.isLoading ? (
    <Loader />
  ) : (
    <AppLayout>
      <ChatHeader chatId={chatId} />
      <div
        ref={containerRef}
        className="h-[86%] flex flex-col items-start justify-start gap-5 p-4 overflow-auto scrollbar  "
      >
        {!oldMessage.isLoading &&
          oldMessage?.data?.messages.map((i) => {
            return <MessageComponents key={i._id} message={i} user={user} />;
          })}
        {messages.map((i) => {
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
