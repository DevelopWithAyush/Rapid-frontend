import React, { lazy, Suspense, useState } from 'react';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';
import { MdOutlineGroup, MdOutlineLogout } from "react-icons/md";
import { Link } from 'react-router-dom';

const Search = lazy(()=> import('./dialog/Search'))
const NewGroup = lazy(()=> import('./dialog/NewGroup'))

const SideBar = () => {
 const [isSearch,setIsSearch] = useState(false)
 const [isNewGroup,setIsNewGroup] = useState(false)
  return (
    <>
      <aside className='col-span-1 bg-[#FF4900] w-full min-h-screen rounded-tr-[48px] flex flex-col items-center pt-[10vh] gap-16 ' >
        <IoMdSearch onClick={()=>setIsSearch(true)} className=' cursor-pointer text-[28px]' />
        <IoMdAdd onClick={()=>setIsNewGroup(true)} className=' cursor-pointer text-[28px]' />
        <Link to={"/groups"}>  <MdOutlineGroup className=' cursor-pointer text-[28px]' /></Link>
        <MdOutlineLogout className=' cursor-pointer text-[28px]' />
      </aside>
      {isSearch && <Suspense fallback={<div>loading....</div>}><Search /></Suspense>}
      {isNewGroup && <Suspense fallback={<div>loading....</div>}><NewGroup/></Suspense>}
    </>

  )
}

export default SideBar
