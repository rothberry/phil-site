/*eslint-disable */
import React from "react"
import { Header, Card, Container, List } from "semantic-ui-react"
import BlogCard from "../components/BlogCard"
import jwtPic from "../images/jwt-spiderman.jpg"
import railsPic from "../images/sessions_num_correct.png"
import QoLPic from "../images/ctrlD-1.png"
// import asyncPic from '../images/call-back-hell.png'

const blogList = [
  {
    link:
      "https://medium.com/@phil.roth077/a-simple-guide-to-jwt-authorization-6efd62f71237",
    title: "A Simple guide to JWT Authorization",
    desc: "Walkthrough of what a JSON Web Token is and how to use it on the client-side.",
    pic: jwtPic
  },
  {
    link:
      "https://medium.com/@phil.roth077/rails-sessions-for-an-interactive-user-experience-b24bb35fd404",
    title: "Rails Sessions for an Interactive User Experience",
    desc: "Using sessions to understand server-side requrests in Rails.",
    pic: railsPic
  },
  {
    link:
      "https://medium.com/@phil.roth077/quality-of-life-coding-hacks-a0c510df36d",
    title: "Quality of Life Coding “Hacks”",
    desc: "Visual Studio Code shortcuts to improve workflow.",
    pic: QoLPic
  }
]

const mappedBlogList = blogList.map(blog => {
  return <BlogCard blog={blog} />
})
// c1: '#ffffff',
// c2: '#e4eaf3',
// c3: '#efe9e5',
// c4: '#c6aa99',
// c5: '#3a3836',

const styleBlog = { margin: "1% 10%" }
const BlogContainer = (props) => {
  const {links} = props
  return (
    <Container className="blog-container">
      <Header size="huge" textAlign="center">
        Blog Posts
      </Header>
      <Header size='small' as='a' href={links.blog}>
        Link to My Medium
      </Header>
      {/* AS CARDS */}
      {/* <Card.Group
        className="blog-list-container"
        itemsPerRow={2}
        style={styleBlog}
        centered
        textAlign="center"
      >
        {mappedBlogList}
      </Card.Group> */}
      {/* AS LIST */}
      <List
        className="blog-list-container"
        floated='left'
      >
        {mappedBlogList}
      </List>
    </Container>
  )
}

export default BlogContainer
