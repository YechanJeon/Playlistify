import React , {useEffect , useRef} from 'react'
import { videoProgressAtom,
        videoProgressBarAtom,
        videoStateAtom ,
        totalLengthAtom,
        currentDurationAtom,
        currentSongNum
      } from '../../state/selector/searchPlaylist'
import {useRecoilState , useRecoilValue, useSetRecoilState} from "recoil"


function MiniPlayerNav() {
  const seekBar = useRef()
  const [videoState , setVideoState] = useRecoilState(videoStateAtom)
  const [currentSong, setCurrentSong] = useRecoilState(currentSongNum)
  const videoProgress = useRecoilValue(videoProgressAtom)
  const setVideoProgress = useSetRecoilState(videoProgressBarAtom)

  const totalLength = useRecoilState(totalLengthAtom)
  const currentDuration = useRecoilState(currentDurationAtom)

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
  const nextSong = () => {
    setCurrentSong(currentSong+1)
  }

  useEffect(() => {
    window.addEventListener("keydown" , (e) => {
      if(e.keyCode===32&&document.activeElement.tagName!=="INPUT"){
        setVideoState(!videoState)
      }
    })
  })

  useEffect(() => {
    seekBar.current.value = videoProgress*1000
  },[videoProgress])

  return (
    <div className='flex flex-col items-center'>
        <div className='flex justify-between w-80 items-center'>
            {/* 56 36 */}
            <div className='w-7 h-7 bg-PrevSongIcon bg-no-repeat bg-cover hover:cursor-pointer' onClick={() => prevSong()}></div>
            {videoState ? 
            <div className='w-11 h-11  bg-PauseIcon bg-no-repeat bg-cover hover:cursor-pointer' onClick = {() => setVideoState(!videoState)}></div>
            : <div className='w-11 h-11  bg-PlayIcon bg-no-repeat bg-cover hover:cursor-pointer' onClick = {() => setVideoState(!videoState)}></div>
            }
            <div className='w-7 h-7 bg-NexstSongIcon bg-no-repeat bg-cover hover:cursor-pointer' onClick = {() => nextSong()}></div>
        </div>
        <div className='w-[600px]'>
          <div className='flex justify-between w-full text-white mb-[-8px] text-sm'>
            <div>{currentDuration}</div>
            <div>{totalLength}</div>
          </div>
          <input 
          type = "range" 
          min = "0" 
          max = "1000" 
          className='w-full h-[6px] bg-white rounded-full' 
          id = "miniPlayerInput"
          ref = {seekBar}
          onChange = {e => changeProgress(e.target.value)}
          style = {{width : "100%"}}
          />
        </div>
    </div>
  )
}

export default MiniPlayerNav