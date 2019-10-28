/*eslint-disable */
import React from "react"
import { Image, Card, Header } from "semantic-ui-react"

const ProjectCard = props => {
  const {
    details,
    pic,
    git,
    isSplit,
    isLive,
    liveApp,
    liveDemo,
    frontGit,
    backGit
  } = props

  const gitLink = <a href={git}>Github Repo </a>
  const frontLink = <a href={frontGit}>Front</a>
  const backLink = <a href={backGit}> Back</a>
  if (!!liveDemo) {
    
  }
  const liveAppLink = <a href={liveApp}> Live App</a>
  const liveDemoLink = <a href={liveDemo}> Live Demo</a>

  let cardLinks
  if (!!isSplit && !!isLive) {
    cardLinks = (
      <Card.Meta textAlign='center'>
        {frontLink}
        {" | "}
        {backLink}
        {" | "}
        {liveAppLink}
      </Card.Meta>
    )
  } else if (!!isSplit && !isLive) {
    cardLinks = (
      <Card.Meta textAlign='center'>
        {frontLink}
        {" | "}
        {backLink}
        {" | "}
        {liveDemoLink}
      </Card.Meta>
    )
  } else if (!isSplit && !!isLive) {
    cardLinks = (
      <Card.Meta textAlign='center'>
        {gitLink}
        {" | "}
        {liveAppLink}
      </Card.Meta>
    )
  } else if (!isSplit && !isLive) {
    cardLinks = (
      <Card.Meta textAlign='center'>
        {gitLink}
        {" | "}
        {liveDemoLink}
      </Card.Meta>
    )
  }

  const styleCard = {width: '%', height: '%', backgroundColor: '#e4eaf3'}
  // const styleCardImage = {width: '10%', height: '10%'}
  // const styleCard = {width: '600px', height: '600px'}
  //? c1: '#ffffff',
  //? c2: '#e4eaf3',
  //? c3: '#efe9e5',
  //? c4: '#c6aa99',
  //? c5: '#3a3836',

  return (
    <Card raised style={styleCard} rounded>
      <Image
        // style={{ styleCardImage }}
        className={`proj-${details.name}`}
        src={pic}
        wrapped
        ui={true}
      />
      <Card.Content>
        <Header as='h2' textAlign='center'>{details.name}</Header>
        {cardLinks}
        <Card.Description>{details.desc}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default ProjectCard
