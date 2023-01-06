import React from 'react'

function PlayerNav() {
  return (
    <div className='ml-24'>
      <div className='text-white'>
        <div className='text-5xl font-semibold' style = {{textShadow: "2px 2px 2px pink"}} >Ditto</div>
        <div className=' text-2xl font-normal' style = {{textShadow: "2px 2px 2px pink"}}>NewJeans · Ditto - Single</div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-[600px] h-2 rounded-full bg-red-400 mt-16'></div>
        <div className='flex justify-between items-center w-[300px] mt-8'>
          <div className='w-9 h-9 bg-PrevSongIcon bg-no-repeat bg-cover'></div>
          <div className=' w-14 h-14 bg-PlayIcon bg-no-repeat bg-cover'></div>
          <div className='w-9 h-9 bg-NexstSongIcon bg-no-repeat bg-cover'></div>
        </div>
      </div>
    </div>
  )
}

export default PlayerNav