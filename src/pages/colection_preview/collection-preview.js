import React from "react";
import "../colection_preview/collection-preview.style.css";
import CollectionItem from "../../components/collection-item/collection-item.js";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherProps }) => (
          <CollectionItem key={id} {...otherProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
