import "./App.css";
import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AddRoom from "./Components/AddRoom";
import Room from "./Components/Room";

function App() {
  const [rooms, setRooms] = useState(
    JSON.parse(localStorage.getItem("SmartHouse")) || []
  );

  const addRoom = (Room) => {
    localStorage.setItem("SmartHouse", JSON.stringify([...rooms, Room]));
    setRooms([...rooms, Room]);
  };

  const setAppliances = (appliance, index) => {
    let newRooms = [...rooms];
    console.log();
    if (
      newRooms[index].appliances.length < 5 &&
      newRooms[index].appliances.find((e) => e.itemName === "מערכת סטריאו") ===
        undefined
    ) {
      newRooms[index].appliances.push(appliance);
      return true;
    } else return false;
  };

  const changeColor = (item, index, roomIndex) => {
    let temprooms = [...rooms];
    temprooms[roomIndex].appliances[index] = item;
    setRooms(temprooms);
  };
  const removeItem = (index, roomIndex) => {
    let temprooms = [...rooms];
    temprooms[roomIndex].appliances.splice(index, 1);
    setRooms(temprooms);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home rooms={rooms} />} />
          <Route path="/addRoom" element={<AddRoom addRoom={addRoom} />} />
          {rooms.map((item, index) => {
            return (
              <Route
                path={"room" + item.roomName}
                element={
                  <Room
                    room={item}
                    index={index}
                    setAppliances={setAppliances}
                    changeColor={changeColor}
                    removeItem={removeItem}
                  />
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
