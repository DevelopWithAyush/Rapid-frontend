import React, { useState } from "react";
import { useAsyncMutation } from "../../hooks/hooks";
import { useSendFriendRequestMutation } from "../../redux/api/api";
import SearchFriends from "../shared/SearchFriends";

const Search = () => {
  const [users, setUsers] = useState([]);
  const [sendFriendRequest,isLoading] = useAsyncMutation(useSendFriendRequestMutation);

  const friendRequestHandler = async (userId,name) => {
    await sendFriendRequest("Sending friend request...", {userId})
  };

  return (
    <>
      <SearchFriends setUsers={setUsers} />
      <div className="w-full h-full flex-grow flex flex-col gap-5 items-start justify-start overflow-auto pr-3 scrollbar relative">
        {users.map((user) => {
          return (
            <div
              key={user._id}
              className="flex flex-row items-center justify-between w-full py-3 px-3 rounded-lg bg-[#272727] bg-opacity-[0.47]"
            >
              <div className="flex flex-row items-center justify-start gap-5">
                <div className="flex w-[48px] aspect-square rounded-full overflow-hidden">
                  <img src={user?.avatar} alt={user._id} />
                </div>
                <p className="w-36 overflow-hidden whitespace-nowrap text-ellipsis">{user.name}</p>
              </div>
              <button
                onClick={() => friendRequestHandler(user._id,user.name)}
                className="px-3 py-1 capitalize rounded-full bg-green-500 "
              >
                + request
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Search;
