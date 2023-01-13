import React , {useRef, useEffect} from 'react'

import ReactPlayer from "react-player"
import {useRecoilValue, useSetRecoilState , useRecoilState} from "recoil"
import { currentSongSelector , videoProgressAtom, videoStateAtom , currentSongNum} from '../../state/selector/searchPlaylist';

function VideoPlayer() {
    const song = useRecoilValue(currentSongSelector)
    const videoState = useRecoilValue(videoStateAtom)
    const videoProgressBarNewVal = useRecoilValue(videoStateAtom)
    const setVideoProgress = useSetRecoilState(videoProgressAtom)
    const [currentSong, setCurrentSong] = useRecoilState(currentSongNum)

    const video = useRef()

    const changeProgress = (e) => {
        setVideoProgress(e.played)
    }

    useEffect(() => {
        video.current.seekTo(videoProgressBarNewVal)
    }, [videoProgressBarNewVal])
  return (
    <>
        <ReactPlayer 
        url = {song ? `https://youtu.be/${song.id}` : ""} 
        playing = {videoState} 
        ref = {video} 
        onProgress = {e=> changeProgress(e)} 
        id = "videoPlayer"
        onEnded = {() => setCurrentSong(currentSong+1)}
      />
    </>
  )
}

export default VideoPlayer