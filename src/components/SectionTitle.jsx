import React from 'react';

const sectionTitles = [
  {
    title: 'Featured Properties',
    description: 'description about featured proeprties',
  },
  {
    title: 'Properties for sale',
    description: 'description about properties for sale',
  },
  {
    title: 'Properties for lease',
    description: 'description about properties for lease',
  },
];

const sectionTitle = () => {
  return (
    <>
      <div
        className="section-feature-properties m-auto  w-full bg-gray-200 p-10 text-center"
        id=""
      >
        <h2 className="text-3xl font-semibold">Section Title</h2>
      </div>
    </>
  );
};

export default sectionTitle;
