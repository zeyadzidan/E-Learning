import { Stack, Typography } from "@mui/material";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
    return (
        <Stack direction="column" width="100%">
            <Stack direction="row" spacing={15} marginTop="5%" marginBottom="5%" justifyContent="center">
                <Stack
                    direction="column"
                    spacing={5}
                    alignItems="flex-start"
                    width="30%"
                >
                    <Stack
                        direction="row"
                        spacing={4}
                        alignItems="center"
                    >
                        <DonutLargeIcon color="primary" sx={{ fontSize: "4rem" }} />
                        <Typography variant="h5" color="primary" sx={{ fontSize: "4rem" }}>Edugram</Typography>
                    </Stack>
                    <Typography variant="body1" marginTop="5%" width="40%" color="misc.main">
                        Discover the fastest, most effective way to build your skills with courses,
                        certificates, and degrees.
                        <br />
                        Get started with us.
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={3}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <FacebookIcon color="primary" sx={{ fontSize: "2rem" }} cursor="pointer" />
                        <TwitterIcon color="primary" sx={{ fontSize: "2rem" }} cursor="pointer" />
                        <YouTubeIcon color="primary" sx={{ fontSize: "2rem" }} cursor="pointer" />
                        <LinkedInIcon color="primary" sx={{ fontSize: "2rem" }} cursor="pointer" />
                        <WhatsAppIcon color="primary" sx={{ fontSize: "2rem" }} cursor="pointer" />
                    </Stack>
                </Stack>
                <Stack
                    direction="column"
                    spacing={3}
                >
                    <Typography variant="h4" color="primary.main">Sitemap</Typography>
                    <Typography variant="h5" color="misc.main">Home</Typography>
                    <Typography variant="h5" color="misc.main">About us</Typography>
                    <Typography variant="h5" color="misc.main">Contact us</Typography>
                </Stack>
                <Stack
                    direction="column"
                    spacing={3}
                >
                    <Typography variant="h4" color="primary.main">Our Clients</Typography>
                    <Typography variant="h5" color="misc.main">IBM</Typography>
                    <Typography variant="h5" color="misc.main">Intell</Typography>
                    <Typography variant="h5" color="misc.main">Apple</Typography>
                </Stack>
                <Stack
                    direction="column"
                    spacing={3}
                >
                    <Typography variant="h4" color="primary.main">Support</Typography>
                    <Typography variant="h5" color="misc.main">Terms & Conditions</Typography>
                    <Typography variant="h5" color="misc.main">Privacy Policy</Typography>
                </Stack>
            </Stack>
            <Stack alignItems="center" justifyContent="center" width="100%" height="9rem" bgcolor="tertiary.main">
                <Typography variant="h6" color="misc.main">Designed and developed at inova LLC</Typography>
            </Stack>
        </Stack>
    )
}