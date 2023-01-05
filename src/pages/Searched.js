import React , {Suspense} from 'react'
import SearchInput from '../components/common/SearchInput'
import SearchResult from '../components/layout/SearchResult'

import { useParams } from "react-router-dom";

function Searched() {
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