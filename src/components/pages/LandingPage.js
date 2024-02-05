import Header from "../templates/Header"
import Intro from "../templates/Intro";
import LearningProcess from "../templates/LearningProcess";
import Benefits from "../templates/Benefits";
import Slideshow from "../templates/Slideshow";
import Footer from "../templates/Footer";
import Clients from "../templates/Clients";
import { Stack } from "@mui/material";

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

  return (
    <Stack position="absolute" top="105px" right="0" left="0">
      <Intro />
      <LearningProcess />
      <Slideshow
        categories={coursesCategories}
        isForCourses
        displayedCategories={5}
        displayedCards={4}
      />
      <Benefits />
      <Slideshow isForCourses byRating displayedCards={3} />
      <Clients />
      <Slideshow
        categories={certCategories}
        displayedCategories={4}
        displayedCards={4}
      />
      <Footer />
      <Header />
    </Stack>
  );
}