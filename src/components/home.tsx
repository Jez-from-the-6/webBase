import * as React from 'react';
import LandingSliders from '../../shared/components/sliders';
import DOC from '../pages/Home.mdx';

const Frame = (...children): JSX.Element => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ width: '100%', paddingBottom: '5%' }}></div>
      <DOC />
      <div>{LandingSliders()}</div>
    </div>
  );
};

export default Frame;
