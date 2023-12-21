import { Button, FormControl, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(`Search Submitted with ${searchTerm}!`)
    }

    return (
        <form onSubmit={onSubmit} style={{ width: '60%' }}>
            <Stack direction="row" spacing={0}>
                <TextField
                    id="outlined-search"
                    type="search"
                    label="What do you want to learn?"
                    defaultValue={searchTerm}
                    sx={{
                        width: '95%',
                        "& .MuiInputBase-root": {
                            borderRadius: "10px 0px 0px 10px",
                        }
                    }}
                    size="large"
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <Button variant="contained"
                    sx={{
                        width: '5%',
                        color: 'white',
                        borderRadius: "0px 10px 10px 0px"
                    }}
                    onClick={onSubmit}
                    disableElevation
                >
                    <SearchIcon />
                </Button>
            </Stack>
        </form>
    )
}