import React, { Component } from "react"
import { Menu, Image, Container } from "semantic-ui-react"
// import { Link } from "react-router-dom"

class Nav extends Component {
  state = {
    activeItem: "home"
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state
    return (
      <Menu fixed="top" pointing>
        <Container>
          <Menu.Item
            as="a"
            header
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            {/* <Image
              size="mini"
              src="../assets/rothberry.jpg"
              style={{ marginRight: "1.5em" }}
            /> */}
            Phil Roth
          </Menu.Item>
          <Menu.Item
            as="a"
            header
            name="blog"
            position="right"
            active={activeItem === "blog"}
            onClick={this.handleItemClick}
          >
            Blog
          </Menu.Item>
          <Menu.Item
            as="a"
            header
            name="projects"
            active={activeItem === "projects"}
            onClick={this.handleItemClick}
          >
            Projects
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default Nav
