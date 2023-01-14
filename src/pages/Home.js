import React from 'react'
import SearchInput from '../components/common/SearchInput'
import logo from "../logo_full.svg"

function Home() {
  return (
    <div className='w-screen h-screen bg-bgGray'>
        {/* <div className='bg-logoFull w-[462px] h-[118px] mb-12 bg-cover'></div> */}
        <div className='flex flex-col items-center pt-[300px]'>
          <div className='w-[350px] mb-14'>
            <img src={logo} alt = "" className='w-full'></img>
          </div>
          <SearchInput/>
        </div>
    </div>
  )
}

export default Home