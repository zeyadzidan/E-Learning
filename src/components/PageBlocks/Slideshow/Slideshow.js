import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import CardsList from "../../Cards/CardsList";
import CategoryButtonsGroup from "./CategoryButtonGroup";
import { useEffect, useState } from "react";
import { fetchCoursesByCriteria } from "../../../fetchCoursesByCriteria";
import { staticCourses } from "./courses";
import { certificates } from "./certificates";

export default function Slideshow({
  categories,
  isForCourses,
  byRating,
  displayedCategories,
  displayedCards,
}) {
  const mainTheme = useTheme();

  const [selected, setSelected] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(displayedCards);
  const [response, setResponse] = useState();

  const resetCards = () => {
    setStart(0);
    setEnd(displayedCards);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!byRating) {
        var data = await fetchCoursesByCriteria(categories[selected].name);
      }
      setResponse(data); // Save the response in the state
    };

    fetchData();
  }, [byRating, categories, selected]);

  const courses = [];

  if (response !== undefined) {
    console.log(response.data.courses);
    for (const course of response.data.courses) {
      var instructors = "";
      const length = course.classified_product.instructors.length;
      for (let i = 0; i < length; i++) {
        console.log(course.classified_product.instructors[i].name);
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
