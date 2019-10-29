/*eslint-disable */
import React from 'react';
import { Document } from "react-pdf";
// import resumePDF from '../assets/Phil Roth Software Resume.pdf'

const ResumeContainer = () => {
  return (
    <div className='resume-container'>
      {/* <Document file={resumePDF} /> */}
      <Document file='../assets/Phil Roth Software Resume.pdf' />
    </div>
  )
}

export default ResumeContainer