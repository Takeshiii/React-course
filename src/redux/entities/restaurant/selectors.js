import { REQUEST_STATUS } from "../../../constants/statuses";

const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantById = (state, id) =>
  selectRestaurantModule(state).entities[id];

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurantMenuById = (state, id) =>
  selectRestaurantById(state, id).menu;

export const selectRestaurantReviewsById = (state, id) =>
  selectRestaurantById(state, id).reviews;

export const selectRestaurantLoadingStatus = (state) =>
  selectRestaurantModule(state).status;

export const selectRestaurantLoading = (state) =>
  selectRestaurantLoadingStatus(state) === REQUEST_STATUS.pending;

export const selectRestaurantLoadingFailed = (state) =>
  selectRestaurantLoadingStatus(state) === REQUEST_STATUS.rejected;
