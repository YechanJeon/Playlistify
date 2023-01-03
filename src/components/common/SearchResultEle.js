import React from 'react'

function SearchResultEle() {
  return (
    <div className=' bg-slate-500 ml-2 rounded-xl'>
      <div className='aspect-square	bg-green-200 mx-[15px] mt-[15px]'></div>{/* 앨범커버 */}
      <div className='mt-[10px] mx-[15px] mb-[30px]'>
        <div className=' text-2xl font-bold'>DavidGuetta - Top Hits</div>  {/* 플레이리스트 이름 */}
        <div className='text-[15px]'>inclouded I’m good (blue), Crazy What can do, Don’t you worry</div>{/* 포함된곡 */}
      </div> 
    </div>
  )
}

export default SearchResultEle