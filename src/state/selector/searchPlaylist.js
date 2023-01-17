import {atom , selector} from "recoil"
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

const playlistOffsetAtom = atom({
    key : "palylistOffset", 
    default : 0
})

const miniPlayerStateAtom = atom({
    key : "miniplayerState",
    default : false
})


const getPlaylists = selector({
    key : "getPlaylists",
    get : async ({get}) => {
        const offset = get(playlistOffsetAtom)
        const keyword = get(playlistSearchParam)
        // console.log((await axios.get(`http://localhost:8081/search/playlist/${keyword}?offset=${offset}`)).data)
        if(keyword !== ""){
            return (await axios.get(`http://localhost:8081/search/playlist/${keyword}?offset=${offset}`)).data
        }
    },
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

const getTrackId = selector({
    key : "getTrackId",
    get : async ({get}) => {
        const track = get(currentSongSelector)
        if(track){
            return (await axios.get(`http://localhost:8081/search/track?title=${track.title}&artist=${track.artists}`)).data
        }
    }
})

export {playlistSearchParam , getTrackId , getPlaylists , playlistId , miniPlayerStateAtom , currentSongSelector , getPlaylistSongs , currentSongNum , videoStateAtom , videoProgressAtom , videoProgressBarAtom , totalLengthAtom,currentDurationAtom , playlistOffsetAtom}
