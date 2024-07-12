import { createContext, useState } from "react";

export const HandleContext = createContext();

const HandleState = ({ children }) => {
  const [wrapped, setWrapped] = useState(false);
  const [profile, setProfile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNoti, setIsNoti] = useState(false);
  const [attachment, setAttachment] = useState(false);
  const handleDeleteChat = (e, _id, groupChat) => {
    e.preventDefault();
    console.log("Delete chat", _id, groupChat);
  };

  return (
    <HandleContext.Provider
      value={{
        handleDeleteChat,
        wrapped,
        setWrapped,
        profile,
        setProfile,
        isSearch,
        setIsSearch,
        isNewGroup,
        setIsNewGroup,
        isNoti,
        setIsNoti,
        attachment,
        setAttachment,
      }}
    >
      {children}
    </HandleContext.Provider>
  );
};

export default HandleState;
