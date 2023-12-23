import { Stack, Typography } from "@mui/material";
import learningMan from '../../assets/images/man_learning_with_earth_in_the_bg.svg'
import { useTheme } from "@emotion/react";

export default function Intro() {
    const mainTheme = useTheme();

    return (
        <Stack direction="row" marginTop="5%">
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
    )
}