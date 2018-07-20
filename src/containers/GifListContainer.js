import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch'
import { getGifs } from '../adapter/adapter.js'

export default class GifListContainer extends React.Component {
  state = {
    gifs: [],
    query: 'default'
  }

  componentDidMount() {
    this.queryAndSetState(this.state.query)
  }

  queryAndSetState = (query) => {
    getGifs(query).then(results => {
        this.setState({
          gifs: results.data
        })
      })
    }

  handleChange = (query) => {
    this.setState({
      query
    })
    this.queryAndSetState(query)
  }

  render() {
    console.log(this.state);
    return (
      <div>
        < GifSearch query={this.state.query} handleChange={this.handleChange}/>
        < GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
