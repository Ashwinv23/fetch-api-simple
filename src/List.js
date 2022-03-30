import React from "react";
import ItemList from "./ItemList";

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <ItemList item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default List;
