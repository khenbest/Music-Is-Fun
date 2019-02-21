import ItunesService from "./itunes-service.js";
//Private
const itunesService = new ItunesService()

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  let songs = itunesService.Songs
  let template = ''
  songs.forEach(song => {
    template +=
      `<div class="col-12">
      <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-12 col-lg-4 bg-dark">
            <img class="song-img" src=${song.albumArt}></img>
        </div>
            <div class="col-12 col-lg-8 bg-dark">
              <div class="card-body">
              <h2 class="card-title">${song.title}</h2>
              <h3 class="card-text">${song.artist}</h3>
              <h4>${song.collection}</h4>
              <h6>${song.price}</h6>
              <audio controls src=${song.preview}></audio>
              </div>
            </div>
          </div>
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