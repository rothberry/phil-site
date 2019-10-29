/*eslint-disable */
import React, { Component } from "react"
import { Menu, Icon, Container } from "semantic-ui-react"
import { withRouter } from "react-router-dom"

class Nav extends Component {
  state = {
    activeItem: ""
  }

  componentDidMount() {
    this.setState({activeItem: this.props.location.pathname.slice(1)})
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.history.push(`/${name}`)
  }

  //? c1: '#ffffff',
  //? c2: '#e4eaf3',
  //? c3: '#efe9e5',
  //? c4: '#c6aa99',
  //? c5: '#3a3836',

  render() {
    const { activeItem } = this.state
    const styleNav = {
      height: "5%",
      fontFamily: "Courier New",
      backgroundColor: "#3a3836"
    }
    const styleHome = {}
    return (
      <Menu fixed="top" size="large" style={styleNav} inverted>
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
          <Menu.Item
            position="right"
            as="a"
            header
            name="projects"
            active={activeItem === "projects"}
            onClick={this.handleItemClick}
          >
            Projects
          </Menu.Item>
          <Menu.Item
            as="a"
            header
            name="blog"
            active={activeItem === "blog"}
            onClick={this.handleItemClick}
          >
            Blog
          </Menu.Item>
          {/* <Menu.Item
            as="a"
            header
            name="resume"
            active={activeItem === "resume"}
            onClick={this.handleItemClick}
          >
            Resume
          </Menu.Item> */}
        </Container>
      </Menu>
    )
  }
}

export default withRouter(Nav)
