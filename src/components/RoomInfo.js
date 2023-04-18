import React,{useState, useEffect} from 'react';
//import roomInfoData from './data/rooms.json'

const RoomInfo = () => {

      	const [roomsData , setRoomsData] = useState([]);
	
	const loadRoomsData = async() => {
		
		// Query the API Gateway
		const resp = await fetch('https://g11az0gxvi.execute-api.us-east-1.amazonaws.com/Production/Rooms');
		let jsonData = await resp.json();
		
		// Assign response data to our state variable
		
		setRoomsData(jsonData);
		
	}
	
	useEffect (() => {
		
		//Load the menu links data from API Gateway
		loadRoomsData();
	
		
	},[]);
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
              roomsData.map((room) =>
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