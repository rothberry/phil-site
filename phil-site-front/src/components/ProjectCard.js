/*eslint-disable */
import React from "react"
import { Image, Card } from "semantic-ui-react"

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
      <Card.Meta>
        {frontLink}
        {" | "}
        {backLink}
        {" | "}
        {liveAppLink}
      </Card.Meta>
    )
  } else if (!!isSplit && !isLive) {
    cardLinks = (
      <Card.Meta>
        {frontLink}
        {" | "}
        {backLink}
        {" | "}
        {liveDemoLink}
      </Card.Meta>
    )
  } else if (!isSplit && !!isLive) {
    cardLinks = (
      <Card.Meta>
        {gitLink}
        {" | "}
        {liveAppLink}
      </Card.Meta>
    )
  } else if (!isSplit && !isLive) {
    cardLinks = (
      <Card.Meta>
        {gitLink}
        {" | "}
        {liveDemoLink}
      </Card.Meta>
    )
  }

  const styleCard = {}
  const styleCardImage = {}
  // const styleCard = {width: '600px', height: '600px'}
  return (
    <Card raised style={styleCard} rounded>
      <Image
        style={{ styleCardImage }}
        // size='massive'
        rounded
        className={`proj-${details.name}`}
        fluid
        // as="a"
        // href={liveApp}
        src={pic}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{details.name}</Card.Header>
        {/* <Card.Meta>{cardLinks}</Card.Meta> */}
        {cardLinks}
        <Card.Description>{details.desc}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default ProjectCard
