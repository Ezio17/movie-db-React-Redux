import React, {useState} from 'react'
import Menu from 'react-burger-menu/lib/menus/bubble';

import Nav from './Nav'

const BurgerMenu = props => {
  const [isOpen, setIsOpen] = useState(false)

  const handleStateChange = (state) => setIsOpen(state.isOpen)

  const onClose = () => setIsOpen(false)

  return (
  <Menu 
    width={'250px'}
    isOpen={isOpen}
    onStateChange={state => handleStateChange(state)} 
  >
    <Nav isOpen={isOpen} onClose={onClose} headerNav={props.headerNav} nameClass={'burger-nav'}/>
  </Menu>
  )
}

export default BurgerMenu