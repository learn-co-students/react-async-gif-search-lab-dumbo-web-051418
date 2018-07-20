import React from 'react'

const GifSearch = (props) => {


    return (

      <input value={props.query} onChange={(e) => props.handleChange(e.target.value)}/>

    )

}

export default GifSearch
