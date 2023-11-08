import { configureStore } from "@reduxjs/toolkit";
import dish from "./entities/dish";
import restaurant from "./entities/restaurant";
import review from "./entities/review";
import user from "./entities/user";
import cart from "./ui/cart";
import request from "./ui/request";
import { loggerMiddleware } from "./middleware/logger";
import { api } from "./services/api";

const store = configureStore({
  reducer: {
    dish,
    restaurant,
    review,
    user,
    cart,
    request,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api.middleware,
    loggerMiddleware,
  ],
});

export default store;
