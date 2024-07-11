import React from "react";
import Wrapped from "../features/Wrapped";

const ProfileCard = () => {
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
                          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/355.jpg"
                          alt=""
                      />
                  </div>
                  <div className="flex flex-col items-center justify-start gap-2">
                      <p className="text-[20px] font-medium text-[#757575]">Ayush Dubey</p>
                      <p className="text-[20px] font-medium text-[#757575]">
                          ayushdubey2017@gmail.com
                      </p>
                  </div>
                  <div className="flex flex-col items-center text-[16px] mt-5  ">
                      <p className="text-[16px] font-semibold leading-[20px]"> Joined 13min ago</p>
                  </div>
              </div>
          </div>
      </>
  );
};

export default ProfileCard;
