import React, {Component} from 'react'

class GifList extends Component {

  render() {
    if (this.props.images.length > 0) {
      return (
        <div className="gifList">
          <ul>
            { this.props.images.map((image)=><li><img src={image.images.original.url} alt=''/></li>) }
          </ul>
        </div>
      )
    } else {
      return <div className="gifList"></div>
    }
  }
}

export default GifList
