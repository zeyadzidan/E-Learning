import { Button, Stack, Typography } from "@mui/material";
import CategoryButtonsGroup from "./CategoryButtonGroup";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useTheme } from "@emotion/react";
import { useState } from "react";
import CourseCardsList from "./CourseCard/CourseCardsList";

export default function Categories({ categories }) {
    const mainTheme = useTheme();

    // TODO: Handle this to fetch courses according to selected category.
    const [selectedCtg, setSelectedCtg] = useState('');

    const courses = [
        {
            name: 'Introduction to Machine Learning',
            tags: 'machine learning',
            instructor: "Prof. Ayman Khalafallah",
            rating: 1
        },
        {
            name: 'Cracking the nut of security systems in a nutshell savjnkd ajksndvdjahbskjba djhkfb adkfjb djhkb adjhk fbh bsdahj badjhk bahkjabv djhk bahjk vadbh va',
            tags: 'security systems',
            instructor: "Prof. Ahmed Kosba",
            rating: 5
        },
        { name: 'Computer Vision', tags: 'computer vision', instructor: "Prof. Marwan Torki", rating: 2 },
        { name: 'Getting a life', tags: 'grass', instructor: "Prof. Zeyad Zidan", rating: 5 },
        { name: 'Game Development', tags: 'video games', instructor: "Epic Games Professors", rating: 3 },
        { name: 'How I Met Your Mother', tags: 'moms', instructor: "Prof. Abdelaziz Mohammed", rating: 4 },
    ]

    return (
        <Stack
            direction="column"
            alignItems="center"
            width="100%"
            height="100%"
            bgcolor="tertiary.main"
            borderRadius="1%"
        >
            <Typography marginTop="7%" variant="h3" color="info.main">Top Categories</Typography>
            <Typography marginTop="1%" variant="h6" align="center">
                <span>Learn the latest skills to reach your</span>
                <br />
                <span>professional goals.</span>
            </Typography>

            <CategoryButtonsGroup categories={categories} />
            <CourseCardsList courses={courses} />

            <Button
                sx={{
                    padding: "1% 3%",
                    color: mainTheme.palette.secondary.main,
                    fontSize: "24px",
                    borderRadius: "10px 10px 10px 10px",
                    marginTop: "3%",
                }}
                variant="contained"
                color="primary"
            >
                <LibraryBooksIcon sx={{ marginRight: "20px" }} />
                View More Courses
            </Button>
        </Stack>
    )
}