import React from "react";
import ChatCard from "../shared/ChatCard";

const ChatList = ({
  data,
  chatId,
  onlineUsers = [],
  newMessageAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
}) => {



  return (
    <>
      {!data?.chats[0] ? (
        <div className="w-full h-full flex flex-col items-center justify-center text-[24px] text-center font-semibold leading-7 ">
          {" "}
          🥺No friends <br /> add friend to chat
        </div>
      ) : (
        data?.chats.map((chat) => {
          const MessageAlert = newMessageAlert.find(
            ({ chatId }) => chatId === chat._id
          );
          const isOnline = chat.members?.some((member) =>
            onlineUsers.includes(member)
          );
          return (
            <ChatCard
              key={chat._id}
              _id={chat._id}
              name={chat.name}
              groupChat={chat.groupChat}
              avatar={chat.avatar}
              sameSender={chat._id === chatId}
              newMessageAlert={MessageAlert}
              isOnline={isOnline}
            />
          );
        })
      )}
    </>
  );
};

export default ChatList;


