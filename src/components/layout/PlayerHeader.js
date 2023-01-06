import React from 'react'

function PlayerHeader() {
  return (
    <div className='absolute w-screen p-1 flex justify-between' id = "playerHeader">
        <div className='w-10 h-10 bg-PrevPageIcon bg-no-repeat bg-cover'></div>
        <div className='w-10 h-10 bg-ListIcon bg-no-repeat bg-cover'></div>
    </div>
  )
}

export default PlayerHeader