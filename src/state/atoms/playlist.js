import {atom} from "recoil"

const playlist = atom({
    key : "playlist",
    default : []
}) 

export default playlist

// name , include song(3) , key : id