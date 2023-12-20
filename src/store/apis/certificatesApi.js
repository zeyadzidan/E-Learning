import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const server = "http://localhost:3005"

export const certificatesApi = createApi({
    reducerPath: "certificates",
    baseQuery: fetchBaseQuery({
        baseUrl: server
    }),
    endpoints(builder) {
        return {
            fetchCerts: builder.query({
                query: cert => {
                    return {
                        url: "certificates",
                        params: {
                            certId: cert.id
                        },
                        method: "GET"
                    };
                }
            }),
        }
    }
})

export const { useFetchCertsQuery } = certificatesApi