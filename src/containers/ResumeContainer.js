/*eslint-disable */
import React, { useContext } from "react"
import { Context } from "../context/Context"

const ResumeContainer = () => {
	const {
		links: { resume },
	} = useContext(Context)

	// ? Resume px => 800 x 1035
	return (
		<div className="resume-container">
			<iframe className="resume-frame" src={resume}></iframe>
		</div>
	)
}

export default ResumeContainer
