import { Box, Typography } from "@mui/material";
import woman from "../../assets/woman studying.jpg";
import { useTheme } from "@emotion/react";

export default function Intro() {
  const mainTheme = useTheme();

  return (
    <Box display="flex" flexDirection="column" justifyContent="flex-start" height="640px">
      <Box
        display="flex"
        flexDirection="row" // Default
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="left"
          justifyContent="center"
          width="30%"
          padding="0 100px"
        >
          <Typography
            variant="h1"
            fontWeight={600}
            fontSize="40px"
            lineHeight="50px"
            letterSpacing={"1.33px"}
            padding="20px 0"
          >
            <span style={{ color: mainTheme.palette.primary.main }}>
              Take The Next Step
            </span>
            <span> </span>
            <span style={{ color: mainTheme.palette.secondary.main }}>
              Toward Your Success
            </span>
          </Typography>
          <Typography
            color="tertiary"
            fontSize="13px"
            lineHeight="21px"
            fontWeight={600}
            letterSpacing={"0.43px"}
          >
            Join hundreds of learners from the middle-east already learning on
            E-learning Platform! We qualify you to be a highly competent
            programmer through a myriad of software development courses covering
            a variety of programming languages.
          </Typography>
        </Box>
        <Box width="35%" display="flex" alignItems="center">
          <img width="100%" src={woman} alt="woman_studying" />
        </Box>
      </Box>
    </Box>
  );
}
