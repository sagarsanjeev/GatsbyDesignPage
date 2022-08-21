import React from 'react';
import { LayoutHeader, SEO } from 'components';
import { Welcome } from 'containers';

const HomePage = () => (
  <LayoutHeader>
    <SEO title='Welcome' />
    <Welcome />
  </LayoutHeader>
);

export default HomePage;
