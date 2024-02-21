import { Box, Stack, Tooltip, Typography, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LearningProcessCard from "../atoms/LearningProcessIcon";
import choose from "../../assets/choose.png";
import learn from "../../assets/learn.png";
import earn from "../../assets/earn.png";

export default function LearningProcess() {
  return (
    <Box width="100%">
      <Stack
        alignItems="center"
        justifyContent="center"
        bgcolor="bgSecondary.main"
        width="100%"
        height="300px"
        position="relative"
      >
        <Stack direction="column" alignItems="center" justifyContent="center">
          <Typography
            variant="h1"
            color="secondary.main"
            padding="30px 0"
            sx={{
              fontWeight: "700",
              fontSize: "32px",
              lineHeight: "40px",
              letterSpacing: "1.07px",
            }}
          >
            Learning Process
          </Typography>
          <Typography
            variant="body1"
            color="tertiary.main"
            align="center"
            sx={{
              fontWeight: "700",
              fontSize: "13px",
              lineHeight: "21px",
              letterSpacing: "0.43px",
            }}
          >
            <span> Learn the latest skills to reach your </span>
            <br />
            <span> professional goals. </span>
          </Typography>
        </Stack>
        <Tooltip
          title="Whatsapp Inquiry"
          arrow
          sx={{ position: "absolute", top: "50px", right: "10px" }}
        >
          <IconButton color="primary">
            <WhatsAppIcon sx={{ fontSize: "60px" }} />
          </IconButton>
        </Tooltip>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        width="80%"
        margin="auto"
        height="280px"
      >
        <LearningProcessCard
          image={<img src={choose} alt="choose your course" />}
          text="Choose Course"
        />
        <LearningProcessCard
          image={<img src={learn} alt="learn the course" />}
          text="Start Learning"
        />
        <LearningProcessCard
          image={<img src={earn} alt="earn certificate" />}
          text="Earn Certificate"
        />
      </Stack>
    </Box>
  );
}
