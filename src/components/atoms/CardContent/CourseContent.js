import { Box, Typography, Rating } from "@mui/material";

export default function CourseContent({ course }) {

  return (
    <Box
      width="85%"
      height="45%"
      margin="20px auto"
      marginBottom="10px"
      display="flex"
      flexDirection="column"
      overflow="auto"
    >
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "23px",
          letterSpacing: "-0.38",
        }}
      >
        {course.name}
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="55%"
      >
        <Typography
          color="secondary.main"
          sx={{
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "17.5px",
            letterSpacing: "-0.34",
          }}
        >
          {course.rating}
        </Typography>
        <Rating
          name="read-only"
          value={course.rating}
          readOnly
          sx={{ margin: "10px 0", fontSize: "24px" }}
        />
      </Box>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "12px",
          lineHeight: "15px",
          letterSpacing: "-0.29",
        }}
      >
        {course.instructors}
      </Typography>
      <Typography
        padding="20px 0"
        sx={{
          fontWeight: "500",
          fontSize: "11px",
          lineHeight: "16px",
          letterSpacing: "0.37",
        }}
      >
        {course.description}
      </Typography>
      <Box display="flex" justifyContent="space-between" width="50%">
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "20px",
            letterSpacing: "-0.38",
          }}
        >
          ${course.discountedPrice}
        </Typography>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "20px",
            letterSpacing: "-0.38",
            textDecoration: "line-through",
            opacity: "0.5",
          }}
        >
          ${course.price}
        </Typography>
      </Box>
    </Box>
  );
}
