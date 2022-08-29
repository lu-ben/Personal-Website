import React from 'react'
import './nav.css'
import { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaPaintBrush } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'
import { BsBriefcaseFill } from 'react-icons/bs'
import { AiFillMessage } from 'react-icons/ai'
import { BsCameraFill } from 'react-icons/bs'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href = "#home" onClick = {() => setActiveNav('#home')} className = {activeNav === '#home' ? 'active' : ''}> <AiFillHome /> </a>
      <a href = "#projects" onClick = {() => setActiveNav('#projects')} className = {activeNav === '#projects' ? 'active' : ''}> <FaCode /> </a>
      <a href = "#experience" onClick = {() => setActiveNav('#experience')} className = {activeNav === '#experience' ? 'active' : ''}> <BsBriefcaseFill /> </a>
      <a href = "#design" onClick = {() => setActiveNav('#design')} className ={activeNav === '#design' ? 'active' : ''}> <FaPaintBrush /> </a>
      <a href = "#photo" onClick = {() => setActiveNav('#photo')} className ={activeNav === '#photo' ? 'active' : ''}> <BsCameraFill /> </a>
      <a href = "#contact" onClick = {() => setActiveNav('#contact')} className = {activeNav === '#contact' ? 'active' : ''}> <AiFillMessage /> </a>
    </nav>
  )
}

export default Nav