const SpotifyWebApi = require('spotify-web-api-node');


// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '0b64a618435f44879e6ecc6fa0f4d375',
  clientSecret: '72d873c9294448a7808739a80c011cd7',
  redirectUri: 'http://localhost:3000/callback'
});
const token = "BQAKRo93STRiVbtXpAjInGngB3s93-aaEFAsX1uDVk-v3BKsdKEXK4bO8PuSBRqp2ZjbVWhhJx4yvXHImLnxEjaO-q-TGrrl_CA79MIYr6O1wgCQTfufSspKW0yiyVsLf2RcXwwYP7KEBIjN-NipZJvEdiqQ2wF0wDR9cK9Xi5MlidnbOA6eAA4fP9qMCqORtg1WVlUgU48277M3XWTh-f8GyXfB66-4hmkhQw6Z96WIM6Za-VCPTnYy5W29n61vdBEi5Th4-SimPsA6qZZgGXzrfLNZu0kEtfAjIvGcncYFPmlbTHtbvRxdf1yiqLGY7sR5JjuSvqGedSrlc00i"
const getMusic = async(request, h) => {
  
    const authorizeUrl = spotifyApi.createAuthorizeURL([
      "ugc-image-upload",
      "user-read-recently-played",
      "user-read-playback-state",
      "user-top-read",
      "app-remote-control",
      "playlist-modify-public",
      "user-modify-playback-state",
      "playlist-modify-private",
      "user-follow-modify",
      "user-read-currently-playing",
      "user-follow-read",
      "user-library-modify",
      "user-read-playback-position",
      "playlist-read-private",
      "user-read-email",
      "user-read-private",
      "user-library-read",
      "playlist-read-collaborative",
      "streaming"
    ]);
    return h.redirect(authorizeUrl)

   
}
// const giveAccess = async(request, h) => {

//   spotifyApi.authorizationCodeGrant(request.query.code).then((data) => {
//     console.log(data);
//   })
// }
spotifyApi.setAccessToken(token)
const getAlbum = () => {
  const data = spotifyApi.getUserPlaylists('thelinmichael')
  for (let i = 0; i < data.items.length; i++){
    console.log(data.items[i])
  }
}
getAlbum()
module.exports = getMusic;