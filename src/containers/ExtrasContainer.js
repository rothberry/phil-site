/*eslint-disable */
import React, { useContext } from "react"
import { Header, Container, Image, Card, Grid, Icon } from "semantic-ui-react"
import { Context } from "../context/Context"
import logo from "../images/rothberry.jpg"
import audiusLogo from "../images/tech_images/audius.png"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import SCEmbedCard from "../components/SCEmbedCard"

const ExtrasContainer = () => {
	const { soundcloud } = useContext(Context)

	const styleCont = { margin: "1% 10%" }

	return (
		<Container className="extras-container" style={styleCont}>
			<Grid columns={2}>
				<Grid.Column>
					<Header textAlign="center">
						{/* Extra Curriculars */}
						<Image
							src={logo}
							centered
							circular
							alt="rothberry"
							style={{ height: "50%", width: "50%" }}
							size="small"
						/>
						<br />
						<a href="https://soundcloud.com/rothberry">
							<Icon name="soundcloud" size="large" color="orange" />
							<span> Soundcloud</span>
						</a>{" "}
						/{" "}
						<a href="https://audius.co/rothberry">
							<Image src={audiusLogo} size="mini" inline />
							<span> Audius</span>
						</a>
					</Header>
				</Grid.Column>
				<Grid.Column>
					<Header textAlign="center" size="large">
						Berry Mixes
					</Header>

					<iframe
						src="https://audius.co/embed/playlist/DrjyQ?flavor=card"
						width="100%"
						height="300"
						allow="encrypted-media"
						style={{ border: "none" }}
					></iframe>
				</Grid.Column>
			</Grid>
			<Card.Group itemsPerRow={2} textAlign="center" centered>
				<SCEmbedCard
					src={
						"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/789763329&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
					}
					link={"/sets/rothberry-live-edits"}
					title={"Rothberry Live Edits"}
				/>
				<SCEmbedCard
					src={
						"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1787000196&color=%23bf501a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
					}
					title={"Rothberry Remixes"}
					link={"/sets/remixes"}
				/>
				<SCEmbedCard
					src={
						"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/46200971&color=%23bf501a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
					}
					title={"Rothberry Originals"}
					link={"/sets/original-mixes"}
				/>
				<SCEmbedCard
					src={
						"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/299888527&color=%23bf501a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
					}
					title={"BDP's Trash Stache"}
					link={"/sets/trash-stache"}
				/>
			</Card.Group>
		</Container>
	)
}

export default ExtrasContainer
