import React from 'react'
import { DogShow, DeletedDog } from './DogList'

export default class DeleteableDogCard extends React.Component {
  constructor() {
    super()

    this.state = {
      isDeleted: false
    }
  }

  changeDelete = (event) => {
    this.props.handleDelete(event)
    this.setState({ isDeleted: true }, () => console.log(this.state))
  }

  render() {
    return (
      <div className="DeleteableDogCard">
        {this.state.isDeleted ? < DeletedDog/>: <DogShow showDog={this.props.showDog} changeDelete={this.changeDelete} handleDelete={this.props.handleDelete}/>}
      </div>
    )
  }
}
