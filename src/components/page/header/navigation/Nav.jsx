import React from 'react'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-scroll'

const Nav = props => (
     <ul className={`navigation ${props.nameClass}`}>
       {props.headerNav.map(nav => (
         <li className='navigation__li' key={nav.to}> 
         {nav.name === 'Контакты' ? window.innerWidth <= 570 ?  
            <Link 
            style={{cursor: 'pointer'}} 
            onClick={() => props.onClose()} 
            to={nav.to}
            smooth={true}
            duration={700}
            >{nav.name}</Link> 
               :
             <Link 
             style={{cursor: 'pointer'}} 
             to={nav.to}
             smooth={true}
             duration={700}
             >{nav.name}</Link> 
             : window.innerWidth <= 570 ?  <NavLink onClick={() => props.onClose()} to={nav.to}>{nav.name}</NavLink> :
             <NavLink to={nav.to}>{nav.name}</NavLink>}         
         </li>
       ))}
     </ul>
  )


export default Nav