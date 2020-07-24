import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview";
import Collection from "../collection/collection";
import { Route } from "react-router-dom";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default ShopPage;
