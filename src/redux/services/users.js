import { api } from "./api";

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "users",
      }),
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetUsersQuery } = api;
