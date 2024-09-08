import React, { useCallback, useContext } from 'react'
import { FaXmark } from 'react-icons/fa6'
import NotificationCard from '../shared/NotificationCard'
import { HandleContext } from '../../hooks/HandleState'
import { useGetNotificationsQuery } from '../../redux/api/api'
import { useErrors, useSocketEvents } from '../../hooks/hooks'
import Wrapped from '../features/Wrapped'
import { useDispatch } from 'react-redux'
import { incrementNotification } from '../../redux/reducers/chat'
import { NEW_REQUEST } from '../../constants/events'
import { SocketContext } from '../../hooks/socket'

const Notification = () => {
    const {setIsNoti,isNoti,setWrapped} = useContext(HandleContext)

    const {isLoading ,data,error,isError,refetch} = useGetNotificationsQuery()
    useErrors([{ isError, error }]);


    const dispatch = useDispatch()
    const { socket } = useContext(SocketContext)
    const newRequestHandler = useCallback(() => {
        dispatch(incrementNotification())
        refetch()
    }, [dispatch])

    const eventHandlers = {
        [NEW_REQUEST]: newRequestHandler
    }
    useSocketEvents(socket, eventHandlers)
  return (
      <>
      <Wrapped/>
          <div
              className={`absolute bottom-0 left-0 translate-y-[100%] -translate-x-[70%] origin-custom-origin transition-all duration-300 ${isNoti ? " scale-100" : "scale-0"
                  } bg-[#FF4900]  w-[325px] h-[500px] z-[100] rounded-b-xl rounded-t-xl flex flex-col items-center justify-start py-3 px-3 gap-5`}
          >
              <div className="flex flex-row items-center justify-between w-full text-[20px]">
                  <p>Notification </p>
                  <button onClick={() => {
                      setIsNoti(false)
                      setWrapped(false)
                      
                  }}>
                      <FaXmark />
                  </button>
              </div>
              {isLoading ? <p>loading...</p> : <div className='flex flex-col items-center justify-start gap-5 w-full'>
                  {data?.allRequests.map((noti) => {
                      return (
                          <NotificationCard key={noti._id} noti={noti} notificationRefetch={refetch} />
                      )
                  })}
              </div>}
          </div>
      </>
  )
}

export default Notification
