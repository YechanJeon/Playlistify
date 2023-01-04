import React from 'react'
import {useState} from "react"

import axios from "axios"
import qs from 'qs'
import {Buffer} from "buffer"

import urlsAtom from "../../state/atoms/urls"
import playlistAtom from "../../state/atoms/playlist"

import { useRecoilValue , useRecoilState } from 'recoil'

import {useNavigate} from "react-router-dom"




function SearchInput() {
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENTID
  const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENTSECRET
  // recoil atom 으로
  const {spotifyVerify} = useRecoilValue(urlsAtom)
  const {spotifyApi} = useRecoilValue(urlsAtom)

  const [searchContent, setSearchContent] = useState("")
  const [playlist, setPlaylist] = useRecoilState(playlistAtom)

  const navigate = useNavigate();
  
  const search = async () =>{
    const token = (await axios.post(spotifyVerify, 
      qs.stringify({"grant_type":"client_credentials"}), 
      {headers : {
        'Authorization': `Basic ${(Buffer.from(`${clientId}:${clientSecret}`)).toString('base64')}`
      }})).data.access_token
    
  const playlistData = (await axios.get(`${spotifyApi}search?q=${searchContent}&type=playlist`,{
    headers : {
      Authorization : `Bearer ${token}`
    }
  })).data.playlists.items

  const searchedPlaylist = []

  playlistData.map(e => searchedPlaylist.push({id : e.id , name : e.name, image : e.images[0].url}))

  setPlaylist([...searchedPlaylist])

  navigate("/search")
  }
  return (
    <div className='flex w-[700px] h-11 bg-white pl-5 pr-[2px] py-2 justify-between items-center rounded-full'>
        <input 
        className='w-full h-full outline-0 text-base' 
        onInput = {e => setSearchContent(e.target.value)} 
        value = {searchContent}></input>
        <button className='w-10 h-10 rounded-full bg-BlSearchIcon bg-no-repeat bg-center hover:bg-slate-400 hover:bg-SearchIcon'
        onClick = {search}
        ></button>
    </div>
  )
}

export default SearchInput