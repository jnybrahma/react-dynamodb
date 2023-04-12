import React from 'react';
import HotelInfo from './HotelInfo'
import Welcome from './Welcome.js'
import RoomInfo from './RoomInfo';

const Main = () => {
  return (
    <main id="wrapper">
      <Welcome />
      <HotelInfo />
      <RoomInfo />

    </main>
  );
}

export default Main;