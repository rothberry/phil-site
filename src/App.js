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

const App = () => {
  const { profColors } = useContext(Context)

  const appStyle = {
    backgroundColor: profColors[4],
  }
  return (
    <div className='App' style={appStyle}>
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
    </div>
  )
}

export default App
