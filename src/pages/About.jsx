import React from 'react'
import NavBar from '../components/NavBar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>
      <NavBar/>
      <Announcement/>
        <div style={{with:"25px", fontWeight:"400", fontSize:"40px", display:"flex", justifyContent:"center"}}>About</div>
        <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default About