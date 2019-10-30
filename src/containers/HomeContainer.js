/*eslint-disable */
import React from "react"
import {
  Image,
  Divider,
  Header,
  Icon,
  Grid,
  List,
  Container
} from "semantic-ui-react"
import { Link } from "react-router-dom"

const HomeContainer = props => {
  const { links, profPic, hexColors } = props
  // const { c1, c2, c3, c4, c5 } = hexColors
  // c1: '#ffffff',
  // c2: '#e4eaf3',
  // c3: '#efe9e5',
  // c4: '#c6aa99',
  // c5: '#3a3836',
  const styleCont = { margin: "5% 5%" }
  return (
    <div className="home-container">
      <Container style={styleCont}>
        <Image
          src={profPic}
          circular
          centered
          alt="profile pic"
          style={{ height: "20%", width: "20%" }}
          size="small"
        />
        <Header as="h1" textAlign="center">
          Phil Roth
        </Header>
        <Header as="h3" textAlign="center">
          Software Engineer, Ruby, JavaScript, Linux.
        </Header>
        <Grid style={{ margin: "0% 10%" }}>
          <Grid.Row columns={3}>
            <Grid.Column width="10">
              <Header textAlign="center">About Me</Header>
              {/* <p style={{fontFamily: 'Courier New'}}> */}
              <p>
                Hi! I'm Phil Roth, a recent Flatiron School graduate for
                Software Engineering. I went to school at Western Michigan
                University for Industrial and Entrepreneurial Engineering. After
                working in the field, I decided to focus my career towards
                software engineering and web development. I also began learning
                music production 12 years ago and have come to see sound design
                through a visual design lens which has supported my coding
                skills. For more info, check out my{" "}
                <a href="/projects">projects</a> & <a href="/blog">blog</a>!
                {/* FROM RESUME */}
                {/* Full stack web developer with a passion for finding innovative
              solutions. With experience in Ruby on Rails, JavaScript, and React
              as well as a Bachelor’s in Entrepreneurial and Industrial
              Engineering. I have been praised for my strong skills in product
              design, project management, and creativity that help teams meet
              deadlines and exceed expectations. I am a creative and driven
              leader who thrives in challenging environments. I also began
              learning music production 12 years ago and have come to see sound
              design through a visual design lens which has supported my coding
              skills. */}
              </p>
            </Grid.Column>
            <Grid.Column>
              <Header>
                <p>Contact</p>{" "}
              </Header>{" "}
              <List style={{ textAlign: "left" }} size="huge">
                <List.Item as="a" href={links.twitter}>
                  <Icon name="twitter" size="big" />
                  Twitter
                </List.Item>
                <List.Item as="a" href={links.github}>
                  <Icon name="github" size="big" />
                  Github
                </List.Item>
                <List.Item as="a" href={links.linkedIn}>
                  <Icon name="linkedin" size="big" />
                  LinkedIn
                </List.Item>
                {/* <List.Item as="a" href={links.soundcloud}>
                <Icon name="soundcloud" size="big" />
                SoundCloud
              </List.Item> */}
                <List.Item as="a" href={links.gmail}>
                  <Icon name="mail" size="big" />
                  Email
                </List.Item>

                <List.Item
                  as="a"
                  href="https://drive.google.com/open?id=1Zg42il292S7Dfs-DptOXzJd_yOi5bg5Z"
                  download
                >
                  <Icon name="paperclip" size="big" />
                  Resume
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <br />
      <Divider horizontal>*</Divider>
    </div>
  )
}

export default HomeContainer
