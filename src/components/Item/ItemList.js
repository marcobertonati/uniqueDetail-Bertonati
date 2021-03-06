import React from "react";
import Item from "./Item";
import './ItemList.css'

export default function ItemList({ item }) {
  return (
    <div className="itemList row container-fluid">

      {
      
      item.map((singleItem) => (

        <Item title={singleItem.title} image={singleItem.photo} key={singleItem.id} id={singleItem.id} />

      ))}
      
    </div>
  );
}
