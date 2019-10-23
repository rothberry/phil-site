import React from "react"
import { Image } from "semantic-ui-react"
import "./App.css"
import Nav from './components/Nav'
// import { Router, Route, withRouter, Switch, Redirect } from "react-router-dom"

const profPic = '/home/phil/dev/projects/phil-site/phil-site-front/src/assets/prof-pic.jpg'
const rothberryPic = 'phil-site-front/src/assets/rothberry.jpg'

function App() {
  return (
    <div className="App">
      <Nav />
      <Image src={profPic} circular alt='profile pic' />
      <h1>Full Name</h1>
      <h1>Software Engineer</h1>
      <h1>About me</h1>
      <h1>Socials (to the right or bottom)</h1>
    </div>
  )
}

export default App
