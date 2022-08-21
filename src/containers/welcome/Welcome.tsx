import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { TypeAnimation } from 'react-type-animation';
import { Animated, LinkList } from 'components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Welcome = () => (
  <section>
    <Typography variant='h3' color='textPrimary'>
      Hi I'm
    </Typography>
    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary'>
        <Animated>Sagar Sanjeev</Animated>
      </Typography>
    </Fade>
    <TypeAnimation
      sequence={[
        'A Full Stack Developer',
        1000,
        'A Data Engineer',
        1000,
        'A Software Engineer',
        1000,
        'A DevOps Engineer',
        1000,
        '',
        500,
      ]}
      style={{
        fontSize: '1.75rem',
        fontFamily: 'Roboto',
        fontWeight: 300,
        lineHeight: 1.1,
        letterSpacing: '0rem',
      }}
      wrapper='h1'
      repeat={Infinity}
    />
    <Typography variant='h3' color='textPrimary'>
      Self-driven, quick starter, passionate programmer with a curious mind who
      enjoys solving a complex and challenging real-world problems.
    </Typography>
    <LinkList
      links={[
        {
          to: 'https://www.linkedin.com/in/sagarsanjeev/',
          text: 'LinkedIn',
          Icon: FaLinkedin,
          newTab: true,
        },
        {
          to: 'https://github.com/sagarsanjeev/',
          text: 'Github',
          Icon: FaGithub,
          newTab: true,
        },
      ]}
    />
    <br /> <br />
    <br /> <br />
  </section>
);

export default Welcome;
