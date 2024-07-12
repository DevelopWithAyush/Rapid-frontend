import React from "react";
import ChatCard from "../shared/ChatCard";
import { useMyChatsQuery } from "../../redux/api/api";

const ChatList = ({
    userId,
    onlineUsers = ["665e3969628fb659db41a872",
        "665e3969628fb659db41a878",
        "665e3969628fb659db41a876",
        "665e3969628fb659db41a873"],
  newMessageAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
}) => {
  
  const { isLoading, data, isError, error, refetch } = useMyChatsQuery("")
  console.log(data?.chats)

  return (
    <>
      {data?.chats.map((chat) => {

        const MessageAlert = newMessageAlert.find(
          ({ chatId }) => chatId === chat._id
        );
        const isOnline = chat.members?.some((member)=>onlineUsers.includes(member))
        return (
            <ChatCard
                key={chat._id}
            _id={chat._id}
            name={chat.name}
            groupChat={chat.groupChat}
            avatar={chat.avatar}
            sameSender={chat._id === userId}
            newMessageAlert={MessageAlert}
            isOnline={isOnline}
          />
        );
      })}
    </>
  );
};

export default ChatList;
