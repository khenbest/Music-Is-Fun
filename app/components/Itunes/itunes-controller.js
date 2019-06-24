import ItunesService from "./itunes-service.js";
//Private
const itunesService = new ItunesService()

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  let songs = itunesService.Songs
  let template = ''
  songs.forEach(s => {
    template += s.getSongs()
  })
  document.querySelector('#songs-list').innerHTML = template
}

//PUBLIC
class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    //step 1 add the draw function to the songs in the subscribers
    itunesService.addSubscriber('songs', drawSongs)
  }

  playSong(preview) {
    let audioTag = document.getElementById("song-audio")
    audioTag.setAttribute("src", preview)
    audioTag.play()
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