import React from 'react';
import AutoCarousel from '../../components/AutoCarousel';

const DeveloperLogo = () => {
  return (
    <>
      <div
        className="m-auto flex justify-center p-4"
        id="section-developer-logo"
      >
        <div className="w-full" id="developer-container">
          <AutoCarousel />
        </div>
      </div>
    </>
  );
};

export default DeveloperLogo;
