import React, { useState } from 'react';
import {motion} from 'framer-motion'

import Carousel from 'react-bootstrap/Carousel';


  function CarouselFadeExample() {
    return (
      <div className='car-slider'>
       <motion.h1 className='feature-movies' initial={{y:-250}}
      animate={{y:-10}}
      transition={{delay:0.5}}>Featured Movies</motion.h1>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}> 
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://serving.photos.photobox.com/846611658065acd98d83fdf9417b10bac5af5ab70abf93ae38472bfffa124c85b0ec4e2a.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5 className="car-title">Kantara</h5>
            <p className="car-para">When greed paves the way for betrayal, scheming and murder, a young tribal reluctantly dons the traditions of his ancestors to seek justice.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://serving.photos.photobox.com/17207452b3a7f24236210acca3f04dcc898245157561cb65bd7f2ba58f43f810073f5445.jpg"  
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5 className="car-title">The Ant-man</h5>
            <p className="car-para">Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://serving.photos.photobox.com/44231440ba91191d52ee7e14aa8c0edf69fbae94a3bbb4962854ee02d17603c9478877ea.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 className="car-title">The Good the Bad and the Ugly</h5>
            <p className="car-para">
              During the Civil War, two men, Blondie and Tuco, form an uncomfortable alliance while looking for treasure.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://serving.photos.photobox.com/33259940439bd722b1cbf4d7a96d1f916aff13aa25c1a3d457f6edffe0f807bb2614c14d.jpg"  
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5 className="car-title">Jurassic Park</h5>
            <p className="car-para">Jurassic Park is a 1993 American science fiction action film directed by Steven Spielberg</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      </motion.div>
      </div>
    );
  }
  
  export default CarouselFadeExample;