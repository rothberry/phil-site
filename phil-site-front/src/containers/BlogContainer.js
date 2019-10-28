/*eslint-disable */
import React from "react"
import { Header, List } from "semantic-ui-react"

const blogList = [
  {
    link:
      "https://medium.com/@phil.roth077/a-simple-guide-to-jwt-authorization-6efd62f71237",
    title: "A Simple guide to JWT Authorization",
    desc: "kwtajhaslkvjds"
  },
  {
    link:
      "https://medium.com/@phil.roth077/rails-sessions-for-an-interactive-user-experience-b24bb35fd404",
    title: "Rails Sessions for an Interactive User Experience",
    desc: "asgfjasaskhfvaskf"
  },
  {
    link:
      "https://medium.com/@phil.roth077/quality-of-life-coding-hacks-a0c510df36d",
    title: "Quality of Life Coding “Hacks”",
    desc: "akhfgsdakfjkdshfjs"
  }
]

const mappedBlogList = blogList.map(blog => {
  return (
    <List.Item>
      <List.Header as="a" href={blog.link}>
        {blog.title}
      </List.Header>
      <List.Description>{blog.desc}</List.Description>
    </List.Item>
  )
})
const BlogContainer = () => {
  return (
    <div className="blog-container">
      <Header size="huge">Blog</Header>
      <List
        className="blog-list-container"
        size="large"
        divided
        verticalAlign="middle"
        floated="left"
        textAlign="left"
      >
        {mappedBlogList}
      </List>
    </div>
  )
}

export default BlogContainer
