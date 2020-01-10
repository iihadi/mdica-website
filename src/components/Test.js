
import React from 'react';
import { Carousel }from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`

.carousel,.item,.active{
height:100%;
}
  .carousel-inner{
height:100%;
}

   .container {
    height: 300px,
    width: 100%;
  }

  .Select-menu-outer{top: auto; bottom: 100%}

  .carousel {
    height: 100vh;
    width: fill;
    zoom: 100%;
    overflow:hidden;
}

.carousel .carousel-inner {
    height:100%;
}

  .carousel-item {
    height: 100vh;
    min-height: 300px;
    background: no-repeat center center scroll;
    --webkit-background-size:cover;
    background-size: cover;
  }

  `;


export const PictureSlide = () => (
  <Styles>
  <Carousel>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={require("./assets/img/Mosque1.jpg")}
    alt="First slide"
  />
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={require("./assets/img/Mosque2.jpg")}
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={require("./assets/img/Mosque3.jpg")}
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
</Styles>
)
