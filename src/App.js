/*eslint-disable */
import React, { useContext } from "react"
import "./App.css"
import { Route, Switch } from "react-router-dom"
import Nav from "./components/Nav"
import HomeContainer from "./containers/HomeContainer"
import ProjectContainer from "./containers/ProjectContainer"
import BlogContainer from "./containers/BlogContainer"
import ResumeContainer from "./containers/ResumeContainer"
import ExtrasContainer from "./containers/ExtrasContainer"
import { Context } from "./context/Context"
import { Footer } from "./components/Footer"
import { Container } from "semantic-ui-react"

const App = () => {
  const { profColors } = useContext(Context)

  const appStyle = {
    backgroundColor: profColors[4],
  }
  return (
    <Container className='App' style={appStyle} fluid>
      <Nav />
      <br />
      <br />
      <br />
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/projects' component={ProjectContainer} />
        <Route exact path='/blog' component={BlogContainer} />
        <Route exact path='/resume' component={ResumeContainer} />
        <Route exact path='/extras' component={ExtrasContainer} />
      </Switch>
      <Footer />
    </Container>
  )
}

export default App
