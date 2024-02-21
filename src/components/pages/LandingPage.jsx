import Header from "../templates/Header";
import Intro from "../templates/Intro";
import LearningProcess from "../templates/LearningProcess";
import Benefits from "../templates/Benefits";
import Slideshow from "../templates/Slideshow";
import Footer from "../templates/Footer";
import Clients from "../templates/Clients";
import { Stack } from "@mui/material";
import { staticCourses } from "../atoms/StaticLists/courses";
import { certificates } from "../atoms/StaticLists/certificates";
import { useState } from "react";
import { useFetchCoursesBySubjectQuery } from "../../store";

export default function LandingPage() {
  const coursesCategories = [
    { id: 0, name: "English" },
    { id: 1, name: "Arabic" },
    { id: 2, name: "Math" },
    { id: 3, name: "Science" },
    { id: 4, name: "Electronic Engineering" },
    { id: 5, name: "Steam" },
    { id: 6, name: "Social Studies" },
    { id: 7, name: "Thermodynamics" },
  ];

  const certCategories = [
    { id: 0, name: "IT Certificates" },
    { id: 1, name: "Master Track Certificates" },
    { id: 2, name: "University Certificates" },
    { id: 3, name: "Master Certificates" },
    { id: 4, name: "Ph.D. Certificates" },
  ];

  const [selectedCourseCategory, setSelectedCourseCategory] = useState(0);
  const [selectedCertCategory, setSelectedCertCategory] = useState(0);

  const selectedCourseState = {
    selected: selectedCourseCategory,
    setSelected: setSelectedCourseCategory,
  };
  const selectedCertState = {
    selected: selectedCertCategory,
    setSelected: setSelectedCertCategory,
  };

  const subject = coursesCategories[selectedCourseCategory].name;

  const { data, error, isFetching } = useFetchCoursesBySubjectQuery(subject);

  if (isFetching) {
    return (
      <Stack position="absolute" top="105px" right="0" left="0">
        <Intro />
        <LearningProcess />
        <Slideshow
          categories={coursesCategories}
          selectedState={selectedCourseState}
          isCourses
          displayedCategories={5}
          displayedCards={4}
          isLoading
        />
        <Benefits />
        <Slideshow isCourses displayedCards={3} isLoading />
        <Clients />
        <Slideshow
          categories={certCategories}
          selectedState={selectedCertState}
          content={certificates}
          displayedCategories={4}
          displayedCards={4}
        />
        <Footer />
        <Header />
      </Stack>
    );
  }

  const courses = [];

  if (!error) {
    for (const course of data.data.courses) {
      let instructors = "";
      const length = course.classified_product.instructors.length;
      for (let i = 0; i < length; i++) {
        if (i !== length - 1) {
          instructors =
            instructors + `${course.classified_product.instructors[i].name}, `;
        } else
          instructors =
            instructors + `${course.classified_product.instructors[i].name}`;
      }

      courses.push({
        name: course.classified_product.title,
        instructors: instructors,
        rating: course.final_rating_from_reviews,
        description: course.classified_product.description,
        discountedPrice: 17.99,
        price: 40.99,
      });
    }
  }

  courses.push(...staticCourses);

  for (let i = 0; i < courses.length; i++) {
    courses[i] = { ...courses[i], id: i };
  }

  return (
    <Stack position="absolute" top="105px" right="0" left="0">
      <Intro />
      <LearningProcess />
      <Slideshow
        categories={coursesCategories}
        selectedState={selectedCourseState}
        displayedCategories={5}
        content={courses}
        isCourses
        displayedCards={4}
      />
      <Benefits />
      <Slideshow content={courses} isCourses displayedCards={3} />
      <Clients />
      <Slideshow
        categories={certCategories}
        selectedState={selectedCertState}
        displayedCategories={4}
        content={certificates}
        displayedCards={4}
      />
      <Footer />
      <Header />
    </Stack>
  );
}
