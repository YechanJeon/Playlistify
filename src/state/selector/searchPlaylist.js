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
        const {spotifyApi} = get(urls)
        const token = get(spotifyToken)
        const id = get(playlistId)

        if(id !== ""){
            return (((await axios.get(`${spotifyApi}playlists/${id}/tracks`,{
                headers : {
                    Authorization :`Bearer ${token}`
                }
            })).data.items).map(ele => { 
                let song = {
                    title : ele.track.name , 
                    album : {
                        title : ele.track.album.name,
                        image : ele.track.album.images[0].url
                    },
                    artists : ele.track.artists[0].name
                }
                return song
            }))
        }

    }
})


export {playlistSearchParam , getPlaylists , playlistId , getPlaylistSongs , currentSongNum}
