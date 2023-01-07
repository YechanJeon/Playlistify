import React , {useEffect} from 'react'
import PlaylistEle from '../common/PlaylistEle'
import {getPlaylistSongs,currentSongNum} from "../../state/selector/searchPlaylist"
import {useRecoilValue} from "recoil"

function Playlist({changePlaybackState}) {
  // const [songs , setSongs] = useState([])
  const currentSong = useRecoilValue(currentSongNum)
  const songs = useRecoilValue(getPlaylistSongs)
  
  useEffect(()=>{
    console.log(songs)
    console.log(currentSong)
  })


  return (
    <div className='w-[400px] h-screen px-4 absolute top-0 right-0 z-10 flex flex-col' style = {{background : "rgba(0,0,0,0.4)"}}>
          <div className='flex mt-5 justify-between items-center ' >
            <div className=' text-4xl text-white font-medium'>재생대기</div>
            <div className='bg-XIcon w-8 h-8 bg-cover bg-no-repeat hover:cursor-pointer' onClick={changePlaybackState}></div>
          </div>
          <div className='my-3 h-full overflow-y-scroll scrollbarRemove'>
            {songs.map((song , index) => {
              if(index >= currentSong){
                return (<PlaylistEle title = {song.title} image = {song.album.image} artist = {song.artists} id = {index}/>)
              }else{
                return(<></>)
              }
            })}
          </div>
      </div>
  )
}

export default Playlist