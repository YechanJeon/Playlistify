import {atom , selector} from "recoil"
import spotifyToken from "../selector/spotifyToken"
import urls from "../atoms/urls"
import axios from "axios"


const playlistSearchParam = atom({
    key : "playlistSearchParam",
    default : ""
})

const playlistId = atom({
    key : "playlistID",
    default : ""
})

const currentSongNum = atom({
    key : "currentSong",
    default : 0
})

const videoProgressAtom = atom({
    key : "videoProgressAtom",
    default : 0
})

const videoStateAtom = atom({
    key : "videoState",
    default : false
})


const totalLengthAtom = atom({
    key : "videoTotalLength",
    default : "0:00"
})

const currentDurationAtom = atom({
    key : "currentDuration", 
    default : "0:00"
})

const videoProgressBarAtom = atom({
    key : "videoProgressBarAtom",
    default : -1
})



const getPlaylists = selector({
    key : "getPlaylists",
    get : async ({get}) => {
        const {spotifyApi} = get(urls)
        const token = get(spotifyToken)
        const keyword = get(playlistSearchParam)
        if(keyword !== ""){
            return (await axios.get(`${spotifyApi}search?q=${keyword}&type=playlist`,{
                headers : {
                  Authorization :`Bearer ${token}`
                }
              })).data.playlists.items
        }
    }
})

const getPlaylistSongs = selector({
    key : "playlinstSongs",
    get : async ({get}) => {
        
        const id = get(playlistId)
        if(id !== ""){ 
            return (await axios.get(`http://localhost:8081/search/tracks/${id}`)).data
        }else{
            return false
        }

    }
})

const currentSongSelector = selector({
    key : "currentSongSelector" ,
    get : ({get}) => {
        const currentSongNums = get(currentSongNum)
        const playlistSongs = get(getPlaylistSongs)
        if(playlistSongs){
            return playlistSongs[currentSongNums]
        }else{
            return false
        }
    }
})

export {playlistSearchParam , getPlaylists , playlistId , currentSongSelector , getPlaylistSongs , currentSongNum , videoStateAtom , videoProgressAtom , videoProgressBarAtom , totalLengthAtom,currentDurationAtom}
