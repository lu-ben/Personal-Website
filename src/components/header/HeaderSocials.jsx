import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {FaBehanceSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href = "http://linkedin.com" ><FaLinkedin /></a>
        <a href = "http://github.com" ><FaGithubSquare /></a>
        <a href = "http://behance.com"><FaBehanceSquare /></a>
    </div>
  )
}

export default HeaderSocials