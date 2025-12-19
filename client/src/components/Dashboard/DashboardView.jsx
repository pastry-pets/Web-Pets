
import React from 'react';

import Skills from './Skills';

const DashboardView = (props) => {
  return (

    <div style={{ border: '1px solid black', marginTop: '5px' }}>
      <p>
        folder thing goes here
      </p>
      <Skills skills={props.skillData}/>
    </div>
      // <Statuses /> or <Interactions /> or <Skills /> depending on state view
  );
};

export default DashboardView;
