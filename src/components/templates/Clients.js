import { Button, Stack, Typography } from "@mui/material";
import appleLogo from "../../assets/apple.png";
import googleLogo from "../../assets/google.png";
import ibmLogo from "../../assets/ibm.png";
import intelLogo from "../../assets/intel.png";
import microsoftLogo from "../../assets/microsoft.png";

export default function Clients() {
  return (
    <Stack
      direction="row"
      width="100%"
      height="230px"
      flexWrap="wrap"
      justifyContent="flex-end"
      paddingBottom="20px"
    >
      <Stack direction="row" width="66%" justifyContent="space-around" alignItems="center">
        <Typography
          color="secondary.main"
          sx={{
            fontWeight: "700",
            fontSize: "32px",
            lineHeight: "40px",
            letterSpacing: "1.07",
          }}
        >
          Our Clients
        </Typography>
        <Button
          sx={{
            borderRadius: "10px 10px 10px 10px",
            textTransform: "none",
            fontWeight: "600",
            fontSize: "26px",
            lineHeight: "32.5px",
            letterSpacing: "0.87",
            width: "150px",
            height: "60px",
          }}
        >
          View All
        </Button>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-around"
        width="100%"
        alignItems="center"
      >
        <img src={appleLogo} alt="apple_logo" />
        <img src={intelLogo} alt="intel_logo" />
        <img src={ibmLogo} alt="ibm_logo" />
        <img src={microsoftLogo} alt="microsoft_logo" />
        <img src={googleLogo} alt="google_logo" />
      </Stack>
    </Stack>
  );
}
