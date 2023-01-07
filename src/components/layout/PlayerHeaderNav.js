import React from 'react'
import {useNavigate} from "react-router-dom" 

function PlayerHeaderNav({changePlaybackState}) {
  const navigate = useNavigate()

  return (
    <>
        <div className='w-10 h-10 bg-PrevPageIcon bg-no-repeat bg-cover hover:cursor-pointer' onClick = {() => navigate(-1)}></div>
        <div className='w-10 h-10 bg-ListIcon bg-no-repeat bg-cover hover:cursor-pointer' onClick = {changePlaybackState}></div>
    </>
  )
}

export default PlayerHeaderNav