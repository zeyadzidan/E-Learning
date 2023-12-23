import { useState } from "react";
import Card from "./Card";
import { IconButton, Stack } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function CardsList({ content, isForCourses, displayedCards, byRating }) {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(displayedCards);

    const handleLeftArrowClicked = () => {
        setStart((current) => current -= 1);
        setEnd((current) => current -= 1);
    }

    const handleRightArrowClicked = () => {
        setStart((current) => current += 1);
        setEnd((current) => current += 1);
    }

    let slicedContent = content.slice(start, end);

    const renderedContent = slicedContent.map((content) => <Card key={content.name} content={content} isCourse={isForCourses} />);

    return (
        <Stack
            direction="row"
            spacing={10}
            marginTop="3%"
            marginBottom="3%"
            alignItems="center"
            justifyContent="center"
            width="90%"
            height="50%"
            borderRadius="150px 150px 150px 150px"
        >
            <IconButton
                color="primary"
                disabled={start === 0}
                onClick={handleLeftArrowClicked}
            > <KeyboardArrowLeftIcon sx={{ fontSize: "72px" }} />
            </IconButton>

            <Stack direction="row" alignItems="center" spacing={3} justifyContent="center">
                {renderedContent}
            </Stack>

            <IconButton
                color="primary"
                disabled={end === (content.length)}
                onClick={handleRightArrowClicked}
            > <KeyboardArrowRightIcon sx={{ fontSize: "72px" }} />
            </IconButton>
        </Stack>
    )

}