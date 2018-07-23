import React from 'react';

class GifSearch extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchterm: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const search = e.target.search.value
    this.setState({
      searchterm: search
    },() =>
    {this.props.gifSearch(search)})
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
      <input type="text" id="search" value={this.props.searchterm}>
      </input>
      <button type="submit">Submit</button>
      </form>
    )
  }


}

export default GifSearch;
