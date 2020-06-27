import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../colection_preview/collection-preview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    console.log(collections);

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherPropsFromCollection }) => (
          <CollectionPreview key={id} {...otherPropsFromCollection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;