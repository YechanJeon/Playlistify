/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

function SearchResultEle({name , image}) {
  return (
    <div className=' bg-slate-500 rounded-xl'>
      <div className='aspect-square	bg-green-200 mx-[15px] mt-[15px]'>
          {/* w-full pb-[100%] h-0  */}
          <img src = {image} className = "w-full h-full object-cover"></img>
      </div>
      <div className='mt-[10px] mx-[15px] mb-[30px]'>
        <div className=' text-2xl font-medium max-h-[64px] searchResultEleTextoverflow text-white'>{name}</div>  {/* 플레이리스트 이름 */}
        <div className='text-[15px] font-light leading-tight mt-1 text-white'>inclouded I’m good (blue), Crazy What can do, Don’t you worry</div>{/* 포함된곡 */}
      </div> 
    </div>
  )
}

export default SearchResultEle