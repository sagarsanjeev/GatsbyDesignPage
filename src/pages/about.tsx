import React from 'react';
import { LayoutHeader, SEO } from 'components';
import { About } from 'containers';

const AboutPage = () => (
  <LayoutHeader>
    <SEO title='About' />
    <About />
  </LayoutHeader>
);

export default AboutPage;
