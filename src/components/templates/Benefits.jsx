import { Box, Stack, Typography } from "@mui/material";
import thinkingWoman from "../../assets/woman thinking.png";
import { useTheme } from "@emotion/react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function Benefits() {
  const mainTheme = useTheme();

  const benefits = [
    "Access 16,000+ expert-led courses.",
    "Expert instructions with lifetime access to your courses.",
    "Use project files and quizzed to practice while you learn.",
    "View courses anytime on your computer or phone.",
    "Earn a certificate when you complete a course.",
  ];

  const renderedBenefits = benefits.map((benefit) => {
    return (
      <Stack key={benefit} direction="row" spacing={2} alignItems="center">
        <CheckCircleOutlineIcon color="tertiary" sx={{ fontSize: "24px" }} />
        <Typography
          color="tertiary"
          sx={{
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "25px",
            letterSpacing: "0.6px",
          }}
        >
          {benefit}
        </Typography>
      </Stack>
    );
  });

  return (
    <Box display="flex" justifyContent="space-evenly" alignitems="center" padding="40px 0">
      <img src={thinkingWoman} alt="productive_woman_image" />
      <Stack
        direction="column"
        spacing={4}
        alignItems="flex-start"
        justifyContent="center"
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "32px",
            lineHeight: "40px",
            letterSpacing: "1.07px",
          }}
          width="60%"
        >
          <span style={{ color: mainTheme.palette.secondary.main }}>
            Benefits Of Learning From{" "}
          </span>
          <span style={{ color: mainTheme.palette.primary.main }}>Edugram</span>
        </Typography>
        {renderedBenefits}
      </Stack>
    </Box>
  );
}
