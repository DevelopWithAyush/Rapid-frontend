import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useLazySearchUserQuery } from "../../redux/api/api";
import toast from "react-hot-toast";

const SearchFriends = ({setUsers}) => {
  const [search, setSearch] = useState("");
  const [searchUser] = useLazySearchUserQuery();
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      searchUser(search)
        .then(({ data }) => setUsers(data.users))
        .catch((e) => toast.error(e?.response?.data?.message));
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [search]);

  return (
    <form className=" w-full flex flex-row px-6 py-3 justify-between bg-[#272727] rounded-[12px] ">
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Search new friends ...."
        className="bg-transparent w-full border-none outline-none"
      />
      <div>
        {" "}
        <IoMdSearch className="text-[24px]" />
      </div>
    </form>
  );
};

export default SearchFriends;
