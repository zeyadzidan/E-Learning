import { Stack, Tooltip, Typography, IconButton } from "@mui/material";
import LearningProcessIcon from "./LearningProcessIcon";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export default function LearningProcess() {
    return (
        <>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                bgcolor="tertiary.main"
                width="100%"
                height="200px"
                borderRadius="10px 10px 10px 10px"
                marginTop="3%"
            >
                <Stack direction="column" alignItems="center" justifyContent="center">
                    <Typography variant="h4" marginTop="1%" color="info.main">
                        Learning Process
                    </Typography>
                    <Typography variant="h6" marginTop="5%" marginBottom="1%" color="misc.main" align="center">
                        <span> Learn the latest skills to reach your </span>
                        <br />
                        <span> professional goals. </span>
                    </Typography>
                </Stack >
                <Tooltip title="Whatsapp Inquiry" arrow sx={{ marginRight: '10px', position: 'absolute', right: '1%'}}>
                    <IconButton color="primary">
                        <WhatsAppIcon sx={{ fontSize: "60px" }} />
                    </IconButton>
                </Tooltip>
            </Stack>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="400px"
                spacing="15%"
            >
                <LearningProcessIcon icon={<TouchAppIcon color="primary" sx={{ fontSize: "120px" }} />} text="Choose Course" />
                <LearningProcessIcon icon={<AutoStoriesIcon color="primary" sx={{ fontSize: "120px" }} />} text="Start Learning" />
                <LearningProcessIcon icon={<WorkspacePremiumIcon color="primary" sx={{ fontSize: "120px" }} />} text="Earn Certificate" />
            </Stack>
        </>
    )
}