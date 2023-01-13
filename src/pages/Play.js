import React from 'react'
import Player from '../components/layout/Player'
import Playerbg from '../components/layout/Playerbg'
import PlayerHeader from '../components/layout/PlayerHeader'

// import {useSetRecoilState , useRecoilValue} from "recoil"
// import {currentSongNum ,videoStateAtom , videoProgressAtom , videoProgressBarAtom , currentSongSelector} from "../state/selector/searchPlaylist"

function Play() {
    return (
    <>
      <Playerbg/>
      <PlayerHeader/>
      <Player/>

    </>
  )
}

export default Play