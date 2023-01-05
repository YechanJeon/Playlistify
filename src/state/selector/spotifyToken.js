import urls from "../atoms/urls"

import {selector} from "recoil"
import axios from "axios"
import qs from "qs"
import {Buffer} from "buffer"

const clientId = process.env.REACT_APP_SPOTIFY_CLIENTID
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENTSECRET

const token = selector({
    key : "spotifyToken",
    get : async ({get}) => {
        const {spotifyVerify}  = get(urls)
        return (await axios.post(spotifyVerify, 
            qs.stringify({"grant_type":"client_credentials"}), 
            {headers : {
              'Authorization': `Basic ${(Buffer.from(`${clientId}:${clientSecret}`)).toString('base64')}`
            }})).data.access_token
    }
})

export default token