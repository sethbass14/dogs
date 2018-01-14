import React from 'react'

export const DogList = (props) => {
  const dogNames = props.dogs.map((dog, i) => <li key={i} id={dog.id} onClick={props.handleDogShow}>{dog.breed}</li>)
  return (
    <div className="dog-list">
      <ul className= 'breed-list'>
        {dogNames}
      </ul>
    </div>
  )
}

export const DogShow = ({ showDog }) => {
  return (
    <div className="dog-show">
      <h1>{showDog.breed}</h1>
      <img src={showDog.image}/>
    </div>
  )
}

export const Form = (props) => {
  return (
    <div className= "new-dog" >
      <form onSubmit={props.handleSubmit}>
        <label>Breed</label>
        <input type="text" name="newBreed" value={props.newBreed} onChange={props.handleNewBreed}></input>
        <label>Image URL</label>
        <input type="text" name="newImage" value={props.newImage} onChange={props.handleNewImage}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
