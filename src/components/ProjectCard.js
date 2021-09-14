/*eslint-disable */
import React, { useContext } from "react"
import { Image, Card, Header } from "semantic-ui-react"
import { Context } from "../context/Context"

const ProjectCard = (props) => {
  const {
    details,
    pic,
    git,
    isSplit,
    isLive,
    liveApp,
    liveDemo,
    frontGit,
    backGit,
  } = props

  const { profColors } = useContext(Context)

  const gitLink = <a href={git}>Github Repo </a>
  const frontLink = <a href={frontGit}>Front Repo</a>
  const backLink = <a href={backGit}> Back Repo</a>

  const liveAppLink = <a href={liveApp}> Live App</a>
  const liveDemoLink = <a href={liveDemo}> Live Demo</a>

  let cardLinks
  // 2 Repos and Delployed
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
    // 2 Repos and Not Deployed
  } else if (!!isSplit && !isLive) {
    cardLinks = (
      <Card.Meta textAlign='center'>
        {frontLink}
        {" | "}
        {backLink}
        {/* {" | "} */}
        {/* {liveDemoLink} */}
      </Card.Meta>
    )
    // One Repo and Deployed
  } else if (!isSplit && !!isLive) {
    cardLinks = (
      <Card.Meta textAlign='center'>
        {gitLink}
        {" | "}
        {liveAppLink}
      </Card.Meta>
    )
    // One Repo and Not Deployed
  } else if (!isSplit && !isLive) {
    cardLinks = (
      <Card.Meta textAlign='center'>
        {gitLink}
        {" | "}
        {liveDemoLink}
      </Card.Meta>
    )
  }

  const styleCard = { backgroundColor: profColors[1] }

  return (
    <Card raised style={styleCard} rounded>
      <Image className={`proj-${details.name}`} src={pic} wrapped ui={true} />
      <Card.Content>
        <Header as='h2' textAlign='center'>
          {details.name}
        </Header>
        {cardLinks}
        <Card.Description>{details.desc}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default ProjectCard
