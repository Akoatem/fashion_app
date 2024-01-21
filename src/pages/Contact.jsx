import React from 'react'
import NavBar from '../components/NavBar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <NavBar/>
      <Announcement/>
        <div style={{with:"25px", fontWeight:"400", fontSize:"40px", display:"flex", justifyContent:"center"}}>Contact Us</div> 
      <Footer/>
    </div>
  )
}

export default Contact