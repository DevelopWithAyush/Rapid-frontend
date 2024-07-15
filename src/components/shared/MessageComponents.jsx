import React, { memo } from "react";
import { fileFormat } from "../features/features";
import RenderAttachment from "./RenderAttachments";

const MessageComponents = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  const sameSender = sender._id === user._id;

  return (
    <div
      className={`flex items-end gap-3 justify-start ${sameSender ? "self-end flex-row-reverse" : "self-start flex-row"
        } max-w-[50%]`}
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
          <p
            className={`rounded-[12px] py-3 px-6 ${sameSender ? "bg-[#FF4900]" : "bg-black"
              }`}
          >
            {content}
          </p>
        )}
        {attachments.length > 0 && attachments.map((attachment, index) => {
          const url = attachment?.url;
          const file = fileFormat(url);
          return (
            <div key={index}>
              <a href={url} target="_blank" download style={{ color: "black" }}>
                {RenderAttachment(file, url)}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(MessageComponents);
