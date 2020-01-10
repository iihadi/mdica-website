import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const PictureSlide = () => (
  <div>
  <AutoplaySlider
    className='pictureSlide'
    play={true}
    // should stop playing on user interaction
    interval={6000}
    bullets={false}
    buttons={false}


    >
    <div data-src= './assets/img/Mosque1.jpg' />
    <div data-src= 'http://www.mdica.org.uk/portals/0/Images/DSC04637.png' />
    <div data-src= 'http://www.mdica.org.uk/portals/0/Images/DSC04653.png' />
  </AutoplaySlider>
  </div>
)
