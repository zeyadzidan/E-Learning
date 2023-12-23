import { Stack, Typography } from "@mui/material";
import productiveWoman from "../../assets/images/productive_woman.svg"
import { useTheme } from "@emotion/react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Benefits() {
    const mainTheme = useTheme();

    const benefits = [
        "Access 16,000+ expert-led courses.",
        "Expert instructions with lifetime access to your courses.",
        "Use project files and quizzed to practice while you learn.",
        "View courses anytime on your computer or phone.",
        "Earn a certificate when you complete a course."
    ]

    const renderedBenefits = benefits.map((benefit) => {
        return (
            <Stack key={benefit} direction="row" spacing={2} alignItems="center">
                <CheckCircleOutlineIcon color="primary" />
                <Typography variant="body1" fontSize="24px">{benefit}</Typography>
            </Stack>
        )
    })

    return (
        <Stack direction="row" spacing={20} alignItems="center" justifyContent="center" marginTop="1%" marginBottom="1%">
            <img width="500rem" src={productiveWoman} alt="productive_woman_image" />
            <Stack direction="column" spacing={3} alignItems="flex-start" justifyContent="center">
                <Typography variant="h3">
                    <span style={{ color: mainTheme.palette.info.main }}> Benefits Of Learning From </span>
                    <span> </span>
                    <span style={{ color: mainTheme.palette.primary.main }}> Edugram </span>
                </Typography>
                {renderedBenefits}
            </Stack>
        </Stack>
    )
}