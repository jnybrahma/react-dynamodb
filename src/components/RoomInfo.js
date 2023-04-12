import React from 'react';
import roomInfoData from './data/rooms.json'

const RoomInfo = () => {
  return (
    <div className="scene" id="rooms">
          <article className="content">
      <h1>Room Info</h1>
      </article>
      <article id="roominfo">
        <section className="checklist" id="roomsinfo">
          <h2>Rooms and Delux Suites</h2>
          <p>Our rooms are designed to make your stay comfortable, and your experience relax.</p>
          <ul>
            {
              roomInfoData.map((room) =>
                <li>{room.name}</li>
              )
            }
          </ul>
        </section>
        </article>


    </div>
  )
  }

export default RoomInfo;