import React , {useRef, useEffect , useState} from 'react'

import ReactPlayer from "react-player"
import {useRecoilValue, useSetRecoilState , useRecoilState} from "recoil"
import {getTrackId, currentSongSelector , videoProgressAtom, videoStateAtom , currentSongNum , videoProgressBarAtom , totalLengthAtom , currentDurationAtom} from '../../state/selector/searchPlaylist';

function VideoPlayer() {
    const song = useRecoilValue(currentSongSelector)
    const [videoState , setVideoState] = useRecoilState(videoStateAtom)
    const [videoProgressBarNewVal, setVideoProgressBarNewVal] = useRecoilState(videoProgressBarAtom)
    const setVideoProgress = useSetRecoilState(videoProgressAtom)
    const [currentSong, setCurrentSong] = useRecoilState(currentSongNum)
    const setTotalLength = useSetRecoilState(totalLengthAtom)
    const setCurrentDuration = useSetRecoilState(currentDurationAtom)
    
    const [videoUrl , setVideoUrl] = useState ("")
    
    const video = useRef()
    const videoId = useRecoilValue(getTrackId)

    const changeProgress = (e) => {
        const currentTime  = Math.floor(video.current.getCurrentTime())
        setVideoProgress(e.played)
        if(currentTime >59){
            setCurrentDuration(`${Math.floor(currentTime/60)}:${currentTime%60<10 ?`0${currentTime%60}` : currentTime%60 }`)
        }else{
            setCurrentDuration(`0:${currentTime%60<10 ?`0${currentTime%60}` : currentTime%60 }`)
        }
    }
    const getVideoLength = () => {
        const durationSec = video.current.getDuration()-1
        if(durationSec>59){
            const duration  = `${Math.floor(durationSec/60)}:${durationSec%60<10 ?`0${durationSec%60}` : durationSec%60 }`
            setTotalLength(duration)
        }else{
            const duration = `0:${durationSec%60<10 ?`0${durationSec%60}` : durationSec%60 }`
            setTotalLength(duration)
        }
    }

    useEffect(() => {

        if(videoProgressBarNewVal !== -1){
            video.current.seekTo(videoProgressBarNewVal)  
        }
        setVideoProgressBarNewVal(-1)
    }, [setVideoProgressBarNewVal, videoProgressBarNewVal])




    useEffect(() => {
        const currentTime  = Math.floor(video.current.getCurrentTime())
        if(currentTime >59){
            setCurrentDuration(`${Math.floor(currentTime/60)}:${currentTime%60<10 ?`0${currentTime%60}`:currentTime%60 }`)
        }else{
            setCurrentDuration(`0:${currentTime%60<10 ?`0${currentTime%60}` : currentTime%60 }`)
        }
    } , [setCurrentDuration])


    useEffect(()=> {
        setVideoUrl(`https://youtu.be/${videoId}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[song])
  return (
      <>
      {videoState}
    {videoUrl}
        <ReactPlayer 
        url = {videoUrl} 
        playing = {videoState} 
        ref = {video} 
        onProgress = {e=> changeProgress(e)} 
        id = "videoPlayer"
        onEnded = {() => setCurrentSong(currentSong+1)}
        onReady = {() => getVideoLength()}
        onPause = { () => setVideoState(false)}
        onPlay = { () => setVideoState(true)}
      />
    </>
  )
}

export default VideoPlayer