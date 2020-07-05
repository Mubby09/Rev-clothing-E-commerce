import { createSelector } from "reselect";

const Selectuser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [Selectuser],
  (user) => user.currentUser
);
