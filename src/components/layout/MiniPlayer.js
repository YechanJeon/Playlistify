import React  from 'react'
import MiniPlayerNav from '../common/MiniPlayerNav'
import { currentSongSelector ,miniPlayerStateAtom} from '../../state/selector/searchPlaylist'
import {useRecoilValue , useRecoilState} from "recoil"
import {useNavigate} from "react-router-dom"

function MiniPlayer() {
  const [miniplayerHide, setMiniplyaerHide] = useRecoilState(miniPlayerStateAtom)

  const currentSong = useRecoilValue(currentSongSelector)
  const navigate = useNavigate()
  return (

    <div className='flex flex-col items-center'>
      <div className={miniplayerHide ? 'miniPlayerBG absolute bottom-36 rounded-t-lg cursor-pointer' : 'miniPlayerBG absolute bottom-8 rounded-lg cursor-pointer'} onClick = {() => setMiniplyaerHide(!miniplayerHide)}>
        <div className= {miniplayerHide ? 'bg-HideIcon w-14 h-6 bg-contain bg-no-repeat bg-center' : 'bg-ShowIcon w-14 h-6 bg-contain bg-no-repeat bg-center'}></div>
      </div>
      {miniplayerHide ? (<div className='w-[95vw] h-28 absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full flex items-center miniPlayerBG justify-center'>
          <div className='flex items-center absolute left-2'>
              <div className=' w-24 h-24 bg-bgGray rounded-full hover:cursor-pointer hover:underline hover:underline-offset-auto' onClick = {currentSong ? () => navigate("/play") : ""}>
                {
                  currentSong ? 
                  <img className='w-full h-full rounded-full' src = {currentSong.album.image} alt = "" ></img> 
                  : ""
                }
                  
              </div>
              <div className='ml-6 align-center'>
                  <div className=' text-xl font-medium text-white hover:cursor-pointer hover:underline hover:underline-offset-auto whitespace-nowrap w-96 h-7 text-ellipsis overflow-hidden' onClick = {currentSong ? () => navigate("/play") : ""}>{currentSong ? currentSong.title : "곡을 재생해주세요."}</div>
                  <div className=' text-base font-light text-white'>{currentSong ? currentSong.artists : "곡을 재생해주세요."}</div>
              </div>
          </div>
          {
            currentSong ? (<MiniPlayerNav/>) :"" 
          }
      </div>) : ""}
    </div>
  )
}

export default MiniPlayer