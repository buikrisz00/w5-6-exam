let incomingData = {
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "duration": "2h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.3
  }

const getTheFirstGenre = myMovie => {
    return myMovie.genre[0];
}

console.log(getTheFirstGenre(incomingData));