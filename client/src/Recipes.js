import React from 'react'
import axios from 'axios'

class Recipes extends React.Component {
  state = { recipes: [] }

  componentDidMount() {
    axios.get('/api/recipes')
      .then( res => this.setState({ recipes: res.data }) )
  }

  render() {
    return null
  }
}

export default Recipes
