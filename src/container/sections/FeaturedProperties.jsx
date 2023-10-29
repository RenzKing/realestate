import React from 'react';
import { Link } from 'react-router-dom';

const propertyData = [
  {
    name: 'Propety1',
    location: 'Location1',
    unitType: '1bedroom',
    price: 100,
  },
  {
    name: 'Propety2',
    location: 'Location2',
    unitType: '1bedroom',
    price: 100,
  },
  {
    name: 'Propety3',
    location: 'Location3',
    unitType: '1bedroom',
    price: 100,
  },
  {
    name: 'Propety4',
    location: 'Location4',
    unitType: '1bedroom',
    price: 100,
  },
  {
    name: 'Propety5',
    location: 'Location5',
    unitType: '1bedroom',
    price: 100,
  },
  {
    name: 'Propety6',
    location: 'Location6',
    unitType: '1bedroom',
    price: 100,
  },
];

const FeaturedProperties = () => {
  return (
    <>
      <div
        className="m-auto grid grid-cols-3 gap-4 px-12 py-6"
        id="featured-properties-container"
      >
        <div className="   object-fill " id="property-container">
          <Link to="/">
            <img className="" src="/img/property1.jpg" />
          </Link>
          <p>Location</p>
          <p>Unit Type</p>
          <p>Price</p>
        </div>
        <div className="object-fill" id="property-container">
          <Link to="/">
            <img src="/img/property2.jpg" />
          </Link>
          <p>Location</p>
          <p>Unit Type</p>
          <p>Price</p>
        </div>
        <div className="object-fill" id="property-container">
          <Link to="/">
            <img src="/img/property3.jpg" />
          </Link>
          <p>Location</p>
          <p>Unit Type</p>
          <p>Price</p>
        </div>
      </div>
      <div
        className="m-auto grid grid-cols-3 gap-4 px-12 pb-6 "
        id="featured-properties-container"
      >
        <div className="   object-fill " id="property-container">
          <Link to="/">
            <img className="" src="/img/property1.jpg" />
          </Link>
          <p>Location</p>
          <p>Unit Type</p>
          <p>Price</p>
        </div>
        <div className="object-fill" id="property-container">
          <Link to="/">
            <img src="/img/property2.jpg" />
          </Link>
          <p>Location</p>
          <p>Unit Type</p>
          <p>Price</p>
        </div>
        <div className="object-fill" id="property-container">
          <Link to="/">
            <img src="/img/property3.jpg" />
          </Link>
          <p>Location</p>
          <p>Unit Type</p>
          <p>Price</p>
        </div>
      </div>
    </>
  );
};

export default FeaturedProperties;
