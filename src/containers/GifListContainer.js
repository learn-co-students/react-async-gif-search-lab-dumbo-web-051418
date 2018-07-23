import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: []
    }
  }

    gifSearch = (searchterm) => {
      this.fetchData(searchterm).then(data => {
        const threegifs = data.data.slice(0,3)
        this.setState({
          gifs: threegifs
        }, () => console.log(this.state.gifs))
      })
    }

    fetchData = (searchterm) => {
      return fetch(`http://api.giphy.com/v1/gifs/search?q=${searchterm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
    }

    // renderGifs = () => {
    //   return this.state.gifs.map((gif) => {
    //     return (<li><img src={gif.url}/></li>)
    //   })
    // }

    render() {
      return(
        <div>
          <GifSearch gifSearch = {this.gifSearch}/>
          <GifList data={this.state.gifs}/>
        </div>
      )
    }
}

export default GifListContainer;
