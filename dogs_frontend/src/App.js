import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DeleteableDogCard from './DeleteableDogCard'
// import { DogShow } from './DogShow'
import { DogList, Form} from './DogList'


const URL = 'http://localhost:3000/api/v1/dogs'
class App extends Component {
  constructor() {
    super()

    this.state = {
      dogs: [],
      showDog: null,
      newDog: false,
      newBreed: '',
      newImage: '',
    }
  }

  componentDidMount = () => {
    fetch(URL)
      .then(resp => resp.json())
        .then(data => this.setState({ dogs: data }))
  }

  postNewDog = (breed, image) => {
    return (
      fetch(URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({breed: breed, image: image})
      }).then(resp => resp.json())
    )
  }

  deleteDog = (id) => {
    return (
      fetch(URL + `/${id}`, {
        method: 'DELETE'
      }).then(resp => resp.json())
    )
  }

  handleDogShow = (event) => {
    const id = parseInt(event.target.id)
    const showDog = this.state.dogs.filter(dog => dog.id === id)[0]
    this.setState({ showDog })
  }

  handleDelete = (event) => {
    const id = parseInt(event.target.id)
    this.deleteDog(id)
    this.setState({ dogs: this.state.dogs.filter(dog => dog.id !== id)}, () => console.log(this.state.dogs) )
  }

  buttonHandle = () => {
    this.setState({ newDog: true})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit')
    this.postNewDog(this.state.newBreed, this.state.newImage).then( dog => {
      this.setState({
        dogs: [...this.state.dogs, dog]
      })
    })

  }

  handleNewBreed = (event) => {
    this.setState({ newBreed : event.target.value})
  }

  handleNewImage = (event) => {
    this.setState({ newImage : event.target.value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <DogList
                dogs={this.state.dogs}
                handleDogShow={this.handleDogShow}
              />
            </div>
            <div className="col-md-6">
              { this.state.showDog ? <DeleteableDogCard handleDelete={this.handleDelete} showDog={this.state.showDog} /> : null}
            </div>
            <div className="col-md-3">
              <button onClick={this.buttonHandle}>New Dog</button>
              {this.state.newDog ?
                <Form
                  handleSubmit={this.handleSubmit}
                  handleNewBreed={this.handleNewBreed}
                  handleNewImage={this.handleNewImage}
                  newBreed={this.state.newBreed}
                  newImage={this.state.newImage}
                /> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
