/*eslint-disable */
import React from "react"
import { List } from "semantic-ui-react"

const BlogCard = props => {
  const { blog } = props
  const styleItem = { margin: "5% 0" }

  return (
    <List.Item style={styleItem}>
      <List.Header as="h2">{blog.title}</List.Header>
      <List.List as="a" href={blog.link}>
        Link to Post
      </List.List>
      <List.Description>{blog.desc}</List.Description>
      <hr />
    </List.Item>
  )
}

export default BlogCard
