import React , {useRef} from 'react'
import { videoProgressAtom,videoProgressBarAtom,videoStateAtom } from '../../state/selector/searchPlaylist'
import {useRecoilState} from "recoil"

function MiniPlayerNav() {
  const seekBar = useRef()
  const [videoState , setVideoState] = useRecoilState(videoStateAtom)

  const prevSong = () => {

  }
  const nextSong = () => {

  }
  return (
    <div className='flex flex-col items-center'>
        <div className='flex justify-between w-80 items-center'>
            {/* 56 36 */}
            <div className='w-7 h-7 bg-PrevSongIcon bg-no-repeat bg-cover hover:cursor-pointer' onClick={prevSong()}></div>
            {videoState ? 
            <div className='w-11 h-11  bg-PauseIcon bg-no-repeat bg-cover hover:cursor-pointer' onClick = {() => setVideoState(!videoState)}></div>
            : <div className='w-11 h-11  bg-PlayIcon bg-no-repeat bg-cover hover:cursor-pointer' onClick = {() => setVideoState(!videoState)}></div>
            }
            <div className='w-7 h-7 bg-NexstSongIcon bg-no-repeat bg-cover hover:cursor-pointer' onClick = {nextSong()}></div>
        </div>
        <input type = "range" min = "0" max = "1000" className='w-[700px] h-[6px] bg-white rounded-full mt-5' ref = {seekBar}/>
    </div>
  )
}

export default MiniPlayerNav