import React from 'react'

import {useRecoilValue} from "recoil"
import { getPlaylistSongs , currentSongNum} from '../../state/selector/searchPlaylist'

function Playerbg() {
  const currentSong = useRecoilValue(currentSongNum)
  const {image} = useRecoilValue(getPlaylistSongs)[currentSong].album

  return (
    <div className='bg-[#ffffff] w-screen h-screen absolute brightness-75'>
        <img src = {image} alt = "" className='w-full h-full object-cover blur-2xl'></img>
    </div>
  )
}

export default Playerbg