/*eslint-disable */
import React from "react"
import { Card, Image, Header, List, Divider, Button, Icon } from "semantic-ui-react"

const BlogCard = (props) => {
	const { blog } = props
	const { title, link, desc, pic } = blog
	const styleItem = {
		margin: "3% 1%",
		// backgroundColor: "#e4eaf3"
	}

	return (
		// ! AS LIST
		// <List.Item style={styleItem}>
		//   <Header as="h2">{title}</Header>
		//   <List.List>
		//     <List.Description>{desc}</List.Description>
		//     <List.Item >
		//       <a href={link}>Link to Post</a>
		//     </List.Item>
		//   </List.List>
		//   <Divider horizontal>+</Divider>
		// </List.Item>

		// ! AS CARDS
		<Card raised style={styleItem} rounded>
			{/* <Image className={`proj-${title}`} src={pic} alt={title} wrapped ui={true} /> */}
			<Card.Content>
				<Card.Header textAlign="center">{title}</Card.Header>
				<br />
				<Card.Meta textAlign="center">
					<Button as="a" href={link} size={"small"}>
            <Icon name="medium"/>
					</Button>
				</Card.Meta>
				<br />
				<Card.Description>{desc}</Card.Description>
			</Card.Content>
		</Card>
	)
}

export default BlogCard
