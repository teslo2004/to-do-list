import React from 'react';
import '../index.css';

const Headers = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};

Headers.defaultProps = {
  title: 'Default List',
};

export default Headers;
