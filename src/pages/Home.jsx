import React from 'react';
import home from '../images/SunSpell_Home.jpg';
import { PhotoFrame } from '../components';
import '../App.css';

export default function Home() {
  return (
    <>
      <PhotoFrame photo={home} />
      <h1>
        SALT LAKE CITY {/* <br /> */}
        RECORDING SERVICES
      </h1>

    </>
  );
}

