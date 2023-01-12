import React from 'react'

function MiniPlayerNav() {
  return (
    <div className='flex flex-col items-center'>
        <div className='flex justify-between w-80 items-center'>
            {/* 56 36 */}
            <div className='w-7 h-7 bg-PrevSongIcon bg-no-repeat bg-cover hover:cursor-pointer'></div>
            <div className='w-11 h-11  bg-PauseIcon bg-no-repeat bg-cover hover:cursor-pointer'></div>
            <div className='w-7 h-7 bg-NexstSongIcon bg-no-repeat bg-cover hover:cursor-pointer'></div>
        </div>
        <div className='w-[700px] h-[6px] bg-green-300 rounded-full mt-5'></div>
    </div>
  )
}

export default MiniPlayerNav