import { REQUEST_STATUS } from "../../../constants/statuses";

const selectDishModule = (state) => state.dish;

export const selectDishById = (state, id) =>
  selectDishModule(state).entities[id];

export const selectDishIds = (state) => selectDishModule(state).ids;

export const selectDishLoadingStatus = (state) =>
  selectDishModule(state).status;

export const selectDishLoading = (state) =>
  selectDishLoadingStatus(state) === REQUEST_STATUS.pending;

export const selectDishLoadingFailed = (state) =>
  selectDishLoadingStatus(state) === REQUEST_STATUS.rejected;
