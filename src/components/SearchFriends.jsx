import React from 'react'
import { IoMdSearch } from 'react-icons/io'

const SearchFriends = () => {
  return (
      <form className=' w-full flex flex-row px-6 py-3 justify-between bg-[#272727] rounded-[12px] '>
          <input type="text" placeholder='Search your friends ....' className='bg-transparent w-full border-none outline-none' />
          <button> <IoMdSearch className='text-[24px]' /></button>
    </form>
  )
}

export default SearchFriends
