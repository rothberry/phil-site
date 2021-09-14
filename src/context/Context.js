import React, { createContext } from "react"

export const Context = createContext()

const ContextProvider = (props) => {
  const profColors = [
    // * TROPICS https://www.color-hex.com/color-palette/84382
    // c1: '#ffad4f',
    // c2: '#72a689',
    // c3: '#607b60',
    // c4: '#44614a',
    // c5: '#191b25',
    // * OPEHLIA https://www.color-hex.com/color-palette/84361
    // "#ffffff",
    // "#e4eaf3",
    // "#efe9e5",
    // "#c6aa99",
    // "#3a3836",
    // * Cool and fresh https://visme.co/blog/website-color-schemes/
    "#05386B",
    "#379683",
    "#5cdb95",
    "#8ee4af",
    "#edf5e1",
  ]

  const links = {
    soundcloud: "https://soundcloud.com/rothberry",
    twitter: "https://twitter.com/rothberry_",
    linkedIn: "https://www.linkedin.com/in/philroth77/",
    github: "https://github.com/rothberry",
    website: "phil-roth.com",
    blog: "https://medium.com/@phil.roth077",
    gmail: "mailto:phil.roth077@gmail.com",
    resume:
      "https://drive.google.com/file/d/1CROsr0muTL8Vls4T-lbeiIdA5XCkU4ej/preview?usp=sharing",
    retroJSLiveApp: "https://retrojs-frontend.herokuapp.com/",
    retroJSGit: "https://github.com/christianalim/retroJS",
    teamLunchFront:
      "https://github.com/Phil-Grace/react-project-team-lunch-frontend",
    teamLunchBack:
      "https://github.com/Phil-Grace/react-project-team-lunch-backend",
    teamLunchLiveDemo: "https://www.youtube.com/watch?v=DHcF9vscdak",
    audioPhilesFront: "https://github.com/rothberry/mod-5-audiofiles-frontend",
    audioPhilesBack: "https://github.com/rothberry/mod-5-audiofiles-backend",
    audioPhilesLiveDemo: undefined,
  }

  const projectDetails = {
    retroJS: {
      name: "RetroJS",
      desc: "A recreation of the game Pong made to play with 2 players on one keyboard.",
    },
    audioPhiles: {
      name: "AudioPhiles",
      desc: "A peer to peer audio sample sharing app with a visual representation of the uploaded audio samples.",
    },
    teamLunch: {
      name: "Team Lunch Roulette",
      desc: "Choose where to go for lunch at random by choosing a location and food preference.",
    },
  }

  const blogList = [
    {
      link: "https://medium.com/@phil.roth077/a-simple-guide-to-jwt-authorization-6efd62f71237",
      title: "A Simple guide to JWT Authorization",
      desc: "Walkthrough of what a JSON Web Token is and how to use it on the client-side.",
      pic: "",
    },
    {
      link: "https://medium.com/@phil.roth077/rails-sessions-for-an-interactive-user-experience-b24bb35fd404",
      title: "Rails Sessions for an Interactive User Experience",
      desc: "Using sessions to understand server-side requrests in Rails.",
      pic: "",
    },
    {
      link: "https://medium.com/@phil.roth077/quality-of-life-coding-hacks-a0c510df36d",
      title: "Quality of Life Coding “Hacks”",
      desc: "Visual Studio Code shortcuts to improve workflow.",
      pic: "",
    },
  ]

  const store = {
    profColors,
    links,
    projectDetails,
    blogList,
  }

  return <Context.Provider value={store}>{props.children}</Context.Provider>
}

export default ContextProvider
