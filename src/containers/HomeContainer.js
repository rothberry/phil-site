/*eslint-disable */
import React, { useContext } from "react"
import {
  Image,
  Divider,
  Header,
  Icon,
  Grid,
  List,
  Container,
} from "semantic-ui-react"
import { Link } from "react-router-dom"
import TechCard from "../components/TechCard"
import { imageData } from "../context/imageData.js"
import { Context } from "../context/Context"
import profPic from "../images/prof-pic.jpg"

const HomeContainer = () => {
  const { links } = useContext(Context)

  const styleCont = { margin: "5% 5%" }
  const styleImage = { height: "20%", width: "20%" }
  const styleGrid = { margin: "0% 10%" }
  const styleList = { textAlign: "left" }

  const mappedTechCards = imageData.map((t, i) => {
    return <TechCard tech_name={t.tech_name} tech_img={t.tech_img} key={i} />
  })

  return (
    <div className='home-container'>
      <Container style={styleCont}>
        <Image
          src={profPic}
          circular
          centered
          alt='profile pic'
          style={styleImage}
          size='small'
        />
        <Header as='h1' textAlign='center'>
          Phil Roth
        </Header>
        <Header as='h3' textAlign='center'>
          <span>
            Software Engineer <Icon name='computer' /> / Teacher
            <Icon name='pencil' /> / Musician <Icon name='music' />
          </span>
        </Header>
        <Grid style={styleGrid}>
          <Grid.Row columns={3}>
            <Grid.Column width='10'>
              <Header textAlign='center'>About Me</Header>
              <p>
                Hi! I'm Phil Roth, a Cohort Lead Instructor for Flatiron School
                graduate for Software Engineering. I went to school at Western
                Michigan University for Industrial and Entrepreneurial
                Engineering. After working in the field, I decided to focus my
                career towards software engineering and web development. I also
                began learning music production 12 years ago and have come to
                see sound design through a visual design lens which has
                supported my coding skills. For more info, check out my{" "}
                <Link to='/projects'>projects</Link> &{" "}
                <Link to='/blog'>blog</Link>!
              </p>
            </Grid.Column>
            <Grid.Column>
              <Header>
                <p>Contact</p>{" "}
              </Header>{" "}
              <List style={styleList} size='huge'>
                <List.Item as='a' href={links.github}>
                  <Icon name='github' size='big' />
                  Github
                </List.Item>
                <List.Item as='a' href={links.linkedIn}>
                  <Icon name='linkedin' size='big' />
                  LinkedIn
                </List.Item>
                <List.Item as='a' href={links.twitter}>
                  <Icon name='twitter' size='big' />
                  Twitter
                </List.Item>
                {/* TODO Need to update my Soundcloud to be up to date  */}
                {/* <List.Item as='a' href={links.soundcloud}>
                  <Icon name='soundcloud' size='big' />
                  SoundCloud
                </List.Item> */}
                <List.Item as='a' href={links.gmail}>
                  <Icon name='mail' size='big' />
                  Email
                </List.Item>

                <List.Item as='a' href='/resume'>
                  <Icon name='sticky note' size='big' />
                  Resume
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Divider horizontal>+</Divider>
          <Grid.Row centered>
            <Header>Technologies Used</Header>
          </Grid.Row>
          <Grid.Row centered>
            <List verticalAlign='middle' horizontal>
              {mappedTechCards}
            </List>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  )
}

export default HomeContainer
