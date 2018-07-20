import React, {Component} from 'react'

class GifSearch extends Component {

  submitHandler = (e) => {
    e.preventDefault()
    const searchInput = e.target.searchInput.value
    this.props.getSearchQuery(searchInput)
  }

  render() {
    return (
      <div className="gifsearch">
        <h3>GifSearch</h3>
        <form id='gifsearchForm' onSubmit={this.submitHandler}>
          <input id='searchInput' name='searchInput' type='text'/><br/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default GifSearch
