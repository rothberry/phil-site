import React, { useContext } from "react"
import { Card } from "semantic-ui-react"
import { Context } from "../context/Context"

const SCEmbedCard = ({
	src,
	link,
	title,
	width = "100%",
	height = "300",
	site = "sc",
}) => {
	const { soundcloud } = useContext(Context)
	// <iframe src=https://audius.co/embed/playlist/DrjyQ?flavor=card width="100%" height="480" allow="encrypted-media" style="border: none;"></iframe>
	return (
		<Card className={"embeded-card-${title}"} color="blue">
			<iframe
				width={width}
				height={height}
				// backgroundColor="red"
				frameborder="no"
				allow="autoplay"
				allowtransparency={true}
				src={src}
				title={title}
			></iframe>
			<div className={"embeded-${site}"}>
				{/* <a
					href={soundcloud}
					title="rothberry 🍍"
					// target="_blank"
					className="embededStyleLink"
				>
					<span role="img" aria-label="pineapple">
						rothberry 🍍
					</span>
				</a>{" "}
				· */}
				{/* <a
					href={soundcloud + link}
					title={title}
					// target="_blank"
					className="embededStyleLink"
				>
					Rothberry Live Edits
				</a> */}
			</div>
		</Card>
	)
}

export default SCEmbedCard
