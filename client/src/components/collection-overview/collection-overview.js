import React, { Profiler } from "react";
import "./collection-overview.style.css";
import CollectionPreview from "../../pages/colection_preview/collection-preview";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    <Profiler
      id="collectionOverview"
      onRender={(id, phase, actualDuration) => {
        console.log({ id, phase, actualDuration });
      }}
    >
      {collections.map(({ id, ...otherPropsFromCollection }) => (
        <CollectionPreview key={id} {...otherPropsFromCollection} />
      ))}
    </Profiler>
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
