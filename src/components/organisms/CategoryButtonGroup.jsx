import { Button, IconButton, Stack } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import mainTheme from "../../themes/main-theme";

export default function CategoryButtonsGroup({
  categories,
  onSelect,
  resetCards,
  displayedCategories,
}) {
  const [selected, setSelected] = useState(0);

  const [stIdx, setStIdx] = useState(0);
  const [enIdx, setEnIdx] = useState(displayedCategories);

  let categoriesSlice = categories.slice(stIdx, enIdx);

  const handleCategoryClicked = (idx) => {
    setSelected(idx);
    onSelect(idx);
    resetCards();
  };

  const handleLeftArrowClicked = () => {
    setStIdx((current) => (current -= 1));
    setEnIdx((current) => (current -= 1));
  };

  const handleRightArrowClicked = () => {
    setStIdx((current) => (current += 1));
    setEnIdx((current) => (current += 1));
  };

  const renderedCategoryButtons = categoriesSlice.map((category) => {
    return (
      <Button
        key={category.name}
        variant={selected === category.id ? "contained" : ""}
        disabled={selected === category.id}
        onClick={() => handleCategoryClicked(category.id)}
        disableElevation
        sx={{
          fontSize: "22px",
          fontWeight: "600",
          lineHeight: "24px",
          letterSpacing: "0.73px",
          textTransform: "none",
          "&:disabled": {
            color: mainTheme.palette.primary.main,
            backgroundColor: mainTheme.palette.bgPrimary.main,
          },
          padding: "20px 30px",
          borderRadius: "10px",
          margin: "0 10px",
        }}
      >
        {category.name}
      </Button>
    );
  });

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      width="80%"
    >
      <IconButton
        color="primary"
        disabled={stIdx === 0}
        onClick={handleLeftArrowClicked}
      >
        <KeyboardArrowLeftIcon sx={{ fontSize: "42px" }} />
      </IconButton>

      {renderedCategoryButtons}

      <IconButton
        color="primary"
        disabled={enIdx === categories.length}
        onClick={handleRightArrowClicked}
      >
        <KeyboardArrowRightIcon sx={{ fontSize: "42px" }} />
      </IconButton>
    </Stack>
  );
}
