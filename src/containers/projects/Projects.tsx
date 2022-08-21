import React from 'react';
import { Animated, ExperienceCard } from 'components';
import { Typography, Fade } from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

function Projects() {
  return (
    <>
      <Fade in timeout={1000}>
        <Typography
          variant='h4'
          color='textPrimary'
          style={{ fontWeight: 'bold' }}
        >
          <Animated>Projects</Animated>
        </Typography>
      </Fade>
    </>
  );
}
export default Projects;
