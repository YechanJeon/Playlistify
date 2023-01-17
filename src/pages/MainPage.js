import React from 'react'
import { Outlet } from 'react-router-dom'
import MiniPlayer from '../components/layout/MiniPlayer'


function MainPage() {
  return (
    <div>
        <Outlet/>
        <MiniPlayer/>
        
    </div> 
  )
}

export default MainPage