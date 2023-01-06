import React from 'react'
import PlayerNav from "../common/PlayerNav"

function Player() {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className=' w-[500px] h-[500px]'> 
        <img className = "w-full h-full" src = "https://i.scdn.co/image/ab67706c0000bebb4003a37860e0aee321a33fb0" alt = ""></img>
      </div>
      <PlayerNav/>
    </div>
  )
}

export default Player