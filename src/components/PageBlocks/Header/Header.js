import { Button } from "@mui/material";
import SearchBar from "./SearchBar/SearchBar";
import Box from "@mui/material/Box";

export default function Header() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <div>Edugram</div>
            <SearchBar />
            <Button>Cart</Button>
            <Button>Login</Button>
            <Button>Signup</Button>
        </Box>
    )
}