import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import CardsList from "../organisms/CardsList";
import CategoryButtonsGroup from "../organisms/CategoryButtonGroup";
import SlideshowTitle from "../atoms/SlideshowTitle";
import ViewMoreButton from "../atoms/Buttons/ViewMoreButton";

export default function Slideshow({
  categories,
  onSelect,
  displayedCategories,
  content,
  isCourses,
  displayedCards,
  isLoading,
}) {
  // Sliding window states for displayed cards.
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(displayedCards);

  const resetCards = () => {
    setStart(0);
    setEnd(displayedCards);
  };

  const renderCategories = (categories) => {
    if (categories) {
      // If categories are given, then a state must be assigned to the selected category.
      return (
        <CategoryButtonsGroup
          categories={categories}
          onSelect={onSelect}
          displayedCategories={displayedCategories}
          resetCards={resetCards}
        />
      );
    }
  };

  const renderViewMoreButton = (categories) => {
    if (categories) {
      // If categories are given, display a button according
      // to whether the courses or certificates are given.
      return (
        <ViewMoreButton
          text={isCourses ? "View More Courses" : "View More Certificates"}
        />
      );
    }
  };

  const renderCardsList = (isLoading) => {
    if (isLoading) {
      return <div>Still loading... Please be patient.</div>;
    } else {
      return (
        <CardsList
          content={content}
          isCourses={isCourses}
          displayedCards={displayedCards}
          cardsState={{ start, setStart, end, setEnd }}
        />
      );
    }
  };

  return (
    <Stack
      direction="column"
      spacing={8}
      alignItems="center"
      bgcolor="bgSecondary.main"
      paddingBottom="100px"
    >
      <Box>
        <SlideshowTitle categories={categories} isCourses={isCourses} />

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

      {renderCategories(categories)}

      {renderCardsList(isLoading)}

      {renderViewMoreButton(categories)}
    </Stack>
  );
}
