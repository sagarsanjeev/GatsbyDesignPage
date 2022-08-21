import React from 'react';
import { LayoutHeader, SEO } from 'components';
import { Projects } from 'containers';

const ProjectsPage = () => (
  <LayoutHeader>
    <SEO title='Projects' />
    <Projects />
  </LayoutHeader>
);

export default ProjectsPage;
