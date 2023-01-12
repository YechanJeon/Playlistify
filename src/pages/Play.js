import React, {useEffect} from 'react'
import Player from '../components/layout/Player'
import Playerbg from '../components/layout/Playerbg'
import PlayerHeader from '../components/layout/PlayerHeader'

import {useSetRecoilState} from "recoil"
import {currentSongNum ,videoStateAtom , videoProgressAtom , videoProgressBarAtom} from "../state/selector/searchPlaylist"

function Play() {
    const setVideoState = useSetRecoilState(videoStateAtom)
    const setCurrentSong = useSetRecoilState(currentSongNum)
    const setVideoProgress = useSetRecoilState(videoProgressAtom)
    const setVideoProgressBar = useSetRecoilState(videoProgressBarAtom)
    useEffect(()=>{
      return () => {
        setCurrentSong(0)
        setVideoState(false)
        setVideoProgress(0)
        setVideoProgressBar(0)
      }
    })
    return (
    <>
      <Playerbg/>
      <PlayerHeader/>
      <Player/>

    </>
  )
}

export default Play