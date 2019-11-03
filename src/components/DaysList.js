import React from "react";

const DaysList = ({ taken }) => {
  return taken.map((item, key) => {
    return <div key={key}>{item.count}</div>;
  });
};

export default DaysList;
