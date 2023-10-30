import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="py-6 text-center">
        Current date and time-
        {new Date().toLocaleString()}
      </div>
    </>
  );
};

export default Footer;
