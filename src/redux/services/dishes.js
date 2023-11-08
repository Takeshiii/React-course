import { api } from "./api";

export const dishesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDishes: builder.query({
      query: (restaurantId) => ({
        url: "dishes",
        params: {
          restaurantId,
        },
      }),
      providesTags: ["Dishes"],
    }),
  }),
});

export const { useGetDishesQuery } = api;
