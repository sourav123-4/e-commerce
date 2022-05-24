import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import '../Styles/Header.css'
import logo from '../images/logo.jpg'
import { Button, Input } from 'semantic-ui-react'
function Header() {
  return (
    <div className='app-header'>
      <div className='logo-div'>
        <img src={logo} alt="logo" width="150px" height="100px"/>
        <h2>My Ecommerce</h2>
      </div>
      <Input  action='search' placeholder='Search...' size='huge'/>
      <Button content='Login' />
    </div>
  )
}

export default Header