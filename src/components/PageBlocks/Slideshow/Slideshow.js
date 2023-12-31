import { Button, Stack, Typography } from "@mui/material";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useTheme } from "@emotion/react";
import CardsList from "../../CourseCard/CardsList";
import CategoryButtonsGroup from "./CategoryButtonGroup";

export default function Slideshow({ categories, isForCourses, byRating, displayedCategories, displayedCards }) {
    const mainTheme = useTheme();

    // TODO: Handle this to fetch courses according to selected category. [USE CONTEXT]
    // const [selectedCtg, setSelectedCtg] = useState('');

    // TODO: Handle real courses data.
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
            bgcolor="tertiary.main"
            borderRadius="1%"
            width="100%"
            overflow="hidden"
        >
            <Typography marginTop="5%" variant="h3" color="info.main">
                {isForCourses && !byRating && "Top Categories"}
                {byRating && "Most Popular"}
                {!isForCourses && !byRating && "Top Certificates"}
            </Typography>
            <Typography marginTop="1%" variant="h6" align="center">
                <span>Learn the latest skills to reach your</span>
                <br />
                <span>professional goals.</span>
            </Typography>

            {categories && <CategoryButtonsGroup displayedCategories={displayedCategories} categories={categories} />}

            <CardsList content={courses} isForCourses={isForCourses} displayedCards={displayedCards} byRating={byRating} />

            {
                !byRating &&
                <Button
                    sx={{
                        padding: "0.75rem 3rem",
                        color: mainTheme.palette.secondary.main,
                        fontSize: "16px",
                        borderRadius: "10px 10px 10px 10px",
                        marginTop: "2%",
                        marginBottom: "2%"
                    }}
                    variant="contained"
                    color="primary"
                    onClick={() => { console.log("Clicked View More Courses.") }}
                >
                    <LibraryBooksIcon sx={{ marginRight: "20px" }} />
                    {isForCourses && "View More Courses"}
                    {!isForCourses && "View More Certificates"}
                </Button>
            }
        </Stack>
    )
}