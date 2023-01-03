import React from 'react'

function SearchInput() {
  return (
    <div className='flex w-[800px] h-11 bg-white pl-5 pr-[2px] py-2 justify-between items-center rounded-full'>
        <input className='w-full h-full outline-0 text-base'></input>
        <button className='w-10 h-10 rounded-full hover:bg-slate-400'>SearchIcon</button>
    </div>
  )
}

export default SearchInput