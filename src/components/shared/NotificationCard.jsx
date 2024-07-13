import React from 'react'
import { useAsyncMutation } from '../../hooks/hooks'
import { useAcceptFriendRequestMutation } from '../../redux/api/api'

const NotificationCard = ({noti}) => {
  const {name,avatar} = noti?.sender 
  console.log(avatar)

//   const [FriendRequest,isLoading,data] = useAsyncMutation(useAcceptFriendRequestMutation)
//   console.log(data)

//   const acceptFriendRequest = async(requestId, accept) => {
// await FriendRequest("accepting friend request",{requestId,accept})
    
//   }




  

  return (
    <div className='py-3 px-3 bg-[#000000]   flex flex-row items-center justify-between w-full rounded-lg'>
      <div className='flex flex-row items-center justify-start gap-4'>
        <div className='w-[50px] h-[50px] rounded-full overflow-hidden bg-white'>
              <img src={avatar} alt={avatar} />
        </div>
        <p className='text-[16px] font-medium'>{name}</p>
      </div>
      <div className='flex flex-row items-center justify-start gap-5 '>
        <button  className=' flex flex-col items-center justify-center rounded-full text-[16px] text-green-500 capitalize'>accept</button>
        <button className=' flex flex-col items-center justify-center rounded-full text-[16px] text-red-500 capitalize'>reject</button>
      </div>
    </div>
  )
}

export default NotificationCard
