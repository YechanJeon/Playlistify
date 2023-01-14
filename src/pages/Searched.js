import React , {Suspense , useEffect} from 'react'
import SearchInput from '../components/common/SearchInput'
import SearchResult from '../components/layout/SearchResult'

import { useParams , useNavigate} from "react-router-dom";

import {playlistSearchParam} from "../state/selector/searchPlaylist"
import {useSetRecoilState} from "recoil"

function Searched() {
  const {keyword} = useParams()
  const navigate = useNavigate()
  const setPlaylistSearchParam = useSetRecoilState(playlistSearchParam)
  useEffect(() => {
    setPlaylistSearchParam(keyword)
  })
  return (
      <div className='bg-bgGray w-screen h-screen flex flex-col items-center overflow-y-scroll pb-32'>
        <div className='mt-[30px] mb-[52px] flex'>
        <div
        className='w-12 h-12 bg-logo bg-cover bg-no-repeat mr-2 hover:cursor-pointer'
        onClick={() => navigate("/")}
        />
        <SearchInput/>
        </div>
        <Suspense>
          <SearchResult/>
        </Suspense>
      </div>
  )
}

export default Searched