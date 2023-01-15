import React from 'react'
import { Outlet } from 'react-router-dom'
import MiniPlayer from '../components/layout/MiniPlayer'
import { currentSongSelector } from '../state/selector/searchPlaylist'
import {useRecoilValue} from "recoil"

function MainPage() {
  const currentsong = useRecoilValue(currentSongSelector)
  return (
    <div>
        <Outlet/>
        {currentsong ? <MiniPlayer/> : ""}
        
    </div> 
  )
}

export default MainPage