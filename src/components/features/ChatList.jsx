import React, { useEffect, useState } from 'react'
import ChatCard from '../ChatCard'
import Avatar from "../../assets/IMG_20240424_164451046.jpg";
import toast from 'react-hot-toast';


const ChatList = () => {

    const [user,setUser] = useState([1,2,3,4,5,6,7,8,9,0])
    
   

    return (<>
        {
            user.map(() => {
                return <ChatCard isOnline={true} Avatar={Avatar}  />
            })
        }
    </>
     
  )
}

export default ChatList
