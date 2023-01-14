import React from 'react'
import MiniPlayerNav from '../common/MiniPlayerNav'
import { currentSongSelector } from '../../state/selector/searchPlaylist'
import {useRecoilValue} from "recoil"
import {useNavigate} from "react-router-dom"

function MiniPlayer() {
  const currentSong = useRecoilValue(currentSongSelector)
  const navigate = useNavigate()
  return (
    <div className='w-screen h-28 absolute bottom-0 flex items-center miniPlayerBG justify-center'>
        <div className='flex items-center absolute left-3'>
            <div className=' w-20 h-20 bg-slate-500 hover:cursor-pointer hover:underline hover:underline-offset-auto' onClick = {() => navigate("/play")}>
              {
                currentSong ? 
                <img className='w-full h-full' src = {currentSong.album.image} alt = ""></img> 
                : ""
              }
                
            </div>
            <div className='ml-6 align-center'>
                <div className=' text-xl font-medium text-white hover:cursor-pointer hover:underline hover:underline-offset-auto' onClick = {() => navigate("/play")}>{currentSong ? currentSong.title : "곡을 재생해주세요."}</div>
                <div className=' text-base font-light text-white'>{currentSong ? currentSong.artists : "곡을 재생해주세요."}</div>
            </div>
        </div>
        <MiniPlayerNav/>
    </div>
  )
}

export default MiniPlayer