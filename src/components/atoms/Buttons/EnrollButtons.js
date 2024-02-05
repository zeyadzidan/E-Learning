import { Box, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function EnrollButtons({ course }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      width="90%"
      margin="0 auto"
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
          marginRight: "10px"
        }}
        onClick={() => {
          console.log(`Enrolled in ${course.name}`);
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
          console.log(`Added ${course.name} to shopping cart.`);
        }}
      >
        <ShoppingCartIcon />
      </Button>
    </Box>
  );
}
