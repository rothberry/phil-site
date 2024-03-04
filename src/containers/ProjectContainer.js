/*eslint-disable */
import React, { useContext } from "react"
import { Card, Header, Divider, Container } from "semantic-ui-react"
import ProjectCard from "../components/ProjectCard"
import retroJSPic from "../images/retroJS.png"
import audioPhilesPic from "../images/audioPhiles.png"
import teamLunchPic from "../images/teamLunchOne.png"
import { Context } from "../context/Context"
import { imageData } from "../context/imageData"

const ProjectContainer = () => {
  const { links, projectDetails } = useContext(Context)

  const styleCont = { margin: "1% 10%" }

  return (
    <Container className='project-container' style={styleCont}>
      <Header textAlign='center' size='huge'>
        Projects
      </Header>
      <Card.Group
        className='project-group'
        itemsPerRow={2}
        textAlign='center'
        centered
      >
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
        {/* RETROJS */}
        <ProjectCard
          details={projectDetails.retroJS}
          pic={retroJSPic}
          git={links.retroJSGit}
          isSplit={false}
          isLive={true}
          liveApp={links.retroJSLiveApp}
        />
        {/* py-term-helpers */}
        <ProjectCard
          details={projectDetails.pyTermHelpers}
          pic={imageData[1].tech_img}
          git={links.pyTermGit}
          isSplit={false}
          isLive={true}
          liveApp={links.pyTermLiveApp}
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
      <br />
      <Divider horizontal>+</Divider>
    </Container>
  )
}

export default ProjectContainer
