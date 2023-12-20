import { Button, IconButton, Stack, Typography } from "@mui/material";
import SearchBar from "./SearchBar/SearchBar";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Header() {
    return (
        <Stack
            direction="row"
            spacing={10}
            justifyContent="center"
            alignItems="center"
            style={{
                height: '75px'
            }}
        >
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" style={{ color: '#29AB87', cursor: 'pointer' }}>
                <DonutLargeIcon />
                <Typography variant="h5">Edugram</Typography>
            </Stack>
            <SearchBar />
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                <IconButton onClick={() => { console.log('Cart Button Clicked') }}> <ShoppingCartOutlinedIcon color="primary" /> </IconButton>
                <Button onClick={() => { console.log('Login Button Clicked') }} variant="outlined" sx={{ padding: '3% 25%' }}>Login</Button>
                <Button onClick={() => { console.log('Signup Button Clicked') }} variant="contained" sx={{ padding: '3% 25%', color: 'white' }} disableElevation>Signup</Button>
            </Stack>
        </Stack>
    )
}