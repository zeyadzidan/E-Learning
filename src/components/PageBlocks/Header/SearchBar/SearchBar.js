import { Button, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    return (
        <Stack direction="row" spacing={0} style={{width: '60%'}}>
            <TextField
                id="outlined-basic"
                label="What do you want to learn?"
                variant="outlined"
                style={{width: '95%'}}
                size="small"
            >
            </TextField>
            <Button variant="contained" 
            style={{
                width: '5%',
                color: 'white',
            }}
            onClick={() => { console.log('Search Button Clicked') }}> <SearchIcon /> </Button>
        </Stack>
    )
}