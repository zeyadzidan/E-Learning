import { Box, Button, IconButton, Stack } from "@mui/material";
import edugram from "../../../assets/logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "./SearchBar/SearchBar";

export default function Header() {
  return (
    <Box bgcolor="bgPrimary.main" position="fixed" top="0" left="0" right="0">
      <Box
        display="flex"
        flexDirection="row" // Default
        justifyContent="space-between"
        alignItems="center"
        margin="auto"
        style={{
          width: "80%",
          height: "105px",
          top: "0px",
          left: "0px",
          right: "0px",
        }}
      >
        <img
          style={{
            width: "140px",
            cursor: "pointer",
          }}
          src={edugram}
          alt="edugram_logo"
        />
        <SearchBar />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <IconButton
            onClick={() => {
              console.log("Cart Button Clicked");
            }}
          >
            <ShoppingCartOutlinedIcon
              color="primary"
              sx={{ fontSize: "32px" }}
            />
          </IconButton>
          <Button
            onClick={() => {
              console.log("Login Button Clicked");
            }}
            sx={{
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "20px",
              textTransform: "none",
              padding: "8px 32px",
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              console.log("Signup Button Clicked");
            }}
            variant="contained"
            sx={{
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "20px",
              textTransform: "none",
              padding: "8px 32px",
            }}
            disableElevation
          >
            Sign Up
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
