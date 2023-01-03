import React from 'react'
import SearchResultEle from "../common/SearchResultEle"

function SearchResult() {
  return (
    <div className='flex mx-4 result6fix:w-[1764px] result5fix:w-[1518px] result4fix:w-[1176px] result6: max-w-[1764px] result5:max-w-[1518px] result4:max-w-[1176px]'>
      <SearchResultEle />
      <SearchResultEle />
      <SearchResultEle />
      <SearchResultEle />
      <SearchResultEle />
      <SearchResultEle />
    </div>
  )
}

export default SearchResult