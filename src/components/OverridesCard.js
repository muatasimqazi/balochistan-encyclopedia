import React from 'react';
import OverridesClassNames from './OverridesClassNames';

// We can use OverridesClassNames over and over.
function OverridesCard(props) {
  const content = props;
  return <OverridesClassNames content={content}>Meet</OverridesClassNames>;
}

export default OverridesCard;