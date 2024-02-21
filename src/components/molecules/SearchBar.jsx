import { Box, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(`Search Submitted with ${searchTerm}!`);
  };

  return (
    <form onSubmit={onSubmit} style={{ width: "50%" }}>
      <Box display="flex" flexDirection="row">
        <TextField
          id="outlined-search"
          type="search"
          label="What do you want to learn?"
          defaultValue={searchTerm}
          sx={{
            width: "95%",
            "& .MuiInputBase-root": {
              borderRadius: "10px 0px 0px 10px",
            },
          }}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={onSubmit}
          sx={{
            width: "5%",
            borderRadius: "0px 10px 10px 0px",
          }}
        >
          <SearchIcon />
        </Button>
      </Box>
    </form>
  );
}
