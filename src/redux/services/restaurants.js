import { api } from "./api";

export const restaurantsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: "restaurants",
      }),
      providesTags: ["Restaurants"],
    }),
  }),
});

export const { useGetRestaurantsQuery } = api;
