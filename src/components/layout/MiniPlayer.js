import React  from 'react'
import MiniPlayerNav from '../common/MiniPlayerNav'
import { currentSongSelector } from '../../state/selector/searchPlaylist'
import {useRecoilValue} from "recoil"
import {useNavigate} from "react-router-dom"

function MiniPlayer() {
  const currentSong = useRecoilValue(currentSongSelector)
  const navigate = useNavigate()
  return (
    <div>
      <div className='w-3 h-3 bg-green-300'></div>
      <div className='w-[95vw] h-28 absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full flex items-center miniPlayerBG justify-center'>
          <div className='flex items-center absolute left-2'>
              <div className=' w-24 h-24 bg-slate-500 rounded-full hover:cursor-pointer hover:underline hover:underline-offset-auto' onClick = {() => navigate("/play")}>
                {
                  currentSong ? 
                  <img className='w-full h-full rounded-full' src = {currentSong.album.image} alt = "" ></img> 
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
    </div>
  )
}

export default MiniPlayer