import { Button, Stack, Typography } from "@mui/material";

export default function Clients() {

    return (
        <Stack direction="row" width="100%" height="15rem" marginTop="1%" justifyContent="center">
            <Stack direction="column">
                <Stack direction="row" justifyContent="center" alignItems="center">
                    <Typography variant="h3" marginTop="1%" color="info.main">
                        Our Clients
                    </Typography>
                    <Button
                        sx={{
                            right: '2rem',
                            padding: '1rem 3rem',
                            borderRadius: '1rem 1rem 1rem 1rem',
                            position: "absolute",
                            fontSize: "16px"
                        }}
                    >
                        View All
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}