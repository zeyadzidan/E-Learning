import { useState } from "react";
import CourseCard from "./CourseCard";
import { IconButton, Stack } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function CourseCardsList({ courses }) {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(4);

    const handleLeftArrowClicked = () => {
        setStart((current) => current -= 1);
        setEnd((current) => current -= 1);
    }

    const handleRightArrowClicked = () => {
        setStart((current) => current += 1);
        setEnd((current) => current += 1);
    }

    let slicedCourses = courses.slice(start, end);

    const renderedSlicedCourses = slicedCourses.map((course) => <CourseCard key={course.name} course={course} />);

    return (
        <Stack
            direction="row"
            spacing={10}
            marginTop="3%"
            alignItems="center"
            justifyContent="center"
            width="90%"
            borderRadius="150px 150px 150px 150px"
        >
            <IconButton
                color="primary"
                disabled={start === 0}
                onClick={handleLeftArrowClicked}
            > <KeyboardArrowLeftIcon sx={{ fontSize: "42px" }} />
            </IconButton>

            <Stack direction="row" alignItems="center" spacing={3} justifyContent="center">
                {renderedSlicedCourses}
            </Stack>

            <IconButton
                color="primary"
                disabled={end === (courses.length)}
                onClick={handleRightArrowClicked}
            > <KeyboardArrowRightIcon sx={{ fontSize: "42px" }} />
            </IconButton>
        </Stack>
    )

}