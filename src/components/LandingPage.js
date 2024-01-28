import { Stack } from "@mui/material";
import Header from "./PageBlocks/Header/Header";
import Intro from "./PageBlocks/Intro";
import LearningProcess from "./PageBlocks/LearningProcess/LearningProcess";
import Benefits from "./PageBlocks/Benefits";
import Slideshow from "./PageBlocks/Slideshow/Slideshow";
import Footer from "./PageBlocks/Footer";
import Clients from "./PageBlocks/Clients";

export default function LandingPage() {
  const coursesCategories = [
    { id: 1, name: "Development" },
    { id: 2, name: "Design" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Business" },
    { id: 5, name: "Languages" },
    { id: 6, name: "Zayoda" },
  ];

  const certCategories = [
    { id: 1, name: "IT Certificates" },
    { id: 2, name: "Master Track Certificates" },
    { id: 3, name: "University Certificates" },
    { id: 4, name: "Master Certificates" },
    { id: 5, name: "Ph.D. Certificates" },
    { id: 6, name: "Zayoda" },
  ];

  return (
    <>
      <Intro />
      <LearningProcess />
      <Slideshow categories={coursesCategories} isForCourses displayedCategories={5} displayedCards={4} />
      {/* <Benefits /> */}
      {/* <Slideshow isForCourses byRating displayedCards={3} /> */}
      {/* <Clients /> */}
      {/* <Slideshow categories={certCategories} displayedCategories={4} displayedCards={4} /> */}
      {/* <Footer /> */}
      <Header />
    </>
  );
}
