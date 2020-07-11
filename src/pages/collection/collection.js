import React from "react";
import "./collection.css";
import CollectionItem from "../../components/collection-item/collection-item";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";

const Collection = ({ collection }) => {
  // const { title, items } = collection;
  return (
    <div className="collection">
      <h1 className="title">{collection.title}</h1>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
