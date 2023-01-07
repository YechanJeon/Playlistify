import React from 'react'
import {useSetRecoilState} from 'recoil'
import { currentSongNum } from '../../state/selector/searchPlaylist'


function PlaylistEle({title , image , artist , id}) {
  const setCurrentSong = useSetRecoilState(currentSongNum)
  const changeSong = () => [
    setCurrentSong(id)
  ]
  return (
    <div className='flex mt-2 hover:cursor-pointer' onClick={changeSong}>
      <div className='w-[60px] h-[60px] mr-3'>
        <img src = {image} alt = ""></img>
      </div>
      <div className='flex flex-col justify-center'>
        <div className=' text-xl text-white font-medium'>{title}</div>
        <div className=' text-xs text-white'>{artist}</div>
      </div>
    </div>
  )
}

export default PlaylistEle