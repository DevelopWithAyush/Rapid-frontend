import React from "react";
import AppLayout from "../components/layout/AppLayout";

const Home = () => {
  return(
<AppLayout>
      <div className="flex flex-col items-center justify-center w-full h-full ">
        <p className="text-center capitalize text-[24px] text-white font-medium leading-7" >🥺 no chat selected <br /> select chat to start convercation </p>
      </div>               
      
</AppLayout>
    
               
  )
};

export default Home;
