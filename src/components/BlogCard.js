/*eslint-disable */
import React from "react"
import { Card, Image, Header, List, Divider } from "semantic-ui-react"

const BlogCard = props => {
  const { blog } = props
  const { title, link, desc, pic } = blog
  const styleItem = {
    margin: '3% 0',
    // backgroundColor: "#e4eaf3"
  }

  return (
    // ! AS LIST
    <List.Item style={styleItem}>
      <Header as="h2">{title}</Header>
      <List.List>
        <List.Description>{desc}</List.Description>
        <List.Item >
          <a href={link}>Link to Post</a>
        </List.Item>
      </List.List>
      <Divider horizontal>*</Divider>
    </List.Item>

    // ! AS CARDS
    // <Card raised style={styleItem} rounded>
    //   <Image className={`proj-${title}`} src={pic} wrapped ui={true} />
    //   <Card.Content>
    //     <Header as="h2" textAlign="center">
    //       {title}
    //     </Header>
    //     <Card.Meta textAlign="center">
    //       <a href={link}>Link to Post</a>
    //     </Card.Meta>
    //     <Card.Description>{desc}</Card.Description>
    //   </Card.Content>
    // </Card>
  )
}

export default BlogCard
