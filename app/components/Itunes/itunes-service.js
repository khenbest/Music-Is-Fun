import Song from "../../models/Song.js";


let _state = {
  songs: []
}

let _subscribers = {
  songs: []
}

function setState(prop, data) {
  //updates the information in the state
  _state[prop] = data
  //after updating a property in the state, then envoke all the functions that are subscribed to that property
  _subscribers[prop].forEach(fn => fn())
}

//DO NOT MODIFY
class ItunesService {
  get Songs() {
    return _state.songs
  }

  getMusicByArtist(artist) {
    var url = 'https://itunes.apple.com/search?callback=?&term=' + artist;
    // @ts-ignore
    $.getJSON(url)
      .then(res => {
        let results = res.results.map(s => new Song(s))
        //results is an array of song instances
        setState('songs', results)
      })
      .catch(err => console.log(err))
  }

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }
}



export default ItunesService