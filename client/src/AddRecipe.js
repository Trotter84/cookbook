import React from 'react'
import { Form } from 'semantic-ui-react'
import axios from 'axios'

class AddRecipe extends React.Component {
  state = { name: '', description: '' }

  handleChange = (e) => {
    //this.setState({ name: e.target.value })
    //this.setState({ description: e.target.value })
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, description } = this.state
    const { history } = this.props
    const recipe = { name, description }
    axios.post('/api/recipes', { recipe })
      .then( res => {
        this.setState({ name: '', recipe: '' })
        history.push(`/recipes/${res.data.id}`)
      })
  }

  render() {
    const { name, description } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          placeholder="Name"
          required
          value={name}
          onChange={this.handleChange}
          name="name"
        />
        <Form.Input
          name="description"
          placeholder="Description"
          value={description}
          onChange={this.handleChange}
        />
        <Form.Button>Add Recipe</Form.Button>
      </Form>
    )
  }
}

export default AddRecipe
