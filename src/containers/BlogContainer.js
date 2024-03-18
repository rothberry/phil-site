/*eslint-disable */
import React, { useContext } from "react"
import { Header, Container, Card, List } from "semantic-ui-react"
import BlogCard from "../components/BlogCard"
import { Context } from "../context/Context"

const BlogContainer = () => {
  const { blogList } = useContext(Context)

  const mappedBlogList = blogList.map((blog) => {
    return <BlogCard blog={blog} />
  })
  const styleCont = { margin: "1% 10%" }

  return (
    <Container className='blog-container' style={styleCont}>
      <Header size='huge' textAlign='center'>
        Blog Posts
      </Header>
      {/* AS CARDS */}
      <Card.Group
        className='blog-list-container'
        itemsPerRow={1}
        // style={styleBlog}
        centered
        textAlign='center'
      >
        {mappedBlogList}
      </Card.Group>
      {/* AS LIST */}
      {/* <List className='blog-list-container' floated='left'>
        {mappedBlogList}
      </List> */}
    </Container>
  )
}

export default BlogContainer
