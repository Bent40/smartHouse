import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "./Title";

export default function AddRoom(props) {
  const [room, setRoom] = useState({
    type: -1,
    roomName: "",
    color: "white",
    appliances: [],
  });
  const navigator = useNavigate();
  const validateRoom = () => {
    if (
      room.type !== -1 &&
      room.roomName !== "" &&
      /^[A-Za-z0-9]*$/.test(room.roomName)
    )
      props.addRoom(room);
    else window.alert("ERROR");
    navigator("/");
  };
  return (
    <div className="wrapper">
      <Title text="Add A Room" />
      <div>
        <select
          id="type"
          onChange={(e) =>
            setRoom({
              type: e.target.value,
              roomName: room.roomName,
              color: room.color,
              appliances: [],
            })
          }
        >
          <option value={-1}>בחר חדר חדש</option>
          <option value={"חדר שינה"}>חדר שינה</option>
          <option value={"שירותים"}>שירותים</option>
          <option value={"מטבח"}>מטבח</option>
        </select>
        <input
          onChange={(e) =>
            setRoom({
              type: room.type,
              roomName: e.target.value,
              color: room.color,
              appliances: [],
            })
          }
          placeholder="שם החדר"
        />
        <input
        type='color'
          onChange={(e) =>
            setRoom({
              type: room.type,
              roomName: room.roomName,
              color: e.target.value,
              appliances: [],
            })
          }
          placeholder="צבע החדר"
        />
        <button onClick={validateRoom}>הוסף</button>
      </div>
    </div>
  );
}
