import React from 'react'
// https://i.scdn.co/image/ab67706c0000bebb4003a37860e0aee321a33fb0

// import {useRecoilValue} from "recoil"
// import { getPlaylistSongs , currentSongNum} from '../../state/selector/searchPlaylist'



function Playerbg() {
  // const currentSong = useRecoilValue(currentSongNum)
  // const songs = useRecoilValue(getPlaylistSongs)

  return (
    <div className='bg-[#ffffff] w-screen h-screen absolute brightness-90'>
        <img src = "https://i.scdn.co/image/ab67706c0000bebb4003a37860e0aee321a33fb0" alt = "" className='w-full h-full object-cover blur-2xl'></img>
    </div>
  )
}

export default Playerbg