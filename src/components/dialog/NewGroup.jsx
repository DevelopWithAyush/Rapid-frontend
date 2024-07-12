import React, { useContext } from "react";
import Wrapped from "../features/Wrapped";
import GroupCard from "../shared/GroupCard";
import { HandleContext } from "../../hooks/HandleState";

const NewGroup = () => {
  const {setIsNewGroup,setWrapped} = useContext(HandleContext)
  return (
    <>
      <Wrapped />
      <div className=" overflow-hidden  flex flex-col items-center justify-start gap-6 py-6 px-6 z-[20] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-[400px] h-[70vh] rounded-lg ">
        <p className="text-[28px] font-bold">New Group</p>
        <form className=" w-full flex flex-row px-6 py-3 justify-between bg-[#272727] rounded-[12px] ">
          <input
            type="text"
            placeholder="Name of group"
            className="bg-transparent w-full border-none outline-none"
          />
          {/* <button> <IoMdSearch className='text-[24px]' /></button> */}
        </form>
        <p className="w-full text-left text-[20px] font-semibold">Friends</p>
        <div className=" w-full h-full overflow-auto  flex flex-col items-start justify-start pr-3 gap-5 scrollbar ">
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </div>
        <div className="flex flex-row items-center justify-evenly w-full">
          <button onClick={() => {
            setWrapped(false)
            setIsNewGroup(false)
          }} className="capitalize py-2 px-5 bg-red-500 rounded-lg">
            cancel
          </button>
          <button  className="capitalize py-2 px-5 bg-green-500 rounded-lg">
            create
          </button>
        </div>
      </div>
    </>
  );
};

export default NewGroup;
