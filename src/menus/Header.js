import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  state = { activeItem: 'dashboard' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted attached>
        <Menu.Item
          as={Link} to='/adopter/'
          name='dashboard'
          active={activeItem === 'dashboard'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
          as={Link} to='/adopter/dogs'
          name='adoptable dogs'
          active={activeItem === 'adoptable dogs'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link} to='/adopter/faves'
          name='my faves'
          active={activeItem === 'my faves'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link} to='/adopter/application'
          name='application'
          active={activeItem === 'application'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}