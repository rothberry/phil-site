/*eslint-disable */
import React, { useContext } from "react"
import { Context } from "../context/Context"

const ResumeContainer = () => {
	const {
		links: { resume },
	} = useContext(Context)

	return (
		<div className="resume-div">
			<iframe id="resume-frame" src={resume}></iframe>
			{/* <iframe id='resume-frame' src={"../assets/resume.pdf"} style={resumeStyle}></iframe> */}
		</div>
	)
}

export default ResumeContainer
