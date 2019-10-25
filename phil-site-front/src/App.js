/*eslint-disable */
import React from "react"
import "./App.css"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import profPic from "./images/prof-pic.jpg"
import HomeContainer from "./containers/HomeContainer"
import ProjectContainer from "./containers/ProjectContainer"
import BlogContainer from "./containers/BlogContainer"
import { Router, Route, withRouter, Switch, Redirect } from "react-router-dom"

const links = {
  soundcloud: "https://soundcloud.com/rothberry",
  twitter: "https://twitter.com/rothberry_",
  linkedIn: "https://www.linkedin.com/in/philroth77/",
  github: "https://github.com/rothberry",
  website: "phil-roth.com",
  blog: 'https://medium.com/@phil.roth077',
  gmail: "mailto:phil.roth077@gmail.com",
  retroJSLiveApp: "https://retrojs-frontend.herokuapp.com/",
  retroJSGit: "https://github.com/christianalim/retroJS",
  teamLunchFront: 'https://github.com/Phil-Grace/react-project-team-lunch-frontend',
  teamLunchBack: 'https://github.com/Phil-Grace/react-project-team-lunch-backend',
  teamLunchLiveDemo: undefined,
  audioPhilesFront: 'https://github.com/rothberry/mod-5-audiofiles-frontend',
  audioPhilesBack: 'https://github.com/rothberry/mod-5-audiofiles-backend',
  audioPhilesLiveDemo: undefined,


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
        <Route path="/blog" component={BlogContainer} />
      </Switch>
      {/* <Footer /> */}
      {/* <footer>2019</footer> */}
    </div>
  )
}

export default App
