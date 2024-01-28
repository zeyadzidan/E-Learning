import { useState } from "react";
import Card from "./Card";
import { IconButton, Stack } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import course1 from "../../assets/course 1.png";
import course2 from "../../assets/course 2.png";
import course3 from "../../assets/course 3.png";
import course4 from "../../assets/course 4.png";

export default function CardsList({ content, isForCourses, displayedCards }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(displayedCards);

  const courses = [course1, course2, course3, course4];

  const handleLeftArrowClicked = () => {
    setStart((current) => (current -= 1));
    setEnd((current) => (current -= 1));
  };

  const handleRightArrowClicked = () => {
    setStart((current) => (current += 1));
    setEnd((current) => (current += 1));
  };

  let slicedContent = content.slice(start, end);

  const renderedContent = slicedContent.map((content, index) => (
    <Card
      key={content.name}
      content={content}
      isCourse={isForCourses}
      image={courses[index % displayedCards]}
    />
  ));

  return (
    <Stack
      direction="row"
      spacing={10}
      bgcolor="red"
      justifyContent="space-evenly"
      width="90%"
    >
      <IconButton
        color="primary"
        disabled={start === 0}
        onClick={handleLeftArrowClicked}
      >
        <KeyboardArrowLeftIcon sx={{ fontSize: "72px" }} />
      </IconButton>

      <Stack
        direction="row"
        alignItems="center"
        spacing={3}
        justifyContent="center"
      >
        {renderedContent}
      </Stack>

      <IconButton
        color="primary"
        disabled={end === content.length}
        onClick={handleRightArrowClicked}
      >
        <KeyboardArrowRightIcon sx={{ fontSize: "72px" }} />
      </IconButton>
    </Stack>
  );
}
