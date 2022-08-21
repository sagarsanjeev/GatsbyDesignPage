import React from 'react';
import { Animated, ExperienceCard } from 'components';
import { Typography, Fade } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Row, Col } from 'reactstrap';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import accenture from 'images/accenture-logo.png';
import dell from 'images/dell-logo.svg';
import iitb from 'images/iit-bombay.png';
import kiit from 'images/kiit-logo.svg';
import idea from 'images/vi-logo.svg';

function Experience() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const experienceData = [
    {
      role: 'Software Engineer 2',
      company: 'Dell Technologies',
      type: 'dell',
      companylogo: dell,
      date: 'September 2021 – Present',
      link: 'https://www.delltechnologies.com/',
      desc: 'Working on a Enterprise Application that provides a LEGO based experience to the users and helps them creating and modifying the data pipelines for their application as per the Standards',
      descBullets: ['A', 'B'],
      location: 'Bangalore, India',
      techStack: ['React', 'TypeScript', 'JavaScript', 'MS-SQL'],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Accenture',
      type: 'accenture',
      companylogo: accenture,
      date: 'April 2018 – September 2021',
      link: 'https://www.accenture.com/in-en/',
      desc: "Worked as Full Stack Developer in Data Governance in Risk Team, building and maintaining an enterprise application for client, that scans, manages and handles metadata and data lineage of many LOB's of the bank",
      descBullets: [
        'Developed a System for Translation of Technical Data Transformations into plain English Language using NLP Concepts that saved around 350 person hours and translated around 250K Transformations.',
        'Managed Fuzzy Search Tool that was built around NLP grammar construct for querying databases using natural language without having to construct an SQL query and filters data from around 23 Million Records',
        'Managed the automation of the regulatory [FFIEC (4 Reports) and 10Q (3 Schedules)] reports and linking of the same to Metadata using NLP for Regulatory Exams',
        'Metadata Visualization using Python libraries like networkx and JavaScript libraries like D3.js',
        'Managed the implementation of Graph Algorithms to find the Centrality, Anomalies and Modularity of the Graph',
        'Applied NLP to articles scraped from the internet to extract meaningful information using Open information extraction to develop Artificial Intelligence based Search System for Adverse Media Checks (Knowledge Graph)',
        'Developed and Managed the Queue Based Reporting Module of the Application Independently',
        'Selected as the Member for Quick POC Development for Client Demos in Accenture',
        'Conducted training sessions on Python/ UNIX.',
      ],
      location: 'Hyderabad, Bangalore India',

      techStack: [
        'Python',
        'Angular',
        'Flask',
        'Neo4j',
        'RDMS',
        'NLP',
        'Quartz',
        'Jenkins',
      ],
    },
    {
      role: 'Intern',
      company: 'I.I.T. Bombay',
      companylogo: iitb,
      type: 'iit',
      date: 'May 2017 – June 2017',
      link: 'https://www.iitb.ac.in/',
      desc: 'Discrete Event Simulation of Computer Networks The Main Outcome of this project is Simulation of Networks/Topologies in Virtual Enviroment before practical implementaion, So that the problems can found out and be solved in a timely manner It also simplifies the development using new technologies that facilitate the creation of a network protocols etc.',
      location: 'Mumbai, India',
      techStack: ['Python', 'Numpy', 'Scipy'],
    },
    {
      role: 'Junior Research Fellow',
      company: 'DL-5 IOT LAB',
      companylogo: kiit,
      type: 'kiit',
      date: 'December 2016 - March 2018',
      link: 'https://sagarsanjeev.com/#experience',
      desc: 'Working on a Enterprise Application that provides a LEGO based experience to the users and helps them creating and modifying the data pipelines for their application as per the Standards',
      descBullets: [
        'Managed the Server Side of Lab including the Database, Implemented Load Balancing and Clustering on the Servers',
        "Created IOT POC's and Implemented Data Analytics over the data collected from the sensors",
      ],
      location: 'KIIT University Bhubaneswar, India',
      techStack: [
        'IOT',
        'AD-RMS',
        'Server Side Management',
        'Clustering',
        'Load Balancing',
      ],
    },
    {
      role: 'Intern',
      company: 'Idea Cellular Limited',
      companylogo: idea,
      type: 'idea',
      date: 'May 2016 - June 2016',
      link: 'https://www.myvi.in/',
      desc: "At Idea Cellular Limited, The course of work was to understand the newly implemented service in the branch-office of Active Directory Rights Management Service (AD-RMS) and then make then train the staff about the different features and demonstrate it to them so that they use it and keep the digital documents encryted inside the company's network",
      location: 'Patna, India',
      techStack: ['Active Directory Rights Management Service (AD-RMS)'],
    },
  ];

  // const settings = {
  //   dots: true,
  //   arrows: true,
  //   infinite: true,
  //   adaptiveHeight: true,

  //   fade: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   nextArrow: <FaAngleDoubleRight color='black' fontSize='1.5em' />,
  //   prevArrow: <FaAngleDoubleLeft color='black' fontSize='1.5em' />,
  // };

  return (
    <>
      <Fade in timeout={1000}>
        <Typography
          variant='h4'
          color='textPrimary'
          style={{ fontWeight: 'bold' }}
        >
          <Animated>Experience</Animated>
        </Typography>
      </Fade>
      <br />
      <Row className='p-0'>
        <Carousel responsive={responsive} showDots={true}>
          {experienceData.map((data, i) => {
            return (
              <Col className='p-0'>
                <ExperienceCard key={i} isDark={false} cardInfo={data} />
              </Col>
            );
          })}
        </Carousel>
      </Row>
      <br />
    </>
  );
}
export default Experience;
