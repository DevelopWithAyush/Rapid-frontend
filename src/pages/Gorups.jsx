import React from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import SearchFriends from '../components/SearchFriends'
import UserCard from '../components/ChatCard'

const Gorups = () => {
  return (
    <section className="  w-[100vw] h-[100vh] fixed top-0 left-0 overflow-hidden   grid grid-cols-12 gap-[30px]">
      <SideBar />
      <div className="col-span-11  w-full h-[100vh] ">
        <Header />

        <div className="grid grid-cols-11   gap-[30px] w-full h-[90%]    ">
          {/* <div className="col-span-3 relative  h-full flex flex-col gap-6 items-start justify-start overflow-y-auto hide-scrollbar  ">
            <SearchFriends />
            {user.map(() => {
              return <UserCard />
            })}

          </div>
          <Message /> */}
        </div>
      </div>
    </section>
  )
}

export default Gorups
