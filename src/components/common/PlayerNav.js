import React , {useEffect,useRef} from 'react'

import {useRecoilValue , useRecoilState , useSetRecoilState} from "recoil"
import { currentSongSelector , getPlaylistSongs, currentSongNum , videoStateAtom , videoProgressAtom , videoProgressBarAtom} from '../../state/selector/searchPlaylist'


function PlayerNav() {
  const [currentSong, setCurrentSong] = useRecoilState(currentSongNum)
  const song = useRecoilValue(currentSongSelector)
  const songs = useRecoilValue(getPlaylistSongs)
  // const videoId = useRecoilValue(getYoutubeVideo)


  const [videoState,setVideoState] = useRecoilState(videoStateAtom)
  const videoProgress = useRecoilValue(videoProgressAtom)
  const setVideoProgress = useSetRecoilState(videoProgressBarAtom)

  const seekBar = useRef()

  useEffect(()=>{
    seekBar.current.value=videoProgress*1000
  } , [videoProgress])

  const changeProgress = e => {
    setVideoProgress(e.target.value/1000)
  }

  return (
    <div className='ml-24'>
      <div className='text-white'>
        <div className='text-5xl font-semibold max-w-[600px]'>{song ? song.title : ""}</div>
        <div className=' text-2xl font-normal max-w-[600px] mt-2'>{song ? `${song.artists} · ${song.album.title}` : ""} </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <input type = "range" min = "0" max = "1000" className="mt-16 w-[600px] h-2" 
        ref = {seekBar} 
        onChange = {(e) => changeProgress(e)}></input>

        <div className='flex justify-between items-center w-[300px] mt-8'>
          <div className='w-9 h-9 bg-PrevSongIcon bg-no-repeat bg-cover hover:cursor-pointer'
          onClick = {() => currentSong!== 0 ? setCurrentSong(currentSong-1) : ""}></div>
          {videoState ? 
          <div className=' w-14 h-14 bg-PauseIcon bg-no-repeat bg-cover hover:cursor-pointer' onClick = {() => setVideoState(!videoState)}></div> :
          <div className=' w-14 h-14 bg-PlayIcon bg-no-repeat bg-cover hover:cursor-pointer' onClick = {() => setVideoState(!videoState)}></div>
          }
          
          
          <div className='w-9 h-9 bg-NexstSongIcon bg-no-repeat bg-cover hover:cursor-pointer'
          onClick = {() => currentSong !== songs.length-1 ? setCurrentSong(currentSong+1) : ""}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default PlayerNav