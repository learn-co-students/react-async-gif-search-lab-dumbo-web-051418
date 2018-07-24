import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  state = {
    search: "america",
    gifs: []
  }

  getGifs = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`).then(res => res.json())
      .then(gifs => gifs.data)
        .then(list => {
          this.setState((prevState) => {
            return {gifs: list.splice(0, 3)}
          });
        })
  }

  componentDidMount(){
    this.getGifs();
  }

  onSubmit = (event) => {
    event.preventDefault();
    let searchTerm = event.target.children[0].value;

    this.setState((prevState) => {
      return {search: searchTerm}
    }, () => {
      this.getGifs();
    });
  }

  render(){
    return (
      <React.Fragment>
        <GifList gifs={this.state.gifs} />
        <GifSearch onSubmit={this.onSubmit} />
      </React.Fragment>
    );
  }
}
