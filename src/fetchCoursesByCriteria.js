import axios from "axios";

const apiPath = "https://apistaging.inclass.app/api/v1/courses_filtering/";

export const fetchCoursesByCriteria = async (criteria) => {
  const response = await axios.get(apiPath, {
    params: {
      course_name: criteria,
      "page[number]": 1,
      "page[size]": 10,
    },
  });
  return response.data;
};
