import React from "react"
import { Image, Segment, Header, Icon, Grid, List } from "semantic-ui-react"

const HomeContainer = (props) =>  {
  const { links, profPic } = props
  return (
    <div className="home-container">
      <Segment raised>
        <Image
          src={profPic}
          circular
          centered
          alt="profile pic"
          style={{ height: "15%", width: "15%" }}
          size="small"
        />
        <h1>Phil Roth</h1>
        <h1>Software Engineer</h1>
      </Segment>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column width="10">
            <Header>About Me:</Header>
            <p style={{}}>
              Full stack web developer with a passion for finding innovative
              solutions. With experience in Ruby on Rails, JavaScript, and React
              as well as a Bachelor’s in Entrepreneurial and Industrial
              Engineering. I have been praised for my strong skills in product
              design, project management, and creativity that help teams meet
              deadlines and exceed expectations. I am a creative and driven
              leader who thrives in challenging environments. I also began
              learning music production 12 years ago and have come to see sound
              design through a visual design lens which has supported my coding
              skills.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header>
              <p>Socials:</p>{" "}
            </Header>{" "}
            <List style={{ textAlign: "left" }}>
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
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default HomeContainer
