"use client";

import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useScreenResolution } from "components/atoms/useScreenResolution";
import Image from "components/atoms/image";
import SlideOne from "../../../../public/img/banner/slide.jpeg";
import SlideTwo from "../../../../public/img/banner/slide1.jpeg";
import SlideThree from "../../../../public/img/banner/slide2.jpg";
import SlideFour from "../../../../public/img/banner/slide3.jpg";
import SlideFive from "../../../../public/img/banner/slide4.jpg";
import SlideSix from "../../../../public/img/banner/slide5.jpg";

const cardData = [
  {
    id: 1,
    image: SlideOne,
    },
  {
    id: 2,
    image: SlideTwo,
    },
  {
    id: 3,
    image: SlideThree,
    },
  {
    id: 4,
    image: SlideFour,
    },
  {
    id: 5,
    image: SlideFive,
    },
  {
    id: 6,
    image: SlideSix,
    },
  // Add more cards as needed
];

const CarouselContainer = styled.div`
  width: 100%;
    .slick-arrow {
    z-index: 10;
    color: #fff;
    display: none !important;
  }

  @media screen and (max-width: 900px) {
    margin: 2rem auto;
  }
`;

const CardWrapper = styled.div`
  padding: 0 1rem; 
  box-sizing: border-box; 
`;



const Wrap = styled.div`
  width: 100%;
`;


export const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrow: false,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
      <CarouselContainer>
            <Wrap>
              <Slider {...settings}>
                {cardData.map((card) => (
                  <CardWrapper key={card.id}>
                      <Image src={card.image} alt="img" borderRadius="16px" styles={{borderRadius: "16px"}} />
                  </CardWrapper>
                ))}
              </Slider>
            </Wrap>
      </CarouselContainer>

     
  );
};
