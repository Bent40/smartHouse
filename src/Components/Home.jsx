import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "./Title";

export default function Home(props) {
  const navigator = useNavigate();
  return (
    <div className="wrapper">
      <Title text="Smart House" />
      <div className="room-container">
        {props.rooms.map((item) => {
          return (
            <div>
              <div
                onClick={() => {
                  console.log(`/room${item.roomName}`);
                  navigator(`/room${item.roomName}`);
                }}
                style={{
                  backgroundColor: item.color,
                  border: "5px solid black",
                  cursor: "pointer",
                }}
              >
                <span>{item.roomName}</span>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="new-room-btn"
        onClick={() => {
          navigator("/addRoom");
        }}
      >
        +
      </button>
    </div>
  );
}
