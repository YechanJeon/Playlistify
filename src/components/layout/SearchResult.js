import React, { useEffect , useState} from 'react'
import SearchResultEle from "../common/SearchResultEle"

import urlsAtom from '../../state/atoms/urls'
import {useRecoilValue} from 'recoil'

import {useParams} from "react-router-dom"

import axios from "axios"

import spotifyToken from "../../state/selector/spotifyToken"

function SearchResult() {
  const {spotifyApi} = useRecoilValue(urlsAtom)
  const {keyword} = useParams()
  const [playlist , setPlaylist] = useState([])

  const token = useRecoilValue(spotifyToken)
  useEffect(()=>{

    const getPlaylist = async () => {
        const playlistData = (await axios.get(`${spotifyApi}search?q=${keyword}&type=playlist`,{
        headers : {
          Authorization :`Bearer ${token}`
        }
      })).data.playlists.items

      const searchedPlaylist = []

      playlistData.map(e => searchedPlaylist.push({id : e.id , name : e.name, image : e.images[0].url}))

      setPlaylist([...searchedPlaylist])
    }
    getPlaylist()
  }, [keyword])
  
  return (
    <div className='grid mx-5 gap-x-3 gap-y-5 grid-col-6 result6fix:w-[1764px] result6:grid-cols-6 result5fix:w-[1518px] result5fix:grid-cols-5 result4fix:w-[1176px] result4fix:grid-cols-4 result6: max-w-[1764px] result5:max-w-[1518px] result5:grid-cols-5 result4:max-w-[1176px] result4:grid-cols-4'>
      {playlist.map((e)=> <SearchResultEle name = {e.name} image = {e.image} key = {e.id} />)}
    </div>
  )
}

export default SearchResult