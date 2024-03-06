/*eslint-disable */
import React, { useContext } from "react"
import { Menu, Image } from "semantic-ui-react"
import { NavLink } from "react-router-dom"
import { Context } from "../context/Context"
// import berryPic from "../images/rothberry.ico"

const Nav = () => {
  const { profColors } = useContext(Context)
  const styleNav = {
    fontFamily: "Courier New",
    backgroundColor: profColors[1],
    color: profColors[0],
  }
  const activeStyle = {
    backgroundColor: profColors[2],
    color: profColors[1],
  }
  return (
    // TODO Add foldable on mobile?
    <Menu fixed='top' size='large' style={styleNav} inverted tabular>
      <Menu.Item header name='home'>
        <NavLink to='/'>
          {/* <Image src={berryPic} size='mini' /> */}
          Phil Roth
        </NavLink>
      </Menu.Item>
      <Menu.Menu position='right'>
        <NavLink to='/projects' activeStyle={activeStyle}>
          <Menu.Item header name='projects'>
            Projects
          </Menu.Item>
        </NavLink>
        <NavLink to='/blog' activeStyle={activeStyle}>
          <Menu.Item header name='blog'>
            Blog
          </Menu.Item>
        </NavLink>
        {/*TODO Resume Link? */}
        <NavLink to='/resume' activeStyle={activeStyle}>
          <Menu.Item header name='resume'>
            Resume
          </Menu.Item>
        </NavLink>
        <NavLink to='/extras' activeStyle={activeStyle}>
          <Menu.Item header name='extras'>
            Extra Fun
          </Menu.Item>
        </NavLink>
      </Menu.Menu>
    </Menu>
  )
}

export default Nav
