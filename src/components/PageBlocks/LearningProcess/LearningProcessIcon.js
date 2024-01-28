import { Stack, Typography } from "@mui/material";

export default function LearningProcessCard({ image, text }) {

  return (
    <Stack
      direction="column"
      spacing={4}
      alignItems="center"
      justifyContent="center"
    >
      {image}
      <Typography
        variant="h4"
        sx={{
          fontSize: "24px",
          lineHeight: "14px",
          fontWeight: "700",
          letterSpacing: "0.8px",
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
}
