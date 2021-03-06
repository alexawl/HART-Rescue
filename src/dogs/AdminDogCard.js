import React, { Component } from 'react';
import { Card, Icon, Image, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { createFavorite, removeFavorite } from "../actions"

class AdminDogCard extends Component {

  render() {
    // console.log("dog card dog props", this.props)
    const {img1, name, id } = this.props.dog
    let numFaves = this.props.allFavorites.filter(favorite => favorite.dog_id === id).length

    return (
    
      <Card >
        <Image 
          src={img1} as={Link} to={`/admin/dogs/${id}`}
          />
        <Card.Content as={Link} to={`/admin/dogs/${id}`}>
          <Card.Header>{name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Label color="red" labelposition='right'>
            <Label color='red'>
              <Icon name='heart' />
              Faves
            </Label>
            <Label basic color='red' pointing='left'>
              {numFaves}
            </Label>
          </Label>
        </Card.Content>
      </Card>
    
    )
  }
}


function msp(state){
  return {
    user: state.user, 
    allFavorites: state.allFavorites
  }
}

export default connect(msp, { createFavorite, removeFavorite })(AdminDogCard)
