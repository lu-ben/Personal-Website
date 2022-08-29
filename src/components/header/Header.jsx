import React from 'react'
import './header.css'
import ME from '../../assets/DSCF3481.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
      <header id ='home'>
        <div className="container-glass header__container" >
          <h1>Ben Lu</h1>
          <h5>Fullstack Developer, Graphic Designer & Photographer</h5>
          <h5 className="skills"><strong>Tecnology & Skills:</strong> Java, C/C++, JS, React, HTML, CSS, Adobe Suite, Figma</h5>
          <HeaderSocials />
          <div className = "me"><img src = {ME} alt = 'Portrait' /></div>
        </div>
        </header>
    )
}

export default Header