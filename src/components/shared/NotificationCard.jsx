import React, { useContext } from 'react'
import { useAsyncMutation } from '../../hooks/hooks'
import { useAcceptFriendRequestMutation } from '../../redux/api/api'
import { HandleContext } from '../../hooks/HandleState'

const NotificationCard = ({ noti, notificationRefetch }) => {
  const {name,avatar} = noti?.sender 

  const [FriendRequest] = useAsyncMutation(useAcceptFriendRequestMutation);
  const {isnoti ,setIsNoti,setWrapped } =useContext(HandleContext)

  // Event handler function
  const acceptFriendRequest = async (requestId, accept) => {
    await FriendRequest("Accepting friend request", { requestId, accept });
    setIsNoti(false)
    setWrapped(false)
    notificationRefetch()
  };




  

  return (
    <div className='py-3 px-3 bg-[#000000]   flex flex-row items-center justify-between w-full rounded-lg'>
      <div className='flex flex-row items-center justify-start gap-4'>
        <div className='w-[50px] h-[50px] rounded-full overflow-hidden bg-white'>
              <img src={avatar} alt={avatar} />
        </div>
        <p className='text-[16px] font-medium'>{name}</p>
      </div>
      <div className='flex flex-row items-center justify-start gap-5 '>
        <button onClick={()=> acceptFriendRequest(noti?._id,true)}  className=' flex flex-col items-center justify-center rounded-full text-[16px] text-green-500 capitalize'>accept</button>
        <button onClick={() =>acceptFriendRequest(noti?._id,false)} className=' flex flex-col items-center justify-center rounded-full text-[16px] text-red-500 capitalize'>reject</button>
      </div>
    </div>
  )
}

export default NotificationCard
