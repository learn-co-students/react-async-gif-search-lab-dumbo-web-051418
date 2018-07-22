import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  state = {
    userInput: "",
    gifs: null
  }

  getThreeGifs = (gifs) => {
    return gifs.slice(0,3)
  }

  setNewGifs = (threeGifs) => {
    this.setState((prevState) => {
      return {
        gifs: threeGifs
      }
    }, (newState) => console.log(this.state.gifs))
  }

  resetForm = () => {
    this.setState((prevState) => {
      return {
        userInput: ""
      }
    }, () => console.log(this.state))
  }

  fetchGifs = (e) => {
    e.preventDefault()
    let url = "http://api.giphy.com/v1/gifs/search?q="
    const api_key = "&api_key=dc6zaTOxFJmzC&rating=g"
    fetch(url + this.state.userInput + api_key)
      .then(res => res.json())
      .then(rawData => this.getThreeGifs(rawData.data))
      .then(gifs => this.setNewGifs(gifs))
      .then(() => this.resetForm())
  }

  changeUserInputState = (e) => {
    e.persist()
    this.setState((prevState)=>{
      return {
        userInput: e.target.value
      }
    }, (newState) => console.log(this.state.userInput))
  }

  render() {
    return (
      <div className="GifListContainer">
        <GifSearch
          userInput={this.state.userInput}
          changeUserInputState={this.changeUserInputState}
          fetchGifs={this.fetchGifs}
        />
        { this.state.gifs === null ? null : <GifList gifs={this.state.gifs}/> }
      </div>
    )
  }
}
