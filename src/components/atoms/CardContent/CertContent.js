import { Box, Typography } from "@mui/material";

export default function CertContent({ cert }) {
  return (
    <Box
      width="88%"
      margin="0 auto"
      padding="20px 10px"
      display="flex"
      flexDirection="column"
      overflow="auto"
    >
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "19px",
          lineHeight: "23.75px",
          letterSpacing: "-0.46",
          marginBottom: "25px",
        }}
      >
        {cert.name}
      </Typography>
      
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "20px",
          lineHeight: "25px",
          letterSpacing: "-0.48",
        }}
      >
        {cert.issuer}
      </Typography>
    </Box>
  );
}
