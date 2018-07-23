import React from 'react';

const GifList = (props) => {

  const gifs = props.data.map((gif) => {
      return <img src={gif.images.original.url} alt={gif.username} key={gif.id} />
    })

  return (
    <ul>
      {gifs}
    </ul>
)

}
export default GifList;
