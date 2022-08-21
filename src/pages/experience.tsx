import React from 'react';
import { LayoutHeader, SEO } from 'components';
import { Experience } from 'containers';

const ExperiencePage = () => (
  <LayoutHeader>
    <SEO title='Experience' />
    <Experience />
  </LayoutHeader>
);

export default ExperiencePage;
