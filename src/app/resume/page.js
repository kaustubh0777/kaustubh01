"use client"
import React from 'react'
import Particless from '../(components)/Particless'

const page = () => {
    return (
      <>
      <Particless/>
        <div className="portfolio-section">
        <h2 className=' flex justify-center items-center py-4 font-bold mx-4 text-4xl'>Resume</h2>
        <iframe
          src="/resume.pdf"
          width="100%"
          height="600"
          allow="fullscreen"
          title="My Portfolio PDF"
        />
      </div>
      </>
    )
}

export default page