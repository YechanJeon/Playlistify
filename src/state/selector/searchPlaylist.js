import {atom , selector} from "recoil"
import spotifyToken from "../selector/spotifyToken"
import urls from "../atoms/urls"
import axios from "axios"

const playlistSearchParam = atom({
    key : "playlistSearchParam",
    value : ""
})

const getPlaylists = selector({
    key : "getPlaylists",
    get : async ({get}) => {
        const {spotifyApi} = get(urls)
        const token = get(spotifyToken)
        const keyword = get(playlistSearchParam)
        if(keyword !== ""){
            console.log((await axios.get(`${spotifyApi}search?q=${keyword}&type=playlist`,{
                headers : {
                  Authorization :`Bearer ${token}`
                }
              })).data.playlists.items)
            return (await axios.get(`${spotifyApi}search?q=${keyword}&type=playlist`,{
                headers : {
                  Authorization :`Bearer ${token}`
                }
              })).data.playlists.items
        }
    }
})

export {playlistSearchParam , getPlaylists}
