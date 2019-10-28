/*eslint-disable */
import React from "react"
import { Image, Segment, Header, Icon, Grid, List } from "semantic-ui-react"
import {Link} from 'react-router-dom'

const HomeContainer = (props) =>  {
  const { links, profPic } = props
  const styleP = {font: 'Courier New' }
  return (
    <div className="home-container">
      <Segment raised rounded style={{backgroundColor: '', margin: '0% 10%'}}>
        <Image
          src={profPic}
          circular
          centered
          alt="profile pic"
          style={{ height: "15%", width: "15%" }}
          size="small"
        />
        <Header>Phil Roth</Header>
        <Header.Subheader>Software Engineer</Header.Subheader>
      </Segment>
      <Grid style={{margin: '0% 10%'}}>
        <Grid.Row columns={3}>
          <Grid.Column width="10">
            <Header.Subheader textAlign='center'>About Me</Header.Subheader>
            {/* <p style={{fontFamily: 'Courier New'}}> */}
            <p style={styleP}>
              Hi! I'm Phil Roth, a recent Flatiron School graduate for Software Engineering. I went to school at Western Michigan University for Industrial and Entrepreneurial Engineering. After working in the field, I decided to focus my career towards software engineering and web development. I also began learning music production 12 years ago and have come to see sound design through a visual design lens which has supported my coding skills. 
              For more info, check out my <a href='/projects'>projects</a> & <a href='/blog'>blog</a>!
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
            <List style={{ textAlign: "left" }} size='huge'>
              <List.Item as="a" href={links.twitter} >
                <Icon name="twitter" size="big" />
                Twitter
              </List.Item>
              <List.Item as="a" href={links.github} >
                <Icon name="github" size="big" />
                Github
              </List.Item>
              <List.Item as="a" href={links.linkedIn} >
                <Icon name="linkedin" size="big" />
                LinkedIn
              </List.Item>
              <List.Item as="a" href={links.gmail} >
                <Icon name="mail" size="big" />
                Email
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default HomeContainer
