import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Card({ content, isCourse, image }) {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
        width: "320px",
        height: isCourse ? "550px" : "400px",
        position: "relative",
      }}
      bgcolor="bgPrimary.main"
    >
      <Box height="35%" margin="auto">
        <img
          src={image}
          alt="books"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>

      <Box
        width="90%"
        height="45%"
        margin="30px auto"
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
          {content.name}
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="center"
          width="50%"
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
            {content.rating}
          </Typography>
          <Rating
            name="read-only"
            value={content.rating}
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
          {content.instructor}
        </Typography>

        {isCourse && (
          <Typography
            padding="20px 0"
            sx={{
              fontWeight: "500",
              fontSize: "11px",
              lineHeight: "16px",
              letterSpacing: "0.37",
            }}
          >
            {content.name}
          </Typography>
        )}
      </Box>

      {isCourse && (
        <Stack
          margin={2}
          justifyContent="center"
          alignItems="flex-start"
        ></Stack>
      )}
      {isCourse && (
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
          position="absolute"
          style={{ bottom: "5%", right: "5%", left: "5%" }}
        >
          <Button
            variant="outlined"
            color="primary"
            sx={{ padding: "2% 20%" }}
            onClick={() => {
              console.log(`Enrolled in ${content.name}`);
            }}
          >
            Enroll Now
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              console.log(`Added ${content.name} to shopping cart.`);
            }}
          >
            <ShoppingCartIcon />
          </Button>
        </Stack>
      )}
    </Box>
  );
}
