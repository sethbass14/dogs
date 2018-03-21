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

export const DogShow = (props) => {
  return (
    <div className="dog-show">
      <h1>{props.showDog.breed}</h1>
      <img src={props.showDog.image}/>
      <button id={props.showDog.id} onClick={props.changeDelete}>Delete Dog</button>
    </div>
  )
}

//This image needs to be set in the state.
export const DeletedDog = (props) => {
  return (
    <div className="deleted-dog">
      <h2>Your dog has been 'Yellerd'</h2>
      <img src="https://literaryhoarders.files.wordpress.com/2013/11/image.jpg"></img>
    </div>
  )
}

export const Form = (props) => {
  return (
    <div className= "new-dog" >
      <form onSubmit={props.handleSubmit}>
        <label>Breed</label>
        <input type="text" name="newBreed" value={props.newBreed} onChange={props.handleFormChange}></input>
        <label>Image URL</label>
        <input type="text" name="newImage" value={props.newImage} onChange={props.handleFormChange}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
