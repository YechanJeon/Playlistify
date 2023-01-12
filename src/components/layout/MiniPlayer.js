import React from 'react'
import MiniPlayerNav from '../common/MiniPlayerNav'

function MiniPlayer() {
  return (
    <div className='w-screen h-28 absolute bottom-0 flex items-center miniPlayerBG justify-center'>
        <div className='flex items-center absolute left-3'>
            <div className=' w-20 h-20'>
                <img className='w-full h-full' src = "https://i.scdn.co/image/ab67706c0000da846742052d7ed7429eec69e8db"></img>
            </div>
            <div className='ml-6 align-center'>
                <div className=' text-xl font-medium text-white'>Lester Burnham</div>
                <div className=' text-base font-light text-white'>BlackSkirt</div>
            </div>
        </div>
        <MiniPlayerNav/>
    </div>
  )
}

export default MiniPlayer