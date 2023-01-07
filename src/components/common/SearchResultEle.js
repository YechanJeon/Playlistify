// /* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {useSetRecoilState} from "recoil"
import {playlistId} from "../../state/selector/searchPlaylist"

import {useNavigate} from "react-router-dom"

function SearchResultEle({name , image, id , owner}) {
  const navigate = useNavigate()
  const setPlaylistId = useSetRecoilState(playlistId)
  const playPlaylist = () => {
    setPlaylistId(id)
    navigate("/play")
  } 

  return (
    <div className=' bg-eleGray rounded-xl hover:bg-selectedGray hover:cursor-pointer ' onClick = {playPlaylist}>
      <div className='aspect-square	bg-green-200 mx-[15px] mt-[15px]'>
          {/* w-full pb-[100%] h-0  */}
          <img src = {image} className = "w-full h-full object-cover" alt = ""></img>
      </div>
      <div className='mt-[10px] mx-[15px] mb-[30px]'>
        <div className=' text-2xl font-medium max-h-[64px] searchResultEleTextoverflow text-white min-h-[32px] hover:underline hover:underline-offset-auto'>{name}</div>  {/* 플레이리스트 이름 */}
        <div className='text-[15px] font-light leading-tight mt-1 text-white'>Made By <span className='font-normal'>{owner}</span></div>{/* 포함된곡 */}
      </div> 
    </div>
  )
}


export default SearchResultEle