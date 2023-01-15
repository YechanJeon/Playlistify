import React from 'react'
import SearchResultEle from "../common/SearchResultEle"

import {useState , useEffect} from "react"
import {useRecoilValueLoadable , useRecoilState} from 'recoil'
import { getPlaylists , playlistOffsetAtom } from '../../state/selector/searchPlaylist'
 
function SearchResult() {
  const [playlist , setPlaylist] = useState([])
  const [playlistOffset , setPlaylistOffset] = useRecoilState(playlistOffsetAtom)

  // getPlaylist
  const loadedPlaylist = useRecoilValueLoadable(getPlaylists)
  // const playlistLoadState = useRecoilValueLoadable(getPlaylists)

  useEffect(() => {
    // console.log(loadedPlaylist[0])
    if(loadedPlaylist.state==="hasValue")
    setPlaylist(playlist.concat(loadedPlaylist.contents))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[loadedPlaylist,playlistOffset])

  useEffect(() => {
    console.log(playlist)
  }, [playlist])

  const searchedScroll = (e) => {
    if(e.target.scrollTop === e.target.scrollHeight-860){
      setPlaylistOffset(playlistOffset+1)
    }
  }

  return (
    <div onScroll={(e) => searchedScroll(e)}
    className=' overflow-y-scroll grid mx-5 gap-x-3 gap-y-5 grid-col-6 result6fix:w-[1764px] result6:grid-cols-6 result5fix:w-[1518px] result5fix:grid-cols-5 result4fix:w-[1176px] result4fix:grid-cols-4 result6: max-w-[1764px] result5:max-w-[1518px] result5:grid-cols-5 result4:max-w-[1176px] result4:grid-cols-4'>
      {playlist.map((e)=> <SearchResultEle name = {e.name} image = {e.image} key = {e.id} id = {e.id} owner = {e.id}/>)}
    </div>
  )
}

export default SearchResult