import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Button, Stack, Typography } from "@mui/material";
import CardsList from "../organisms/CardsList";
import CategoryButtonsGroup from "../organisms/CategoryButtonGroup";
import { staticCourses } from "../atoms/StaticLists/courses";
import { certificates } from "../atoms/StaticLists/certificates";
import { useFetchCoursesBySubjectQuery } from "../../store";

export default function Slideshow({
  categories,
  isForCourses,
  byRating,
  displayedCategories,
  displayedCards,
}) {
  const mainTheme = useTheme();

  // For currently selected category/subject
  const [selected, setSelected] = useState(0);

  // Sliding window states for displayed cards.
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(displayedCards);

  const resetCards = () => {
    setStart(0);
    setEnd(displayedCards);
  };

  var subject;

  if (!byRating) {
    subject = categories[selected].name;
  }

  const { data, error, isFetching } = useFetchCoursesBySubjectQuery(subject);

  if (isFetching) {
    return <div>Loading Courses...</div>;
  }

  const courses = [];

  if (!error) {
    for (const course of data.data.courses) {
      var instructors = "";
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
    <Stack
      direction="column"
      spacing={8}
      alignItems="center"
      bgcolor="bgSecondary.main"
      paddingBottom="100px"
    >
      <Box>
        <Typography
          marginTop="50px"
          padding="50px 0 20px 0"
          color="secondary.main"
          sx={{
            fontWeight: "700",
            fontSize: "32px",
            lineHeight: "40px",
            letterSpacing: "1.07px",
          }}
        >
          {isForCourses && !byRating && "Top Categories"}
          {byRating && "Most Popular"}
          {!isForCourses && !byRating && "Top Certificates"}
        </Typography>
        <Typography
          align="center"
          sx={{
            fontWeight: "500",
            fontSize: "13px",
            lineHeight: "21px",
            letterSpacing: "0.43px",
          }}
        >
          <span>Learn the latest skills to reach your</span>
          <br />
          <span>professional goals.</span>
        </Typography>
      </Box>

      {categories && (
        <CategoryButtonsGroup
          categories={categories}
          categoryState={{ selected, setSelected }}
          displayedCategories={displayedCategories}
          resetCards={resetCards}
        />
      )}

      <CardsList
        content={isForCourses ? courses : certificates}
        isForCourses={isForCourses}
        byRating={byRating}
        displayedCards={displayedCards}
        cardsState={{ start, setStart, end, setEnd }}
      />

      {!byRating && (
        <Button
          sx={{
            width: "314px",
            height: "52px",
            color: mainTheme.palette.bgPrimary.main,
            fontWeight: "600",
            fontSize: "22px",
            lineHeight: "27.5px",
            letterSpacing: "0.21px",
            borderRadius: "10px 10px 10px 10px",
            textTransform: "none",
          }}
          variant="contained"
          color="primary"
          onClick={() => {
            console.log("Clicked View More Courses.");
          }}
        >
          {isForCourses && "View More Courses"}
          {!isForCourses && "View More Certificates"}
        </Button>
      )}
    </Stack>
  );
}
