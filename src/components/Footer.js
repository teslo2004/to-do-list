import React from 'react';

const Footer = ({ length }) => {
  return (
    <footer className="footer">
      {length !== 0 ? (
        <p>
          {' '}
          {length} List {length === 1 ? 'item' : 'items'}
        </p>
      ) : (
        <p>No List Items</p>
      )}
    </footer>
  );
};

export default Footer;
