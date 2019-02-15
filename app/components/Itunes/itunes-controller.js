import ItunesService from "./itunes-service.js";
//Private
const itunesService = new ItunesService()

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  let songs = itunesService.Songs
  let template = ''
  songs.forEach(song => {
    template += `
    <div class="d-flex row">
    <div class"song-card-thing">
    <h1>${song.title}</h1>
    <h2.${song.artist}</h2>
    <h4>${song.collection}</h4>
    <h6>${song.price}</h6>
    <img class="song-img" src=${song.albumArt}></img>
    <audio controls src=${song.preview}></audio>
    </div>
    </div>
    `
  });
  document.querySelector('#songs-list').innerHTML = template

  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(itunesService.Songs)
  //step 2 finish this draw function
}


//PUBLIC
class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    //step 1 add the draw function to the songs in the subscribers
    itunesService.addSubscriber('songs', drawSongs)
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController