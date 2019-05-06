import React from "react";

const ListItem = props => {
  return (
    <li>
      {props.item.description}
      <br />
      {Object.keys(props.item).map((key, index) => (
        <span>{props.item[key].language}</span>
      ))}
    </li>
  );
};

export default ListItem;
