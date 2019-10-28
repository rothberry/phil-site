/*eslint-disable */
import React from "react"
import { Header, List } from "semantic-ui-react"
import BlogCard from "../components/BlogCard"

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
  return <BlogCard blog={blog} />
})
const styleList = {}
const BlogContainer = () => {
  return (
    <div className="blog-container">
      <Header size="huge" textAlign="center">
        Blog Posts
      </Header>
      <List
        bulleted
        className="blog-list-container"
        size="large"
        // verticalAlign="middle"
        floated="left"
        textAlign="left"
        style={styleList}
      >
        {mappedBlogList}
      </List>
    </div>
  )
}

export default BlogContainer
