import React from "react";
import AppLayout from "../components/layout/AppLayout";
import ChatHeader from "../components/shared/ChatHeader";
import MessageSender from "../components/shared/MessageSender";
import { sampleMessage } from "../data/message";
import MessageComponents from "../components/shared/MessageComponents";

const Chat = () => {
  const user = {
    _id: "665d06798ae8f9b4815979f1" ,
    name: 'ayush dubey',
    avatar: {
      "public_id": "some_public_id",
      "url": "http://example.com/avatar.jpg"
    }
  }
  return (
    <AppLayout>
      <ChatHeader/>
      <div className="h-[86%] flex flex-col items-start justify-start gap-5 p-4 overflow-auto scrollbar  ">
        {sampleMessage.map((i) => {
          return (
           <MessageComponents message={i} user={user}/>
         ) 
           
        })}
      
      </div>
      <MessageSender/>
    </AppLayout>
  );
};

export default Chat;
