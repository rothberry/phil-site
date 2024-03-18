/*eslint-disable */
import React, { useContext } from "react"
import { Document } from "react-pdf"
import { Context } from "../context/Context"

const ResumeContainer = () => {
	const {
		links: { resume },
	} = useContext(Context)

	// ? Resume px => 800 x 1035
	const resumeStyle = { height: "1035px", width: "100%", overflow: "auto" }
	if (true) {
		return <Document file="../assets/Phil Roth Software Engineer Resume.pdf" />
	} else {
		return (
			<div className="resume-container">
				<iframe id="resume-frame" src={resume} style={resumeStyle}></iframe>
			</div>
		)
	}
}

export default ResumeContainer
