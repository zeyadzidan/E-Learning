import { Button, IconButton, Stack, Typography } from "@mui/material";
import SearchBar from "./SearchBar/SearchBar";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useTheme } from "@emotion/react";

export default function Header() {
    const mainTheme = useTheme();

    return (
        <Stack
            direction="row"
            spacing={10}
            justifyContent="center"
            alignItems="center"
            bgcolor="secondary.main"
            style={{
                width: '100%',
                height: '10%',
                position: 'fixed',
                top: '0px',
                left: '0px',
                right: '0px',
            }}
        >
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" style={{ color: '#29AB87', cursor: 'pointer' }}>
                <DonutLargeIcon />
                <Typography variant="h5">Edugram</Typography>
            </Stack>
            <SearchBar />
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                <IconButton onClick={() => { console.log('Cart Button Clicked') }}> <ShoppingCartOutlinedIcon color="primary" sx={{fontSize: "32px"}} /> </IconButton>
                <Button onClick={() => { console.log('Login Button Clicked') }} variant="outlined" sx={{ padding: '5% 25%' }}>Login</Button>
                <Button
                    onClick={() => { console.log('Signup Button Clicked') }}
                    variant="contained"
                    sx={{
                        padding: '5% 25%',
                        color: mainTheme.palette.secondary.main,
                    }}
                    disableElevation
                >
                    SignUp
                </Button>
            </Stack>
        </Stack>
    )
}