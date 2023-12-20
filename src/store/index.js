import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { coursesApi } from "./apis/CoursesApi";
import { certificatesApi } from "./apis/certificatesApi";

export const store = configureStore({
    reducer: {
        [coursesApi.reducerPath]: [coursesApi.reducer],
        [certificatesApi.reducerPath]: [certificatesApi.reducer],
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(coursesApi.middleware)
            .concat(certificatesApi.middleware);
    }
})

setupListeners(store.dispatch);

export {
    useFetchCoursesQuery
} from './apis/CoursesApi'

export {
    useFetchCertsQuery
} from './apis/certificatesApi'