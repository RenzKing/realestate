import React from 'react';
import { Link } from 'react-router-dom';

const propertiesData = [
  {
    name: 'Propety1',
    img: '/img/property1.jpg',
    location: 'Location1',
    unitType: '1bedroom',
    price: 100,
  },
  {
    name: 'Propety2',
    img: '/img/property2.jpg',
    location: 'Location2',
    unitType: '1bedroom',
    price: 100,
  },
  {
    name: 'Propety3',
    img: '/img/property3.jpg',
    location: 'Location3',
    unitType: '1bedroom',
    price: 100,
  },
  {
    name: 'Propety4',
    img: '/img/property1.jpg',
    location: 'Location4',
    unitType: '1bedroom',
    price: 100,
  },
  {
    name: 'Propety5',
    img: '/img/property2.jpg',
    location: 'Location5',
    unitType: '1bedroom',
    price: 100,
  },
  {
    name: 'Propety6',
    img: '/img/property3.jpg',
    location: 'Location6',
    unitType: '1bedroom',
    price: 100,
  },
  {
    name: 'Propety7',
    img: '/img/property1.jpg',
    location: 'Location7',
    unitType: '1bedroom',
    price: 100,
  },
  {
    name: 'Propety8',
    img: '/img/property2.jpg',
    location: 'Location8',
    unitType: '1bedroom',
    price: 100,
  },
  {
    name: 'Propety9',
    img: '/img/property3.jpg',
    location: 'Location9',
    unitType: '1bedroom',
    price: 100,
  },
  {
    name: 'Propety10',
    img: '/img/property1.jpg',
    location: 'Location10',
    unitType: '1bedroom',
    price: 100,
  },
  {
    name: 'Propety11',
    img: '/img/property2.jpg',
    location: 'Location11',
    unitType: '1bedroom',
    price: 100,
  },
  {
    name: 'Propety12',
    img: '/img/property3.jpg',
    location: 'Location12',
    unitType: '1bedroom',
    price: 100,
  },
];

console.log(propertiesData);

const FeaturedProperties = () => {
  const properties = propertiesData;

  return (
    <>
      <div className=" m-auto  px-12 py-6" id="featured-properties-container">
        <ul className=" flex flex-wrap justify-center gap-4 ">
          {properties.map((property) => (
            <Property propertyList={property} key={property.name} />
          ))}
        </ul>
      </div>
    </>
  );
};

function Property({ propertyList }) {
  return (
    <>
      <div>
        <li className="w-52 ">
          <img
            className="rounded-lg py-1 transition-transform duration-300 ease-in-out hover:scale-110"
            src={propertyList.img}
            alt={propertyList.name}
          />
          <h3>{propertyList.name}</h3>
          <p>{propertyList.location}</p>
          <p>{propertyList.unitType}</p>
          <p>{propertyList.price}</p>
        </li>
      </div>
    </>
  );
}

export default FeaturedProperties;
