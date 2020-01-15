require('dotenv').config();
const genius = require('genius-lyrics');
const Genius = new genius.Client(process.env.GENIUS_API);

const KanyeWest = 72;

async function getArrayOfURLs() {
  let pageNumber = 1;
  let totalURLs = [];

  while(pageNumber < 76) {

    const allUrls = await Genius.findArtistSongsByID(KanyeWest, 20, pageNumber);
    
    const primeArrayOfKanye = allUrls.reduce((acc, song) => {
      if(song.primary_artist.id === KanyeWest) acc.push(song.url);
      return acc;
    }, []);

    totalURLs = [...totalURLs, ...primeArrayOfKanye];
    pageNumber++;
  }
  return totalURLs;
}

async function getLyricsFromURL(url) {
  const lyricsJSON = await Genius.getLyrics(url);
  return lyricsJSON.lyrics;
}

function allKanye() {
  return getArrayOfURLs()
    .then(urlArray => {
      return Promise.all(urlArray
        .map(url => getLyricsFromURL(url)));
    })
    .then(arrayOfLyrics => {
      return arrayOfLyrics.reduce((acc, song) => {
        return acc + song;
      }, '');
    });
}

module.exports = allKanye;
