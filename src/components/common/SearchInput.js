import React from 'react'
import {useState , useEffect , useRef} from "react"

import {useNavigate , useParams} from "react-router-dom"




function SearchInput() {
  const currentParam = useParams().keyword
  const searchInput = useRef()

  
  const [searchContent, setSearchContent] = useState("")

  useEffect(() => {
    if(currentParam){
      setSearchContent(currentParam)
    }
  }, [currentParam])

  const navigate = useNavigate();

  const search = (e) => {
    if(e.keyCode===13&&searchContent!==""){
      navigate(`/search/${searchContent}`)
    }
  }
  
  return (

      <div className='flex w-[700px] h-11 bg-white pl-5 pr-[2px] py-2 justify-between items-center rounded-full'>
          <input 
          className='w-full h-full outline-0 text-base' 
          onInput = {e => setSearchContent(e.target.value)} 
          value = {searchContent}
          ref = {searchInput}
          onKeyDown = {(e) => search(e)}
          ></input>
          <button className='w-10 h-10 rounded-full bg-BlSearchIcon bg-no-repeat bg-center'
          onClick = {() => navigate(`/search/${searchContent}`)}
          ></button>
      </div>

  )
}

export default SearchInput