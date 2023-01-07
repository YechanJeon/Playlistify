import React, {useState} from 'react'
import Playlist from "../layout/Playlist"
import PlayerHeaderNav from './PlayerHeaderNav'

function PlayerHeader() {
  const [playback , setPlayback] = useState(false)

  const changePlaybackState = () =>{
    setPlayback(!playback)
  }

  return (
    <div className='absolute w-screen p-1 z-10 flex justify-between'>
      {playback ? <Playlist changePlaybackState = {changePlaybackState}/>: <PlayerHeaderNav changePlaybackState = {changePlaybackState}/>}
    </div>
    )
}

export default PlayerHeader