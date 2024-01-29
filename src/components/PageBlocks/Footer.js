import { Stack, Typography } from "@mui/material";
import edugram from "../../assets/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  return (
    <Stack direction="column">
      <Stack height="460px" justifyContent="center">
        <Stack height="60%" direction="row" justifyContent="space-evenly">
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <img
              style={{
                width: "266px",
                cursor: "pointer",
              }}
              src={edugram}
              alt="edugram_logo"
            />
            <Typography
              color="tertiary.main"
              sx={{
                width: "260px",
                height: "96px",
                fontWeight: "600",
                fontSize: "13px",
                lineHeight: "25px",
                letterSpacing: "0.43px",
              }}
            >
              Discover the fastest, most effective way to build your skills with
              courses, certificates, and degrees.
              <br />
              Get started with us.
            </Typography>
            <Stack
              direction="row"
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
              <FacebookIcon
                color="primary"
                sx={{ fontSize: "2rem" }}
                cursor="pointer"
              />
              <TwitterIcon
                color="primary"
                sx={{ fontSize: "2rem" }}
                cursor="pointer"
              />
              <YouTubeIcon
                color="primary"
                sx={{ fontSize: "2rem" }}
                cursor="pointer"
              />
              <LinkedInIcon
                color="primary"
                sx={{ fontSize: "2rem" }}
                cursor="pointer"
              />
              <WhatsAppIcon
                color="primary"
                sx={{ fontSize: "2rem" }}
                cursor="pointer"
              />
            </Stack>
          </Stack>
          <Stack direction="column" spacing={3}>
            <Typography
              color="primary.main"
              sx={{
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "26px",
                lineHeight: "37px",
                letterSpacing: "0.87",
              }}
            >
              Sitemap
            </Typography>
            <Typography
              color="tertiary.main"
              height="105px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              sx={{
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "25px",
                letterSpacing: "0.67",
              }}
            >
              <span>Home</span>
              <span>About us</span>
              <span>Contact us</span>
            </Typography>
          </Stack>
          <Stack direction="column" spacing={3}>
            <Typography
              color="primary.main"
              sx={{
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "26px",
                lineHeight: "37px",
                letterSpacing: "0.87",
              }}
            >
              Our Clients
            </Typography>
            <Typography
              color="tertiary.main"
              height="105px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              sx={{
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "25px",
                letterSpacing: "0.67",
              }}
            >
              <span>IBM</span>
              <span>Intel</span>
              <span>Apple</span>
            </Typography>
          </Stack>
          <Stack direction="column" justifyContent="flex-start" spacing={3}>
            <Typography
              color="primary.main"
              sx={{
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "26px",
                lineHeight: "37px",
                letterSpacing: "0.87",
              }}
            >
              Support
            </Typography>
            <Typography
              color="tertiary.main"
              height="70px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              sx={{
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "25px",
                letterSpacing: "0.67",
              }}
            >
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100px"
        bgcolor="bgSecondary.main"
      >
        <Typography color="tertiary.main" sx={{
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "17.5px",
            letterSpacing: "0.47px",
        }}>
          Designed and developed at inova LLC
        </Typography>
      </Stack>
    </Stack>
  );
}
