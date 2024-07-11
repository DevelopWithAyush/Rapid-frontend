import React, { useContext } from "react";
import { HandleContext } from "../../hooks/HandleState";

const Wrapped = () => {
  const { wrapped, setWrapped ,setProfile,setIsNewGroup,setIsNoti} = useContext(HandleContext);
  const wrappedClick = () => {
    setWrapped(false);
    setProfile(false)
      setIsNewGroup(false)
      setIsNoti(false)
  };
  return (
    <>
      {wrapped && (
        <div
          onClick={wrappedClick}
          className="z-[10] fixed top-0 left-0 right-0  bottom-0 bg-white bg-opacity-10 "
        />
      )}
    </>
  );
};

export default Wrapped;
