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
  return data
}
spotifyApi.getAlbum('5U4W9E5WsYb2jUQWePT8Xm')
  .then(function(data) {
    console.log('Album information', data.body);
  }, function(err) {
    console.error(err);
  });

// Get multiple albums
spotifyApi.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV'])
  .then(function(data) {
    console.log('Albums information', data.body);
  }, function(err) {
    console.error(err);
  });

// Get an artist
spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
  .then(function(data) {
    console.log('Artist information', data.body);
  }, function(err) {
    console.error(err);
  });

// Get multiple artists
spotifyApi.getArtists(['2hazSY4Ef3aB9ATXW7F5w3', '6J6yx1t3nwIDyPXk5xa7O8'])
  .then(function(data) {
    console.log('Artists information', data.body);
  }, function(err) {
    console.error(err);
  });

// Get albums by a certain artist
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  .then(function(data) {
    console.log('Artist albums', data.body);
  }, function(err) {
    console.error(err);
  });

// Search tracks whose name, album or artist contains 'Love'
spotifyApi.searchTracks('Love')
  .then(function(data) {
    console.log('Search by "Love"', data.body);
  }, function(err) {
    console.error(err);
  });

// Search artists whose name contains 'Love'
spotifyApi.searchArtists('Love')
  .then(function(data) {
    console.log('Search artists by "Love"', data.body);
  }, function(err) {
    console.error(err);
  });

// Search tracks whose artist's name contains 'Love'
spotifyApi.searchTracks('artist:Love')
  .then(function(data) {
    console.log('Search tracks by "Love" in the artist name', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Search tracks whose artist's name contains 'Kendrick Lamar', and track name contains 'Alright'
spotifyApi.searchTracks('track:Alright artist:Kendrick Lamar')
  .then(function(data) {
    console.log('Search tracks by "Alright" in the track name and "Kendrick Lamar" in the artist name', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });


// Search playlists whose name or description contains 'workout'
spotifyApi.searchPlaylists('workout')
  .then(function(data) {
    console.log('Found playlists are', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Get tracks in an album
spotifyApi.getAlbumTracks('41MnTivkwTO3UUJ8DrqEJJ', { limit : 5, offset : 1 })
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Get an artist's top tracks
spotifyApi.getArtistTopTracks('0oSGxfWSnnOXhD2fKuz2Gy', 'GB')
  .then(function(data) {
    console.log(data.body);
    }, function(err) {
    console.log('Something went wrong!', err);
  });
module.exports = {getMusic, getAlbum};