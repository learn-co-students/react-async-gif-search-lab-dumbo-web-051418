import React from 'react'

export default class GifList extends React.Component {

  renderGifs = () => {
    return (
      this.props.gifs.map(gif => {
        return <li key={gif.id}><img src={gif.images.fixed_height.url} /></li>
      })
    )
  }

  render() {

    return (
      <div className="GifList">
        <ul className="list-of-gifs">
          {this.renderGifs()}
        </ul>
      </div>
    )
  }
}
