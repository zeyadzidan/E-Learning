import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const server = process.env.REACT_APP_SERVER;

export const coursesApi = createApi({
  reducerPath: "courses",
  baseQuery: fetchBaseQuery({
    baseUrl: server,
  }),
  endpoints(builder) {
    return {
      fetchCoursesBySubject: builder.query({
        query: (subject) => {
          return {
            url: "courses_filtering",
            params: {
              course_name: subject,
              "page[number]": 1,
              "page[size]": 10,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchCoursesBySubjectQuery } = coursesApi;
