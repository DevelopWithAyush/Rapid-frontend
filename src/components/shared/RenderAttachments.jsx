import React from "react";
import { transformImage } from "../features/features";
import { FaFileAlt } from "react-icons/fa";

const RenderAttachment = (file, url) => {
    switch (file) {
        case "video":
            return <video src={url} preload="none" width={"200px"} controls />;

        case "image":
            return (
                <img
                    src={transformImage(url)}
                    alt="Attachement"
                    width={"200px"}
                    height={"150px"}
                    style={{
                        objectFit: "contain",
                    }}
                />
            );

        case "audio":
            return <audio src={url} preload="none" controls />;

        default:
            return <FaFileAlt className="text-[100px] text-[#FF4900]" />;
    }
};

export default RenderAttachment;