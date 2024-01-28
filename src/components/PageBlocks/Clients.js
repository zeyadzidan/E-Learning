import { Button, Stack, Typography } from "@mui/material";
import appleLogo from "../../assets/images/clients/apple-logo-svgrepo-com.svg";
import googleLogo from "../../assets/images/clients/google-svgrepo-com.svg";
import ibmLogo from "../../assets/images/clients/ibm-svgrepo-com.svg";
import intelLogo from "../../assets/images/clients/intel-svgrepo-com.svg";
import microsoftLogo from "../../assets/images/clients/microsoft-svgrepo-com.svg";

export default function Clients() {
    return (
        <Stack direction="row" width="100%" height="15rem" marginTop="1%" marginBottom="1%" justifyContent="center">
            <Stack direction="column" spacing={6}>
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
                <Stack direction="row" spacing={30} justifyContent="center" alignItems="center">
                    <img width="5%" height="80px" src={appleLogo} alt="apple_logo" />
                    <img width="5%" height="90px" src={intelLogo} alt="intel_logo" />
                    <img width="5%" src={ibmLogo} alt="ibm_logo" />
                    <img width="5%" height="70px" src={microsoftLogo} alt="microsoft_logo" />
                    <img width="5%" height="90px" src={googleLogo} alt="google_logo" />
                </Stack>
            </Stack>
        </Stack>
    )
}