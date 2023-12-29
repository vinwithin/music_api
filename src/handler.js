const SpotifyWebApi = require('spotify-web-api-node');


// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '0b64a618435f44879e6ecc6fa0f4d375',
  clientSecret: '72d873c9294448a7808739a80c011cd7',
  redirectUri: 'http://localhost:3000/callback'
});
const getMusic = async(request, h) => {
  //const response = request.response;
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
    ], 'some-state-of-my-choice')
   return authorizeUrl;
}
module.exports = getMusic;