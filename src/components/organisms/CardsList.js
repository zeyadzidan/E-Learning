import Card from "../molecules/Card";
import { IconButton, Stack } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import course1 from "../../assets/course 1.png";
import course2 from "../../assets/course 2.png";
import course3 from "../../assets/course 3.png";
import course4 from "../../assets/course 4.png";
import googleCert from "../../assets/google_cert.png";
import gCloudCert from "../../assets/gcloud_cert.png";
import ibmCert from "../../assets/ibm_cert.png";

export default function CardsList({
  content,
  isForCourses,
  cardsState,
  byRating,
}) {
  const { start, setStart, end, setEnd } = cardsState;

  const courses = [course1, course2, course3, course4];
  const certs = [googleCert, ibmCert, gCloudCert, ibmCert];

  const handleLeftArrowClicked = () => {
    setStart((current) => (current -= 1));
    setEnd((current) => (current -= 1));
  };

  const handleRightArrowClicked = () => {
    setStart((current) => (current += 1));
    setEnd((current) => (current += 1));
  };

  let sortedContent = [...content].sort((x, y) => y.rating - x.rating); // Highest rating first

  let slicedContent = byRating
    ? sortedContent.slice(start, end)
    : content.slice(start, end);

  const renderedContent = slicedContent.map((content, index) => (
    <Card
      key={content.name}
      content={content}
      isCourse={isForCourses}
      image={
        isForCourses
          ? courses[content.id % courses.length]
          : certs[index % certs.length]
      }
    />
  ));

  return (
    <Stack
      direction="row"
      justifyContent={byRating ? "center" : "space-between"}
      alignItems="center"
      width="90%"
    >
      {!byRating && (
        <IconButton
          color="primary"
          disabled={start === 0}
          onClick={handleLeftArrowClicked}
          sx={{ width: "60px", height: "60px" }}
        >
          <KeyboardArrowLeftIcon sx={{ fontSize: "60px" }} />
        </IconButton>
      )}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        width="80%"
      >
        {renderedContent}
      </Stack>
      {!byRating && (
        <IconButton
          color="primary"
          disabled={end === content.length}
          onClick={handleRightArrowClicked}
          sx={{ width: "60px", height: "60px" }}
        >
          <KeyboardArrowRightIcon sx={{ fontSize: "60px" }} />
        </IconButton>
      )}
    </Stack>
  );
}
