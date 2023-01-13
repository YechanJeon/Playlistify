import React from 'react'
import MiniPlayerNav from '../common/MiniPlayerNav'
import { currentSongSelector } from '../../state/selector/searchPlaylist'
import {useRecoilValue} from "recoil"

function MiniPlayer() {
  const currentSong = useRecoilValue(currentSongSelector)

  return (
    <div className='w-screen h-28 absolute bottom-0 flex items-center miniPlayerBG justify-center'>
        <div className='flex items-center absolute left-3'>
            <div className=' w-20 h-20 bg-slate-500'>
              {
                currentSong ? 
                <img className='w-full h-full' src = "https://i.scdn.co/image/ab67706c0000da846742052d7ed7429eec69e8db" alt = ""></img> 
                : ""
              }
                
            </div>
            <div className='ml-6 align-center'>
                <div className=' text-xl font-medium text-white'>{currentSong ? "currentSong 값 존재" : "곡을 재생해주세요."}</div>
                <div className=' text-base font-light text-white'>{currentSong ? "currentSong 값 존재" : "곡을 재생해주세요."}</div>
            </div>
        </div>
        <MiniPlayerNav/>
    </div>
  )
}

export default MiniPlayer