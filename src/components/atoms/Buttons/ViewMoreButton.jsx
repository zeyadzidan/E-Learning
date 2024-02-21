import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";

export default function ViewMoreButton({ text }) {
  const mainTheme = useTheme();
  return (
    <Button
      sx={{
        color: mainTheme.palette.bgPrimary.main,
        backgroundColor: mainTheme.palette.primary.main,
        width: "314px",
        height: "52px",
        fontWeight: "600",
        fontSize: "22px",
        lineHeight: "27.5px",
        letterSpacing: "0.21px",
        borderRadius: "10px 10px 10px 10px",
        textTransform: "none",
        "&:hover": {
            color: mainTheme.palette.primary.main,
            backgroundColor: mainTheme.palette.bgPrimary.main,
            opacity: 1,
          }
      }}
      letiant="contained"
      onClick={() => {
        console.log("Clicked View More Courses.");
      }}
    >
      {text}
    </Button>
  );
}
