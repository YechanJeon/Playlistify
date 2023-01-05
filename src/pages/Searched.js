import React , {Suspense , useEffect} from 'react'
import SearchInput from '../components/common/SearchInput'
import SearchResult from '../components/layout/SearchResult'

import { useParams } from "react-router-dom";

import {playlistSearchParam} from "../state/selector/searchPlaylist"
import {useSetRecoilState} from "recoil"

function Searched() {
  const {keyword} = useParams()
  const setPlaylistSearchParam = useSetRecoilState(playlistSearchParam)
  useEffect(() => {
    setPlaylistSearchParam(keyword)
  })
  return (
    <div className='bg-green-300 w-screen h-screen flex flex-col items-center overflow-y-scroll'>
      <div className='mt-[30px] mb-[52px]'><SearchInput/></div>
      <Suspense>
        <SearchResult/>
      </Suspense>
    </div>
  )
}

export default Searched