import { useTheme } from "@emotion/react";
import { Stack, Typography } from "@mui/material";

export default function LearningProcessIcon({ icon, text }) {
    const mainTheme = useTheme();

    return (
        <Stack direction="column" spacing={4} alignItems="center" justifyContent="center">
            <Stack
                width="160px"
                height="160px"
                bgcolor="tertiary.main"
                borderRadius="20%"
                border={`2px solid ${mainTheme.palette.primary.main}`}
                alignItems="center"
                justifyContent="center"
            >
                {icon}
            </Stack>
            <Typography variant="h4">{text}</Typography>
        </Stack>
    )
}