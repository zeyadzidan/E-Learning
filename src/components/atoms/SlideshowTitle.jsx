import { Typography } from "@mui/material";

export default function SlideshowTitle({ categories, isCourses }) {
  if (categories && isCourses) {
    // If categories are given and courses,
    // display the courses associated with each category.
    return (
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
        Top Categories
      </Typography>
    );
  }
  if (!categories && isCourses) {
    // If categories are not given, then display the courses by rating (Top courses).
    return (
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
        Most Popular
      </Typography>
    );
  }
  if (!isCourses) {
    // If certificates are being displayed, display the certificates title.
    return (
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
        Top Certificates
      </Typography>
    );
  }
}
