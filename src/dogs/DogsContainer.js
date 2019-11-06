import React, { Component } from 'react';
import AdopterDogCard from './AdopterDogCard';
import { Grid, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchDogs } from '../actions';
// import { Switch, Route } from 'react-router-dom';

class DogsContainer extends Component {

  // now fetching in AdopterMain
  // componentDidMount(){
  //   this.props.fetchDogs()
  // }


  renderDogs = () => {
    let favoriteIds = this.props.favoriteDogs.map(favorite => favorite.id)
    return this.props.dogs.map(dog => {
      return favoriteIds.includes(dog.id)
      ?
      <AdopterDogCard key={dog.id} dog={dog} favorite={true}/>
      :
      <AdopterDogCard key={dog.id} dog={dog} />
    })
  }

  render() {
    // console.log("DOG CONTAINER PROPS", dog, favoriteDog)
    if (this.props.dogsLoading || this.props.userLoading) {
      return <img alt="fetching" src="https://miro.medium.com/max/450/1*dgfd5JaT0d7JT4VfhFEnzg.gif"/>
    } else {
      return (
        
        <Grid centered>
  
          <Grid.Row centered>
            Click on a dog's photo for more information
            Click a heart to mark a dog as a favorite to potentially adopt!
          </Grid.Row>
          <Grid.Row></Grid.Row>
          
          <Card.Group centered>
            {this.renderDogs()}
          </Card.Group>
       
        </Grid>
        
      )
    }
  }
}

function msp(state) {
  return ({
    user: state.user,
    dogs: state.dogs,
    userLoading: state.userLoading,
    dogsLoading: state.dogsLoading,
    favorites: state.favorites,
    favoriteDogs: state.favoriteDogs
  })
}

export default connect(msp, { fetchDogs })(DogsContainer)