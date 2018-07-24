import React from 'react'

function GifSearch(props){
  return (
    <form onSubmit={props.onSubmit}>
      <input type="text" placeholder="Type your search" />
      <input type="submit" value="Search"/>
    </form>
  )
}

export default GifSearch
