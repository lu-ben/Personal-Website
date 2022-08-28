import React from 'react'
import './photo.css'
import Gallery from "react-photo-gallery"
import { photos } from "./photos"



 
const Photo = () => {
  return (
    <section id='photo'>
      <Gallery photos={photos} direction={"column"}/>;
    </section>
  )
}

export default Photo