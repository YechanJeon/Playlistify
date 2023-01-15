import React from 'react'
import SearchResultEle from "../common/SearchResultEle"

import {useState , useEffect} from "react"
import {useRecoilValueLoadable , useRecoilState} from 'recoil'
import { getPlaylists , playlistOffsetAtom , playlistSearchParam} from '../../state/selector/searchPlaylist'
 
function SearchResult() {
  const [playlist , setPlaylist] = useState([])
  const [playlistOffset , setPlaylistOffset] = useRecoilState(playlistOffsetAtom)
  const playlistSearchKeyword = useRecoilValueLoadable(playlistSearchParam)

  // getPlaylist
  const loadedPlaylist = useRecoilValueLoadable(getPlaylists)
  // const playlistLoadState = useRecoilValueLoadable(getPlaylists)
  useEffect(() => {
      setPlaylistOffset(0)
      setPlaylist([])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[playlistSearchKeyword])

  useEffect(() => {
    console.log(2)
    // console.log(loadedPlaylist[0])
    if(loadedPlaylist.state==="hasValue"){
    if(loadedPlaylist.contents===[]){
    }else{
      setPlaylist(playlist.concat(loadedPlaylist.contents))
    }}
    // return () => {
    //   setPlaylist([])
    // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[loadedPlaylist])

  


  const searchedScroll = (e) => {
    if(e.target.scrollTop === e.target.scrollHeight-860){
      setPlaylistOffset(playlistOffset+1)
    }
  }

  return (
    <div onScroll={(e) => searchedScroll(e)}
    className=' overflow-y-scroll grid mx-5 gap-x-3 gap-y-5 grid-col-6 result6fix:w-[1764px] result6:grid-cols-6 result5fix:w-[1518px] result5fix:grid-cols-5 result4fix:w-[1176px] result4fix:grid-cols-4 result6: max-w-[1764px] result5:max-w-[1518px] result5:grid-cols-5 result4:max-w-[1176px] result4:grid-cols-4'>
      {playlist.map((e , index)=> <SearchResultEle name = {e.name} image = {e.image} key = {index} id = {e.id} owner = {e.owner}/>)}
    </div>
  )
}

export default SearchResult