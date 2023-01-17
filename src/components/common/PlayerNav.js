import React , {useEffect,useRef} from 'react'

import {useRecoilValue , useRecoilState , useSetRecoilState} from "recoil"
import { currentSongSelector 

  , currentSongNum
  , videoStateAtom
  , videoProgressAtom 
  , videoProgressBarAtom
  ,totalLengthAtom
  ,currentDurationAtom
} from '../../state/selector/searchPlaylist'


function PlayerNav() {
  const [currentSong, setCurrentSong] = useRecoilState(currentSongNum)
  const song = useRecoilValue(currentSongSelector)
  // const songs = useRecoilValue(getPlaylistSongs)
  // const videoId = useRecoilValue(getYoutubeVideo)

  const totalLength = useRecoilState(totalLengthAtom)
  const currentDuration = useRecoilState(currentDurationAtom)


  const [videoState,setVideoState] = useRecoilState(videoStateAtom)
  const videoProgress = useRecoilValue(videoProgressAtom)
  const setVideoProgress = useSetRecoilState(videoProgressBarAtom)

  const seekBar = useRef()

  useEffect(()=>{
    seekBar.current.value=videoProgress*1000
  } , [videoProgress])

  useEffect(() => {
    window.addEventListener("keydown" , (e) => {
      if(e.keyCode===32&&document.activeElement.tagName!=="INPUT"){
        setVideoState(!videoState)
      }
    })
  })

  
  const nextSong = () => {
    seekBar.current.value=1000
    setCurrentSong(currentSong+1)
  }
  
  
      
  const changeProgress = value => {
    setVideoProgress(value/1000)
  }

  const prevSong = () => {
    if(currentDuration[0]==="0:00"||currentDuration[0]==="0:01"||currentDuration[0]==="0:02"||currentDuration[0]==="0:03"){
        currentSong !== 0 ? setCurrentSong(currentSong-1) : setVideoProgress(0)
    }else{
        setVideoProgress(0)
    }
  }
  return (
    <div className='ml-24'>
      <div className='text-white'>
        <div className='text-5xl font-semibold max-w-[600px]'>{song ? song.title : ""}</div>
        <div className=' text-2xl font-normal max-w-[600px] mt-2'>{song ? `${song.artists} · ${song.album.title}` : ""} </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-[600px] mt-16'>
          <div className='flex justify-between w-full text-white mb-[-8px]'>
            <div>{currentDuration}</div>
            <div>{totalLength}</div>
          </div>
          <input type = "range" min = "0" max = "1000" className="w-[600px] h-2" 
          ref = {seekBar} 
          onChange = {(e) => changeProgress(e.target.value)}></input>
        </div>

        <div className='flex justify-between items-center w-[300px] mt-8'>
          <div className='w-9 h-9 bg-PrevSongIcon bg-no-repeat bg-cover hover:cursor-pointer'
          onClick = {() => prevSong()}></div>
          {videoState ? 
          <div className=' w-14 h-14 bg-PauseIcon bg-no-repeat bg-cover hover:cursor-pointer' onClick = {() => setVideoState(!videoState)}></div> :
          <div className=' w-14 h-14 bg-PlayIcon bg-no-repeat bg-cover hover:cursor-pointer' onClick = {() => setVideoState(!videoState)}></div>
          }
          
          
          <div className='w-9 h-9 bg-NexstSongIcon bg-no-repeat bg-cover hover:cursor-pointer'
          onClick = {() => nextSong()}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default PlayerNav