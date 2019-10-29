/*eslint-disable */
import React from "react"
import { Image, Icon, Card, Header } from "semantic-ui-react"
import ProjectCard from "../components/ProjectCard"
import retroJSPic from "../images/retroJS.png"
import audioPhilesPic from "../images/audioPhiles.png"
// const audioPhilesPic =
//   "https://library.kissclipart.com/20180919/pww/kissclipart-sound-wave-vector-clipart-sound-wave-79091298684b3993.png"
import teamLunchPic from "../images/teamLunchOne.png"

const projectDetails = {
  retroJS: {
    name: "RetroJS",
    desc:
      "A recreation of the game Pong made to play with 2 players on one keyboard."
  },
  audioPhiles: {
    name: "AudioPhiles",
    desc:
      "A peer to peer audio sample sharing app with a visual representation of the uploaded audio samples."
  },
  teamLunch: {
    name: "Team Lunch Roulette",
    desc:
      "Choose where to go for lunch at random by choosing a location and food preference."
  }
}

const ProjectContainer = props => {
  const { links } = props
  const styleCardGroup = { margin: "1% 10%" }
  return (
    <div className="project-container">
      <Header textAlign='center' as='h1'>Projects</Header>
      <Card.Group
        className="project-group"
        itemsPerRow={2}
        textAlign="center"
        centered
        style={styleCardGroup}
      >
        {/* RETROJS */}
        <ProjectCard
          details={projectDetails.retroJS}
          pic={retroJSPic}
          git={links.retroJSGit}
          isSplit={false}
          isLive={true}
          liveApp={links.retroJSLiveApp}
        />
        {/* AUDIOPHILES */}
        <ProjectCard
          details={projectDetails.audioPhiles}
          pic={audioPhilesPic}
          frontGit={links.audioPhilesFront}
          backGit={links.audioPhilesBack}
          isSplit={true}
          isLive={false}
          // liveApp={}
          liveDemo={links.audioPhilesLiveDemo}
        />

        {/* TEAM LUNCH */}
        <ProjectCard
          details={projectDetails.teamLunch}
          pic={teamLunchPic}
          frontGit={links.teamLunchFront}
          backGit={links.teamLunchBack}
          isSplit={true}
          isLive={false}
          // liveApp={}
          liveDemo={links.teamLunchLiveDemo}
        />
      </Card.Group>
    </div>
  )
}

export default ProjectContainer
