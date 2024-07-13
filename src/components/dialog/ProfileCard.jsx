import React from "react";
import Wrapped from "../features/Wrapped";
import { useSelector } from "react-redux";
import moment from 'moment'

const ProfileCard = () => {
    const {user} = useSelector((state) => state.auth)
    console.log(user)
  return (
      <>
          <Wrapped/>
          <div className="z-[100] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-6 px-6 rounded-lg overflow-hidden  " style={{
              boxShadow: "0px 0px 62px -1px rgba(100,29,0,0.5)"
          }}>
              <div className="h-full w-full absolute top-0 left-0">
                  {/* <div className="h-[35%] bg-[#FF4900]" /> */}
                  <div className="h-[100%] bg-black" />
              </div>
              <div className="w-full h-full flex flex-col items-center relative py-[10%] gap-5 ">
                  <div className=" w-[150px] h-[150px] rounded-full overflow-hidden  ">
                      <img
                          className="w-full h-full"
                          src={user?.avatar?.url}
                          alt={user?.avatar?.public_id}
                      />
                  </div>
                  <div className="flex flex-col items-center justify-start gap-2">
                      <p className="text-[20px] font-medium text-[#757575]">{ user.name}</p>
                      <p className="text-[20px] font-medium text-[#757575]">
                          {user?.userEmail}
                      </p>
                  </div>
                  <div className="flex flex-col items-center text-[16px] mt-5  ">
                      <p className="text-[16px] font-semibold leading-[20px] capitalize">joined : {moment(user?.createdAt).fromNow()}</p>
                  </div>
              </div>
          </div>
      </>
  );
};

export default ProfileCard;
