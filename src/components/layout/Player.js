import React from 'react'
import PlayerNav from "../common/PlayerNav"
import {useRecoilValue} from "recoil"
import { getPlaylistSongs , currentSongNum} from '../../state/selector/searchPlaylist'

function Player() {
  const currentSong = useRecoilValue(currentSongNum)
  const {image} = useRecoilValue(getPlaylistSongs)[currentSong].album
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className=' w-[500px] h-[500px]'> 
        <img className = "w-full h-full" src = {image} alt = ""></img>
      </div>
      <PlayerNav/>
    </div>
  )
}

export default Player