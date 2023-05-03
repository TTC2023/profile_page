import React from 'react'
import myPhoto from '../assets/images/IMG_5025.jpg';
import '../App.css';
import NavBar from './NavBar';

function Index() {
  return (
      <div>
        <NavBar/>
        <div className='profile-content'>
            <img src={myPhoto} alt="Tyler Correll" className="round-image" />
            <p>As an innovative Junior Front-End Developer, I have a strong foundation in Java, J2EE, HTML, and CSS. Graduating from a coding bootcamp, I've honed my skills in various languages and frameworks such as JavaScript, jQuery, Flask, React, Express, and Node.js. My practical experience in database technologies like SQL and MongoDB, as well as expertise in Java, Spring, Python, and AWS EC2, has helped me develop a well-rounded skillset.</p>
            <p>In addition to my technical abilities, I excel in client relations, analytical skills, and adaptability. My project management prowess, combined with my talent for creating user interfaces, allows me to thrive in any front-end web development team. My ability to improve organic search results and optimize SEO further showcases my capabilities.</p>
            <p>As a dedicated, self-motivated professional, I am prepared to excel in any front-end web developer role, creating seamless and engaging user experiences. My unique background as an entrepreneur in e-commerce gives me a strategic edge in understanding user experience and front-end implementation.</p>
        </div>
    </div>
  )
}

export default Index