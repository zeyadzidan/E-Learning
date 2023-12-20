import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import learningMan from '../../assets/images/man_learning_with_earth_in_the_bg.svg'
import { useTheme } from "@emotion/react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export default function IntroBlock() {
    const mainTheme = useTheme();

    return (
        <Stack direction="column" alignItems="center" justifyContent="center">
            <Stack direction="row" ml={5}>
                <Stack direction="column" alignItems="left" marginLeft="5%">
                    <Typography variant="h3" marginTop="20%" width="60%">
                        <span style={{ color: mainTheme.palette.primary.main }}>
                            Take The Next Step
                        </span>
                        <span> </span>
                        <span style={{ color: mainTheme.palette.info.main }}>
                            Toward Your Success
                        </span>
                    </Typography>
                    <Typography variant="body1" marginTop="5%" width="60%" color="misc.main">
                        Join hundreds of learners from the middle-east already learning on E-learning
                        Platform! We qualify you to be a highly competent programmer through a myriad
                        of software development courses covering a variety of programming languages.
                    </Typography>
                </Stack>
                <img width="40%" src={learningMan} alt="man_learning_with_earth_in_the_bg" />
            </Stack>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                bgcolor="tertiary.main"
                width="100%"
                height="200px"
                borderRadius="10px 10px 10px 10px"
            >
                <Stack direction="column" alignItems="center" justifyContent="center" marginLeft="40%" marginRight="40%">
                    <Typography variant="h4" marginTop="1%" color="info.main">
                        Learning Process
                    </Typography>
                    <Typography variant="body1" marginBottom="1%" color="misc.main" align="center">
                        <span> Learn the latest skills to reach your </span>
                        <br />
                        <span> professional goals. </span>
                    </Typography>
                </Stack >
                <Tooltip title="Whatsapp Inquiry" arrow sx={{ marginRight: '10px' }}>
                    <IconButton color="primary" size="large">
                        <WhatsAppIcon sx={{ fontSize: "42px" }} />
                    </IconButton>
                </Tooltip>
            </Stack>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="300px"
                spacing="15%"
            >
                <Stack direction="column" alignItems="center" justifyContent="center">
                    <TouchAppIcon color="primary" sx={{ fontSize: "160px" }} />
                    <Typography variant="h4" marginTop="20%">Choose Course</Typography>
                </Stack>
                <Stack direction="column" alignItems="center" justifyContent="center">
                    <AutoStoriesIcon color="primary" sx={{ fontSize: "160px" }} />
                    <Typography variant="h4" marginTop="20%">Start Learning</Typography>
                </Stack>
                <Stack direction="column" alignItems="center" justifyContent="center">
                    <WorkspacePremiumIcon color="primary" sx={{ fontSize: "160px" }} />
                    <Typography variant="h4" marginTop="20%">Earn Certificate</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}