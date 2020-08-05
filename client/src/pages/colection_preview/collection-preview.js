import React from "react";
import "../colection_preview/collection-preview.style.css";
import CollectionItem from "../../components/collection-item/collection-item.js";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        // .filter((item, index) => index < 4)
        //.filter above to filter a number of items
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
