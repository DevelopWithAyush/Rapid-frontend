import React, { useContext, useEffect } from "react";
import { IoMdNotifications } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { HandleContext } from "../../hooks/HandleState";
import Notification from "../dialog/Notification";
import ProfileCard from "../dialog/ProfileCard";
import { incrementNotification, resetNotificationCount } from "../../redux/reducers/chat";
import { NEW_REQUEST } from "../../constants/events";
import { getOrSaveFromLocalStorage } from "../features/features";
import logo from "../../assets/image/goodstanding.png"
const Header = () => {
  const { profile, setProfile, setWrapped, isNoti, setIsNoti } =
    useContext(HandleContext);
  const { chatId } = useParams();

  const { user } = useSelector((state) => state.auth);
  const { notificationCount } = useSelector((state) => state.chat);

  const dispatch = useDispatch()
  // const { api } = useSelector((state) => state)
  useEffect(() => {
    getOrSaveFromLocalStorage({ key: NEW_REQUEST, value: notificationCount })


  }, [notificationCount])
  return (
    <>
      <header className={`h-[7%] ${chatId?"lg:flex hidden":"flex lg:flex"}  flex-row items-center justify-between px-6 lg:pr-12`} >
        <Link to={"/"} className="flex flex-row items-center justify-start gap-2">
          {" "}
          <Logo />{" "}
          {/* <span className="text-white text-[24px] font-medium leading-6">
          Good Standing
          </span> */}
        </Link>
        <div className=" flex  h-full items-center justify-center gap-10 lg:gap-16  ">
          <div className=" relative h-auto w-auto">
            <IoMdNotifications
              className="text-[24px]"
              onClick={() => {
                dispatch(resetNotificationCount())
                setIsNoti(!isNoti);
                setWrapped(true);
              }}
            />
            {notificationCount !== 0 && (
              <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-6 rounded-full text-[12px] p-[2px] aspect-square flex flex-col items-center justify-center  bg-red-500  ">
                {notificationCount >99 ? "99+ ":notificationCount}
              </div>
            )}
            <Notification />
          </div>
          <div
            onClick={() => {
              setProfile(true);
              setWrapped(true);
            }}
            className="w-10 lg:w-12 h-10 lg:h-12 rounded-full overflow-hidden flex"
          >
            <img src={user?.avatar?.url} alt={user?.avatar?.public_id} />
          </div>
        </div>
      </header>

      {profile && <ProfileCard />}
    </>
  );
};

const Logo = () => {
  return (
    <>
    <img src={logo} alt="logo" className="w-[40px]" />

    </>
  );
};
export default Header;
