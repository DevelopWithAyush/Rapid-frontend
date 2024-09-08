import React, { memo } from "react";
import { fileFormat } from "../features/features";
import RenderAttachment from "./RenderAttachments";
import moment from "moment";

const MessageComponents = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  const sameSender = sender._id === user._id;

  return (
    <div
      className={`flex items-end gap-3 justify-start ${sameSender ? "self-end flex-row-reverse" : "self-start flex-row"
        } max-w-[70%]`}
    >
      <div className="w-[7%] aspect-square rounded-full overflow-hidden bg-gray-500">
        <img
          className="h-full w-full"
          src={sender?.avatar?.url}
          alt={sender?.avatar?.public_id}
        />
      </div>
      <div className="rounded-[12px] max-w-[93%]">
        {content && (
          <div className={`flex flex-col items-start justify-start rounded-[12px] pt-3 pb-1 px-3 ${sameSender ? "bg-[#FF4900]" : "bg-black"
            }`}>
            <p
             
            >
              {content}
            </p>
            <p className={`text-[12px] font-thin ${sameSender ? "self-end" : "self-start"}  `}> {(moment(createdAt).fromNow()).replace(/minutes/g, 'min')}</p>
       </div>
          
        )}
        {attachments.length > 0 && attachments.map((attachment, index) => {
          const url = attachment?.url;
          const file = fileFormat(url);
          return (
            <div key={index} className="flex flex-col items-start justify-start px-3">
              <a href={url} target="_blank" download style={{ color: "black" }}>
                {RenderAttachment(file, url)}
              </a>
              <p className={`text-[12px] font-thin ${sameSender ? "self-end" : "self-start"}  `}> {moment(createdAt).fromNow()}</p>
            </div>
          );
        })}

       
      </div>
    </div>
  );
};

export default memo(MessageComponents);
