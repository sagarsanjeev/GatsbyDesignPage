import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Welcome, About, Experience, Projects } from 'containers';
import { Layout, Header } from 'components';

function IndexPage() {
  const SEL = 'custom-section';
  const SECTION_SEL = `.${SEL}`;
  const fullpages = [
    {
      Tag: Welcome,
    },
    {
      Tag: About,
    },
    {
      Tag: Experience,
    },
    { Tag: Projects },
  ];
  return (
    <div className='App'>
      <Header />
      <ReactFullpage
        debug={false}
        navigation={true}
        licenseKey='YOUR_KEY_HERE'
        anchors={['Home', 'About', 'Experience']}
        sectionSelector={SECTION_SEL}
        render={(comp) => (
          <ReactFullpage.Wrapper>
            {fullpages.map(({ Tag }, id) => (
              <div key={id} className={SEL}>
                <Layout>
                  <Tag />
                </Layout>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
      <br /> <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default IndexPage;
