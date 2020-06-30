import React from "react";
import "./collection-item.style.css";

const CollectionItem = ({ id, name, imageUrl, price }) => (
  <di v className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </di>
);

export default CollectionItem;
