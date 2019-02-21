export default class Song {
  constructor(song) {
    this.title = song.trackName
    //Change 250x250 if you want a larger image
    this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
    this.artist = song.artistName
    this.collection = song.collectionName
    this.price = song.collectionPrice
    this.preview = song.previewUrl
  }
  getSongs() {
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
  }
