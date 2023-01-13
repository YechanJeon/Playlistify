import React from 'react'
import PlayerNav from "../common/PlayerNav"
import {useRecoilValue} from "recoil"
import { currentSongSelector} from '../../state/selector/searchPlaylist'

function Player() {
  const song = useRecoilValue(currentSongSelector)
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className=' w-[500px] h-[500px]'> 
        {song ? <img className = "w-full h-full" src = {song.album.image} alt = ""></img> : ""}
      </div>
      <PlayerNav/>
    </div>
  )
}

export default Player