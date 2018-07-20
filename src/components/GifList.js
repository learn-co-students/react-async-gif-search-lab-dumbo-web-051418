import React from 'react'

const GifList = (props) => {

  const gifs =
    props.gifs.map((gif) => {
      return <img src={gif.images.original.url} key={gif.id} alt={gif.username}/>
    })


  return (
    <div>
      { gifs }
    </div>
  )
}

export default GifList
