import {atom} from "recoil"

const urls = atom({
    key : "urls",
    default : {
        spotifyVerify : "https://accounts.spotify.com/api/token",
        spotifyApi : "https://api.spotify.com/v1/"
    }
})

export default urls