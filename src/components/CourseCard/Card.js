import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Card({ content, isCourse, image }) {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        boxShadow: "0 3px 3px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
        width: "270px",
        height: isCourse ? "460px" : "400px",
        position: "relative",
      }}
      bgcolor="bgPrimary.main"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={isCourse ? "170px" : "250px"}
        bgcolor="white"
      >
        <img src={image} alt={isCourse ? "course_main" : "cert_main"} />
      </Box>

      <Box
        width="85%"
        height="45%"
        margin="20px auto"
        marginBottom="10px"
        display="flex"
        flexDirection="column"
        justifyContent={!isCourse && "space-between"}
        overflow="auto"
      >
        <Typography
          sx={
            isCourse
              ? {
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "23px",
                  letterSpacing: "-0.38",
                }
              : {
                  fontWeight: "600",
                  fontSize: "19px",
                  lineHeight: "23.75px",
                  letterSpacing: "-0.46",
                  marginBottom: "20px",
                }
          }
        >
          {content.name}
        </Typography>

        {isCourse && (
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
              {content.rating}
            </Typography>
            <Rating
              name="read-only"
              value={content.rating}
              readOnly
              sx={{ margin: "10px 0", fontSize: "24px" }}
            />
          </Box>
        )}

        <Typography
          sx={
            isCourse
              ? {
                  fontWeight: "600",
                  fontSize: "12px",
                  lineHeight: "15px",
                  letterSpacing: "-0.29",
                }
              : {
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "25px",
                  letterSpacing: "-0.48",
                  marginBottom: "20px",
                }
          }
        >
          {content.instructor}
        </Typography>

        {isCourse && (
          <>
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
            <Box display="flex" justifyContent="space-between" width="50%">
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "-0.38",
                }}
              >
                ${content.discountedPrice}
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
                ${content.price}
              </Typography>
            </Box>
          </>
        )}
      </Box>

      {isCourse && (
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
        >
          <Button
            variant="outlined"
            color="primary"
            sx={{
              width: "168px",
              height: "34px",
              textTransform: "none",
              fontWeight: "600",
              fontSize: "15px",
              lineHeight: "18.75px",
              letterSpacing: "0.14px",
              borderRadius: "12px 12px 12px 12px",
            }}
            onClick={() => {
              console.log(`Enrolled in ${content.name}`);
            }}
          >
            Enroll Now
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              borderRadius: "12px 12px 12px 12px",
            }}
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
