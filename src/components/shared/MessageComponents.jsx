import React, { memo } from "react";

const MessageComponents = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  const sameSender = sender._id === user._id
    return <div className={`flex  items-end gap-3 justify-start ${sameSender ? "self-end flex-row-reverse" : "self-start flex-row"} max-w-[50%]`}>
        <div className="w-[7%] aspect-square rounded-full overflow-hidden bg-gray-500">
            <img className="h-full w-full" src={sender?.avatar.url} alt={sender?.avatar.public_id} />
       </div>
        <div className={`py-3 px-6 ${sameSender?"bg-[#FF4900]":"bg-black"} rounded-[12px] max-w-[93%] `}>{content} </div>
    </div>;
};

export default memo(MessageComponents);
