import React from 'react'
import { Form } from 'semantic-ui-react'
import axios from 'axios'

class AddIngredient extends React.Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    // params.require(:ingredient).permit(:name)
    // { ingredient: { name: 'Salt' } }
    const ingredient = { name: this.state.name }
    axios.post('/api/ingredients', { ingredient })
      .then( () => this.resetForm() )
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  clicky = (e) => {
    console.log(e.target)
  }

  resetForm = () => {
    this.setState({ name: '' })
    this.props.history.push('/ingredients')
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          placeholder="Add Ingredient"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <Form.Button type="button" onClick={this.resetForm}>
          Cancel
        </Form.Button>
        <Form.Button>Add</Form.Button>
      </Form>
    )
  }
}

export default AddIngredient
