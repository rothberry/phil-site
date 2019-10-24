/*eslint-disable */
import React from "react"
import "./App.css"
import Nav from "./components/Nav"
import profPic from "./images/prof-pic.jpg"
import HomeContainer from "./containers/HomeContainer"
import ProjectContainer from "./containers/ProjectContainer"
import ResumeContainer from "./containers/ResumeContainer"
import { Router, Route, withRouter, Switch, Redirect } from "react-router-dom"

const links = {
  soundcloud: "https://soundcloud.com/rothberry",
  twitter: "https://twitter.com/rothberry_",
  linkedIn: "https://www.linkedin.com/in/philroth77/",
  github: "https://github.com/rothberry",
  website: "phil-roth.com",
  gmail: "mailto:phil.roth077@gmail.com",
  retroJS: "https://retrojs-frontend.herokuapp.com/"
}

const App = () => {
  return (
    <div className="App">
      <Nav />
      <br />
      <br />
      <br />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomeContainer links={links} profPic={profPic} />}
        />
        <Route
          exact
          path="/projects"
          render={() => <ProjectContainer links={links} />}
        />
        <Route path="/resume" component={ResumeContainer} />
      </Switch>
    </div>
  )
}

export default App
