/*eslint-disable */
import React from "react"
import { Image, Card, Container, List } from "semantic-ui-react"

const TechCard = props => {
  const { tech_name, tech_img } = props
  const cardStyle = { width: "80px", height: "80px" }
  return (
    <List.Item >
      <Image src={tech_img} style={cardStyle} />
      <List.Description>{tech_name}</List.Description>
    </List.Item>
  )
}

export default TechCard

