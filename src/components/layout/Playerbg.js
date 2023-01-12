import React, {useRef , useEffect}from 'react'
import ReactPlayer from "react-player"
import { videoStateAtom , videoProgressBarAtom} from '../../state/selector/searchPlaylist'

import {useRecoilValue , useSetRecoilState , useRecoilState} from "recoil"
import { getPlaylistSongs , currentSongNum , videoProgressAtom} from '../../state/selector/searchPlaylist'

function Playerbg() {

  const video = useRef()
  const [currentSong , setCurrentSong] = useRecoilState(currentSongNum)
  const songs = useRecoilValue(getPlaylistSongs)[currentSong]
  const videoState = useRecoilValue(videoStateAtom)
  const videoProgressBarNewVal = useRecoilValue(videoProgressBarAtom)

  const setVideoProgress = useSetRecoilState(videoProgressAtom)


  const changeProgress = (e) => {
    setVideoProgress(e.played)
  }

  useEffect(() => {
    video.current.seekTo(videoProgressBarNewVal)
  }, [videoProgressBarNewVal])


  return (
    <div className='bg-[#ffffff] w-screen h-screen absolute brightness-75 overflow-hidden'>
        <img src = {songs.album.image} alt = "" className='w-full h-full object-cover' />
        <div className='w-full h-full absolute top-0 backdrop-blur-2xl'></div>
      <ReactPlayer 
      url = {`https://youtu.be/${songs.id}`} 
      playing = {videoState} 
      ref = {video} 
      onProgress = {e=> changeProgress(e)} 
      id = "videoPlayer"
      onEnded = {() => setCurrentSong(currentSong+1)}
      />

        
    </div>
  )
}

export default Playerbg