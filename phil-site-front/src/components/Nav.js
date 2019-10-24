import React, { Component } from "react"
import { Menu, Icon, Container } from "semantic-ui-react"
import { withRouter } from "react-router-dom"

class Nav extends Component {
  state = {
    activeItem: ""
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.history.push(`/${name}`)
  }

  render() {
    const { activeItem } = this.state
    const styleNav = { height: "5%" }
    const styleHome = {}
    return (
      <Menu fixed="top" size="large" style={styleNav} color='blue' inverted>
        <Container>
          <Menu.Item
            as="a"
            header
            name=""
            align="center"
            active={activeItem === ""}
            onClick={this.handleItemClick}
            style={styleHome}
          >
            Phil Roth
          </Menu.Item>
          {/* <Menu.Item
            as="a"
            header
            name="blog"
            active={activeItem === "blog"}
            onClick={this.handleItemClick}
            >
            Blog
          </Menu.Item> */}
          <Menu.Item
            as="a"
            header
            position="right"
            name="projects"
            active={activeItem === "projects"}
            onClick={this.handleItemClick}
          >
            Projects
          </Menu.Item>
          <Menu.Item
            as="a"
            header
            name="resume"
            active={activeItem === "resume"}
            onClick={this.handleItemClick}
          >
            Resume
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default withRouter(Nav)
