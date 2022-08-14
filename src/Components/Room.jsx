import React from "react";
import { useState } from "react";
import Title from "./Title";

export default function Room(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [appliance, setAppliance] = useState({
    itemName: "מזגן",
    active: false,
  });

  const insertAppliance = () => {
    if (props.setAppliances(appliance, props.index)) {
      setShowMenu(false);
    } else window.alert("ERROR");
  };

  return (
    <div className="wrapper">
      <Title text="Smart House" />
      <div style={{ display: showMenu ? "block" : "none" }}>
        <select
          onChange={(e) => {
            setAppliance({ itemName: e.target.value, active: false });
          }}
        >
          <option>מזגן</option>
          <option
            style={{
              display: props.room.type === "שירותים" ? "inline" : "none",
            }}
          >
            דוד
          </option>
          <option>מערכת סטריאו</option>
          <option>מנורה</option>
        </select>
        <button
          onClick={() => {
            insertAppliance();
          }}
        >
          הוסף
        </button>
      </div>
      <div
        className="room-content"
        style={{ display: showMenu ? "none" : "flex" }}
      >
        <div className="room-details">
          <span>שם החדר:{props.room.roomName}</span>
          <span>סוג החדר:{props.room.type}</span>
        </div>
        <div className="appliances">
          {props.room.appliances.map((item, index) => {
            return (
              <div>
                <span
                  onClick={() => {
                    props.changeColor(
                      { itemName: item.itemName, active: !item.active },
                      index,
                      props.index
                    );
                  }}
                  style={{ backgroundColor: item.active ? "green" : "red" }}
                >
                  {item.itemName}
                </span>
                <button onClick={() => props.removeItem(index, props.index)}>
                  X
                </button>
              </div>
            );
          })}
        </div>
        <button
          className="add-appliance"
          onClick={() => {
            setShowMenu(true);
          }}
        >
          הוסף מוצר
        </button>
      </div>
    </div>
  );
}
