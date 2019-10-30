/*eslint-disable */
import React from "react"
import "./App.css"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import profPic from "./images/prof-pic.jpg"
import bgPic from "./images/dot-grid.png"
import HomeContainer from "./containers/HomeContainer"
import ProjectContainer from "./containers/ProjectContainer"
import BlogContainer from "./containers/BlogContainer"
import { Router, Route, withRouter, Switch, Redirect } from "react-router-dom"
import { Image } from "semantic-ui-react"

const links = {
  soundcloud: "https://soundcloud.com/rothberry",
  twitter: "https://twitter.com/rothberry_",
  linkedIn: "https://www.linkedin.com/in/philroth77/",
  github: "https://github.com/rothberry",
  website: "phil-roth.com",
  blog: "https://medium.com/@phil.roth077",
  gmail: "mailto:phil.roth077@gmail.com",
  retroJSLiveApp: "https://retrojs-frontend.herokuapp.com/",
  retroJSGit: "https://github.com/christianalim/retroJS",
  teamLunchFront:
    "https://github.com/Phil-Grace/react-project-team-lunch-frontend",
  teamLunchBack:
    "https://github.com/Phil-Grace/react-project-team-lunch-backend",
  teamLunchLiveDemo: undefined,
  audioPhilesFront: "https://github.com/rothberry/mod-5-audiofiles-frontend",
  audioPhilesBack: "https://github.com/rothberry/mod-5-audiofiles-backend",
  audioPhilesLiveDemo: undefined
}

const hexColors = {
  // * TROPICS https://www.color-hex.com/color-palette/84382
  // c1: '#ffad4f',
  // c2: '#72a689',
  // c3: '#607b60',
  // c4: '#44614a',
  // c5: '#191b25',
  // * OPEHLIA https://www.color-hex.com/color-palette/84361
  c1: "#ffffff",
  c2: "#e4eaf3",
  c3: "#efe9e5",
  c4: "#c6aa99",
  c5: "#3a3836"
}

const App = () => {
  return (
    <div className="App">
      <Nav hexColors={hexColors} />
      <br />
      <br />
      <br />
      {/* SCROLLING PAGE */}
      {/* <HomeContainer links={links} profPic={profPic} />
      <br />
      <br />
      <br />
      <ProjectContainer links={links} />
      <br />
      <br />
      <br />
      <BlogContainer links={links} /> */}

      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomeContainer
              links={links}
              profPic={profPic}
              hexColors={hexColors}
            />
          )}
        />
        <Route
          exact
          path="/projects"
          render={() => <ProjectContainer links={links} />}
        />
        <Route
          exact
          path="/blog"
          render={() => <BlogContainer links={links} />}
        />
      </Switch>
    </div>
  )
}

export default App
