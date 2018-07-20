


const getGifs = (query) => {
  const indexUrl = `http://api.giphy.com/v1/gifs/search?q=${query}&limit=20&api_key=dc6zaTOxFJmzC&rating=g`
  return fetch(indexUrl)
          .then(r => r.json())
}

export {
  getGifs
}
