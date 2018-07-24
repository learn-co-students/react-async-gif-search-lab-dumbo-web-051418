import React, { Component } from 'react'

export default class GifList extends Component {

  eachGif = () => {
    return this.props.gifs.map(gif => <li key={gif.id}>{ gif.title }</li>);
  }

  render(){
    return (
      <ul>
        {this.eachGif()}
      </ul>
    );
  }
}
