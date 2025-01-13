import { mount } from 'dashboard/DashboardApp';
import React, {useRef, useEffect } from 'react';


export default () => {
  const ref = useRef(null);
  
  useEffect(() => {
    mount(ref.current);

  }, []); // empty array will allow only run once.
  
  return <div ref={ref} />;
};
