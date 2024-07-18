import React from "react";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
const GroupCard = ({ friend, isAdded, handler }) => {
  return (
    <div className="py-3 px-3 bg-[#272727] bg-opacity-[.47]  flex flex-row items-center justify-between w-full rounded-lg">
      <div className="flex flex-row items-center justify-start gap-4">
        <div className="w-[50px] h-[50px] overflow-hidden rounded-full bg-white">
          <img
            className="w-full h-full "
            src={friend?.avatar}
            alt={friend._id}
          />
        </div>
        <p className="text-[16px] font-medium">{friend?.name}</p>
      </div>
      <div className="flex flex-row items-center justify-start">
        {isAdded ? (
          <button
            onClick={(e) => {
              e.preventDefault();

              handler(friend._id);
            }}
            className="w-10 h-10 flex flex-col items-center justify-center bg-red-500 rounded-full text-[20px]"
          >
            <RiSubtractFill />
            
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              handler(friend._id);
            }}
            className="w-10 h-10 flex flex-col items-center justify-center bg-green-500 rounded-full text-[20px]"
          >
              <IoMdAdd />
          </button>
        )}
      </div>
    </div>
  );
};

export default GroupCard;
