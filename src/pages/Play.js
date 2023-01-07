import React , {useEffect} from 'react'
import Player from '../components/layout/Player'
import Playerbg from '../components/layout/Playerbg'
import PlayerHeader from '../components/layout/PlayerHeader'

import {useRecoilValue} from "recoil"
import { getPlaylistSongs} from '../state/selector/searchPlaylist'


function Play() {
  const songs = useRecoilValue(getPlaylistSongs)
  

  useEffect(() => {
    // console.log(asdf)
    if(songs){
      console.log(songs)
    }
    // console.log(currentSong)
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