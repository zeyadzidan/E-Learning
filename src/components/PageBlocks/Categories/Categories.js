import { Button, Stack, Typography } from "@mui/material";
import CategoryButtonsGroup from "./CategoryButtonGroup";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useTheme } from "@emotion/react";
import { useState } from "react";

export default function Categories({ categories }) {
    const mainTheme = useTheme();

    const [selectedCtg, setSelectedCtg] = useState('');

    return (
        <Stack
            direction="column"
            alignItems="center"
            width="100%"
            height="1000px"
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