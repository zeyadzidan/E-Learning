import { useEffect } from "react";
import LandingPage from "./components/LandingPage";
import Header from "./components/PageBlocks/Header/Header";
import { fetchCoursesByCriteria } from "./fetchCoursesByCriteria";

export default function App() {

    useEffect(() => {
        (async () => {
          await fetchCoursesByCriteria("English");
        })();
      }, []);

  return (
    <div>
      <LandingPage />
      <Header />
    </div>
  );
}
