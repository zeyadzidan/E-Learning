import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const server = "https://apistaging.inclass.app"
const api = "api"
const version = "v1"

export const coursesApi = createApi({
    reducerPath: "courses",
    baseQuery: fetchBaseQuery({
        baseUrl: server
    }),
    endpoints(builder) {
        return {
            fetchCourses: builder.query({
                query: course => {
                    return {
                        url: "courses",
                        params: {
                            courseId: course.id
                        },
                        method: "GET"
                    };
                }
            }),
        }
    }
})

export const { useFetchCoursesQuery } = coursesApi