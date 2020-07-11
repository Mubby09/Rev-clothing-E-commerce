import { createSelector } from "reselect";
// import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const useSelectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [useSelectCollections],
    (collections) => collections[collectionUrlParam]
  );
