import React, { useContext, useState } from "react";
import Wrapped from "../features/Wrapped";
import GroupCard from "../shared/GroupCard";
import { HandleContext } from "../../hooks/HandleState";
import { useCreateGroupMutation, useToGetYourFriendsQuery } from "../../redux/api/api";
import { current } from "@reduxjs/toolkit";
import { useAsyncMutation } from "../../hooks/hooks";
import toast from "react-hot-toast";

const NewGroup = () => {
  const {setIsNewGroup,setWrapped} = useContext(HandleContext)
  const [selectedMembers,setSelectedMembers] = useState([])
  const [groupName,setGroupName]= useState('')
  console.log(selectedMembers)

  const { data, isLoading,isError,error,refetch } = useToGetYourFriendsQuery()

  const selectedMemberHandler = (id) => {
    setSelectedMembers((prev)=> prev.includes(id)?prev.filter((currentElement)=> currentElement !== id):[...prev ,id])
  }


  const [toCreateGroup] = useAsyncMutation(useCreateGroupMutation)

  const toCreateGroupHandler = async (name, members) => {
    if(!name) return toast.error("Please enter group name")
    await toCreateGroup("creating group....", { name,members })
  };
  return (
    <>
      <Wrapped />
      <div className=" overflow-hidden  flex flex-col items-center justify-start gap-6 py-6 px-6 z-[20] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-[400px] h-[70vh] rounded-lg ">
        <p className="text-[28px] font-bold">New Group</p>
        <form className=" w-full flex flex-row px-6 py-3 justify-between bg-[#272727] rounded-[12px] ">
          <input
          value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            type="text"
            placeholder="Name of group"
            className="bg-transparent w-full border-none outline-none"

          />
          {/* <button> <IoMdSearch className='text-[24px]' /></button> */}
        </form>
        <p className="w-full text-left text-[20px] font-semibold">Friends</p>
        <div className=" w-full h-full overflow-auto  flex flex-col items-start justify-start pr-3 gap-5 scrollbar ">
          {data?.friends.map((friend) => {
            return <GroupCard
            key={friend._id}
              handler={selectedMemberHandler}
              isAdded={selectedMembers.includes(friend._id)}
              friend={friend}  />
        })}
        </div>
        <div className="flex flex-row items-center justify-evenly w-full">
          <button onClick={() => {
            setWrapped(false)
            setIsNewGroup(false)
          }} className="capitalize py-2 px-5 bg-red-500 rounded-lg">
            cancel
          </button>
          <button onClick={(e) => {
            setWrapped(false)
            setIsNewGroup(false)
            e.preventDefault()
            toCreateGroupHandler(groupName, selectedMembers)
          }}  className="capitalize py-2 px-5 bg-green-500 rounded-lg">
            create
          </button>
        </div>
      </div>
    </>
  );
};

export default NewGroup;
