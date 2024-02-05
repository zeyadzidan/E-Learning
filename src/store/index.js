import { configureStore } from "@reduxjs/toolkit";
import { coursesApi } from "./apis/coursesApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [coursesApi.reducerPath]: coursesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(coursesApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchCoursesBySubjectQuery } from "./apis/coursesApi";
