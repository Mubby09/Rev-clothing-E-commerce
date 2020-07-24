import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const useDirectory = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
