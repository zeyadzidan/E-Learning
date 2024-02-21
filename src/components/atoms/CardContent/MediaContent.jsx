import { Box } from "@mui/material";
import WishlistButton from "../Buttons/WishlistButton";

export default function MediaContent({ isCourse, image }) {
  return (
    <Box
      display="flex"
      height={isCourse ? "170px" : "250px"}
      bgcolor="white"
      position="relative"
    >
      <Box
        position="absolute"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
        boxShadow={isCourse ? "" : "0 3px 6px rgba(0, 0, 0, 0.16)"}
      >
        <img src={image} alt={isCourse ? "course_main" : "cert_main"} />
      </Box>
      {isCourse && (
        <Box position="absolute" top="10px" right="10px">
          <WishlistButton />
        </Box>
      )}
    </Box>
  );
}
