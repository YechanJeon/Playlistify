import React from 'react'

import {useRecoilValue , useRecoilState} from "recoil"
import { getPlaylistSongs , currentSongNum} from '../../state/selector/searchPlaylist'

function PlayerNav() {
  const [currentSong, setCurrentSong] = useRecoilState(currentSongNum)
  const songs = useRecoilValue(getPlaylistSongs)

  return (
    <div className='ml-24'>
      <div className='text-white'>
        <div className='text-5xl font-semibold max-w-[600px]'>{songs[currentSong].title}</div>
        <div className=' text-2xl font-normal max-w-[600px] mt-2'>{songs[currentSong].artists} · {songs[currentSong].album.title}</div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-[600px] h-2 rounded-full bg-white mt-16'></div>
        <div className='flex justify-between items-center w-[300px] mt-8'>
          <div className='w-9 h-9 bg-PrevSongIcon bg-no-repeat bg-cover hover:cursor-pointer'
          onClick = {() => currentSong!== 0 ? setCurrentSong(currentSong-1) : ""}></div>
          <div className=' w-14 h-14 bg-PlayIcon bg-no-repeat bg-cover hover:cursor-pointer'></div>
          <div className='w-9 h-9 bg-NexstSongIcon bg-no-repeat bg-cover hover:cursor-pointer'
          onClick = {() => currentSong !== songs.length-1 ? setCurrentSong(currentSong+1) : ""}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default PlayerNav