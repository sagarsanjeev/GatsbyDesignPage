import React from 'react';
import { LayoutHeader, SEO } from 'components';
import { Welcome } from 'containers';

const IndexPage = () => (
  <LayoutHeader>
    <SEO title='Welcome' />
    <Welcome />
  </LayoutHeader>
);

export default IndexPage;
