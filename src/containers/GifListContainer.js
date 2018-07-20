import React, {Component} from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends Component {
  state = {
    images: '',
    searchInput: ''
  }

  getSearchInput = (searchInput) => {
    this.setState({searchInput: searchInput}, this.getImages)
  }

  getImages = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchInput}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(r => r.json())
      .then(data => {
        console.log(data)
        this.setState(
          {images: data.data.slice(0,3)}
        )
      })
  }

  render() {
    return <div className="gifListContainer">
      <GifSearch getSearchQuery={this.getSearchInput} />
      <GifList images={this.state.images} imageQuery={this.state.searchInput}/>
    </div>
  }
}

export default GifListContainer
