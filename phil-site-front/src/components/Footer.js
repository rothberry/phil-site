import React, { Component } from "react"
import { Menu, Icon, Container, Sticky } from "semantic-ui-react"

const Footer = () => {
  // const styleFooter = {left: '0', bottom: '0'}
  const styleFooter = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
  }

  const phantom = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
  }

  // return <Container style={styleFooter}>2019</Container>
  return (
    <div>
      <div style={phantom} />
      <div style={styleFooter}>
        2019 yo
      </div>
    </div>
  )
}

export default Footer
