import React, { useCallback, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { NEW_MESSAGE_ALERT } from "../../constants/events";
import { HandleContext } from "../../hooks/HandleState";
import { useErrors, useSocketEvents } from "../../hooks/hooks";
import { SocketContext } from "../../hooks/socket";
import { useMyChatsQuery } from "../../redux/api/api";
import { setNewMessageAlert } from "../../redux/reducers/chat";
import Search from "../dialog/Search";
import ChatList from "../features/ChatList";
import Header from "../shared/Header";
import SideBar from "../shared/SideBar";

const AppLayout = ({ children }) => {
  const { chatId } = useParams();
  const { isSearch } = useContext(HandleContext);
  const { isLoading, data, isError, error, refetch } = useMyChatsQuery();
  useErrors([{ isError, error }]);

useEffect(() => {
refetch()  

}, [])

  const dispatch = useDispatch()

  const {socket} = useContext(SocketContext)

//   const newMessageAlertHandler = useCallback((data)=>{
//     dispatch(setNewMessageAlert(data))
//     console.log("ayush")
//   },[dispatch])


//   const eventHandlers = {
//     [NEW_MESSAGE_ALERT]: newMessageAlertHandler,
// }

// useSocketEvents(socket,eventHandlers)


  useEffect(() => {
    socket.on(NEW_MESSAGE_ALERT, (data) => {
    console.log(data)
    dispatch(setNewMessageAlert(data))
  })
    return () => {
    socket.off(NEW_MESSAGE_ALERT)
  }
},[dispatch])

  return (
    <section className="w-[100vw] h-[100vh] fixed top-0 left-0 overflow-hidden grid grid-cols-12 gap-[30px]">
      <SideBar />
      <div className="col-span-11 w-full h-[100vh]">
        <Header />
        <div className="grid grid-cols-11 gap-[20px] w-full h-[90%] relative">
          <div className="col-span-3 relative h-full flex flex-col gap-6 items-start justify-start overflow-hidden">
            {isSearch ? <Search /> : <div className="w-full h-full flex-grow flex flex-col gap-5 items-start justify-start overflow-auto pr-3 scrollbar relative">
              <ChatList data={data} chatId={chatId} />
            </div>}
            
            
          </div>
          <div className="col-span-8 bg-[#272727] rounded-[12px]  w-full h-full relative overflow-hidden pb-3">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppLayout;
