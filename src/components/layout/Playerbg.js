import React, {Suspense}from 'react'

import {useRecoilValue} from "recoil"
import { currentSongSelector} from '../../state/selector/searchPlaylist'


import VideoPlayer from '../common/VideoPlayer'

function Playerbg() {


  const song = useRecoilValue(currentSongSelector)






  return (
    <div className='bg-[#ffffff] w-screen h-screen absolute brightness-75 overflow-hidden'>
      {song ? <img src = {song.album.image} alt = "" className='w-full h-full object-cover' /> : ""}
        <div className='w-full h-full absolute top-0 backdrop-blur-2xl'></div>
      {/* <Suspense>
      <VideoPlayer/>
      </Suspense> */}
        
    </div>
  )
}

export default Playerbg