import React from 'react'

function SearchInput() {
  return (
    <div className='flex w-[700px] h-11 bg-white pl-5 pr-[2px] py-2 justify-between items-center rounded-full'>
        <input className='w-full h-full outline-0 text-base'></input>
        <button className='w-10 h-10 rounded-full bg-BlSearchIcon bg-no-repeat bg-center hover:bg-slate-400 hover:bg-SearchIcon'></button>
    </div>
  )
}

export default SearchInput