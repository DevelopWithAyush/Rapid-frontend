import { createContext, useState } from "react";

export const HandleContext = createContext();

const HandleState = ({ children }) => {
  const [wrapped, setWrapped] = useState(false);
  const [profile, setProfile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNoti, setIsNoti] = useState(false);
  const [attachment, setAttachment] = useState(false);
const [openLogin,setOpenLogin] = useState(false)

console.log(openLogin)
  const handleDeleteChat = (e, _id, groupChat) => {
    e.preventDefault();
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
        openLogin,
        setOpenLogin

      }}
    >
      {children}
    </HandleContext.Provider>
  );
};

export default HandleState;
