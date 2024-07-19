import React, { lazy, Suspense, useContext } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdGroup, MdGroupAdd, MdOutlineLogout } from "react-icons/md";

import { Link } from "react-router-dom";
import { HandleContext } from "../../hooks/HandleState";
import axios from "axios";
import { server } from "../../constants/config";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userNotExists } from "../../redux/reducers/auth";

const NewGroup = lazy(() => import("../dialog/NewGroup"));

const SideBar = () => {
  const { setIsNewGroup, setIsSearch, isNewGroup, setWrapped } =
    useContext(HandleContext);
const dispatch = useDispatch()
  const handleLogout = async(e) => {
    e.preventDefault()
    try {
      const { data } = await axios.get(`${server}/api/v1/user/logout`, { withCredentials: true })
      toast.success(data.message)
      dispatch(userNotExists())
    } catch (error) {
      toast.error(error?.response?.data?.message || "something went worng")
    }
  }
      return (
    <>
      <aside className="col-span-1 bg-[#FF4900] w-full min-h-screen rounded-tr-[48px] flex flex-col items-center pt-[10vh] gap-16 ">
        <IoChatbubbleEllipses
          onClick={() => setIsSearch(false)}
          className=" cursor-pointer text-[28px]"
        />
        <Link to={"/"}>
          <IoMdSearch
            onClick={() => setIsSearch(true)}
            className=" cursor-pointer text-[28px]"
          />
        </Link>
        <MdGroupAdd
          onClick={() => {
            setIsNewGroup(true);
            setWrapped(true);
          }}
          className=" cursor-pointer text-[28px]"
        />
        {/* <Link to={"/groups"}>
          {" "}
          <MdGroup className=" cursor-pointer text-[28px]" />
        </Link> */}
            <MdOutlineLogout onClick={handleLogout}  className=" cursor-pointer text-[28px]" />
      </aside>
      {/* {isSearch && <Suspense fallback={<div>loading....</div>}><Search /></Suspense>} */}
      {isNewGroup && (
        <Suspense fallback={<div>loading....</div>}>
          <NewGroup />
        </Suspense>
      )}
    </>
  );
};

export default SideBar;
