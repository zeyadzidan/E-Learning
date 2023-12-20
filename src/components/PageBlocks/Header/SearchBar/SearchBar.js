import { Box, TextField } from "@mui/material";

export default function SearchBar() {
    return (
        <Box ml={3} mr={3}>
            <TextField
                id="outlined-basic"
                label="What do you want to learn?"
                variant="outlined"
                margin="3"
            />
        </Box>
    )
}