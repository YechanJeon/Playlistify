import React from 'react'
import SearchResultEle from "../common/SearchResultEle"

import {useRecoilValue} from 'recoil'
import { getPlaylists } from '../../state/selector/searchPlaylist'

function SearchResult() {
  const playlist = useRecoilValue(getPlaylists)

  return (
    <div className='grid mx-5 gap-x-3 gap-y-5 grid-col-6 result6fix:w-[1764px] result6:grid-cols-6 result5fix:w-[1518px] result5fix:grid-cols-5 result4fix:w-[1176px] result4fix:grid-cols-4 result6: max-w-[1764px] result5:max-w-[1518px] result5:grid-cols-5 result4:max-w-[1176px] result4:grid-cols-4'>
      {playlist.map((e)=> <SearchResultEle name = {e.name} image = {e.images[0].url} key = {e.id} id = {e.id}/>)}
    </div>
  )
}

export default SearchResult