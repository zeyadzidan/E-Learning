import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const server = "https://apistaging.inclass.app"
const api = "api"
const version = "v1"

export const certificatesApi = createApi({
    reducerPath: "certificates",
    baseQuery: fetchBaseQuery({
        baseUrl: `${server}/${api}/${version}`
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