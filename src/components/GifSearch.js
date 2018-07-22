import React from 'react'

export default class GifSearch extends React.Component {

  render() {

    return (
      <div className="GifSearch">
        <form className="searchForm" onSubmit={(e) => this.props.fetchGifs(e)}>
          <label>Enter a Search Term</label>
          <input type="text" value={this.props.userInput} onChange={(e) => this.props.changeUserInputState(e)}></input>
          <button>Find Gifs</button>
        </form>
      </div>
    )
  }
}
