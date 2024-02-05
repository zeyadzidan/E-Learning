import { IconButton, Tooltip } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState } from "react";
import mainTheme from "../../../themes/main-theme";

export default function WishlistButton() {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <Tooltip
      title="Bookmark"
      arrow
      onClick={() => setBookmarked((current) => (current = !current))}
    >
      <IconButton
        sx={{
          width: "34px",
          height: "34px",
          color: bookmarked ? mainTheme.palette.primary.main : "white",
          backgroundColor: bookmarked
            ? mainTheme.palette.bgPrimary.main
            : "rgba(0, 0, 0, 0.2)",
          "&:hover": {
            color: mainTheme.palette.primary.main,
            backgroundColor: mainTheme.palette.bgPrimary.main,
            opacity: 1,
          },
        }}
      >
        <BookmarkIcon sx={{ fontSize: "24px" }} />
      </IconButton>
    </Tooltip>
  );
}
