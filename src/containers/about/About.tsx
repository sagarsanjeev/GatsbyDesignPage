import React from 'react';
import { Animated } from 'components';
import { Icon } from '@iconify/react';
import { Typography, Fade, Tooltip } from '@material-ui/core';

function About() {
  const iconList = [
    {
      name: 'Python',
      icon: 'logos:python',
    },
    {
      name: 'JavaScript',
      icon: 'logos:javascript',
    },
    {
      name: 'TypeScript',
      icon: 'logos:typescript-icon',
    },
    {
      name: 'C',
      icon: 'logos:c',
    },
    {
      name: 'C++',
      icon: 'logos:c-plusplus',
    },
    {
      name: 'Java',
      icon: 'logos:java',
    },
    {
      name: 'HTML',
      icon: 'logos:html-5',
    },
    {
      name: 'CSS',
      icon: 'logos:css-3',
    },
    {
      name: 'Bash',
      icon: 'logos:bash',
    },
    {
      name: 'Shell Script',
      icon: 'vscode-icons:file-type-powershell',
    },
    {
      name: 'MySQL',
      icon: 'logos:mysql',
    },
    {
      name: 'MSSQL',
      icon: 'simple-icons:microsoftsqlserver',
    },
    {
      name: 'Neo4J',
      icon: 'logos:neo4j',
    },
    {
      name: 'Pandas',
      icon: 'simple-icons:pandas',
    },
    {
      name: 'Numpy',
      icon: 'logos:numpy',
    },
    {
      name: 'OpenCV',
      icon: 'logos:opencv',
    },
    {
      name: 'Flask',
      icon: 'logos:flask',
    },
    {
      name: 'React',
      icon: 'logos:react',
    },
    {
      name: 'Angular',
      icon: 'logos:angular',
    },
    {
      name: 'NodeJS',
      icon: 'logos:nodejs',
    },
    {
      name: 'Material UI',
      icon: 'logos:material-ui',
    },
    {
      name: 'Bootstrap',
      icon: 'logos:bootstrap',
    },
    {
      name: 'GIT',
      icon: 'logos:git',
    },
    {
      name: 'Docker',
      icon: 'logos:docker',
    },
    {
      name: 'Gitlab',
      icon: 'logos:gitlab',
    },
    {
      name: 'AWS',
      icon: 'logos:aws',
    },
    {
      name: 'Google Cloud',
      icon: 'logos:google-cloud',
    },
    {
      name: 'Heroku',
      icon: 'logos:heroku',
    },
    {
      name: 'Jenkins',
      icon: 'logos:jenkins',
    },
    {
      name: 'Sonarqube',
      icon: 'logos:sonarqube',
    },
    {
      name: 'Vault',
      icon: 'logos:vault',
    },
    {
      name: 'Kubernetes',
      icon: 'logos:kubernetes',
    },
    {
      name: 'Vault',
      icon: 'logos:vault',
    },
    {
      name: 'Nginx',
      icon: 'logos:nginx',
    },
    {
      name: 'SASS',
      icon: 'logos:node-sass',
    },
    {
      name: 'NPM',
      icon: 'logos:npm',
    },
    {
      name: 'Redux',
      icon: 'logos:redux',
    },
    {
      name: 'Selenium',
      icon: 'logos:selenium',
    },
    {
      name: 'TS Node',
      icon: 'logos:tsnode',
    },
    {
      name: 'Webpack',
      icon: 'logos:webpack',
    },
    {
      name: 'Arduino',
      icon: 'logos:arduino',
    },
    {
      name: 'Axios',
      icon: 'logos:axios',
    },
    {
      name: 'Ansible',
      icon: 'logos:ansible',
    },
  ];
  return (
    <>
      <Fade in timeout={1000}>
        <Typography variant='h1' color='textPrimary'>
          <Animated>About</Animated>
        </Typography>
      </Fade>
      <br />
      <Typography
        color='textPrimary'
        style={{
          fontSize: '1.15rem',
          fontFamily: 'Roboto',
          fontWeight: 300,
          lineHeight: 1.1,
          letterSpacing: '0rem',
        }}
      >
        Experienced Full Stack Developer with a strong experience in Python and
        Angular/React and AI/NLP. Delivered NLP/Deep Learning-based solutions
        for a Large North American Bank for their financial and sales
        prospecting use cases with Accenture Innovation Labs. Holding a US
        patent in Enterprise Based Nature Langauge Processing. Passionate about
        developing complex applications that solve real-world problems
      </Typography>
      <br />
      <Typography
        variant='h4'
        color='textPrimary'
        style={{ fontWeight: 'bold' }}
      >
        <Animated>Technologies</Animated>
      </Typography>
      <br />
      {iconList.map(({ name, icon }) => (
        <Tooltip title={name}>
          <Icon
            style={{ marginLeft: '15px' }}
            icon={icon}
            width='45'
            height='45'
            inline={true}
          />
        </Tooltip>
      ))}
      <br />
      <br />
      <br />
    </>
  );
}
export default About;
