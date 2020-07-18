import React from "react";
import "./collection-overview.style.css";
import CollectionPreview from "../../pages/colection_preview/collection-preview";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherPropsFromCollection }) => (
      <CollectionPreview key={id} {...otherPropsFromCollection} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
