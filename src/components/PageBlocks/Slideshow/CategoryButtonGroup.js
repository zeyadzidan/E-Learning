import { Button, IconButton, Stack } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from "react";

export default function CategoryButtonsGroup({ categories, displayedCategories }) {

    const [selected, setSelected] = useState(null);
    const [stIdx, setStIdx] = useState(0);
    const [enIdx, setEnIdx] = useState(displayedCategories);

    let categoriesSlice = categories.slice(stIdx, enIdx);

    const handleCategoryClicked = (id) => setSelected((current) => current = id)

    const handleLeftArrowClicked = () => {
        setStIdx((current) => current -= 1);
        setEnIdx((current) => current -= 1);
    }

    const handleRightArrowClicked = () => {
        setStIdx((current) => current += 1);
        setEnIdx((current) => current += 1);
    }

    const renderedCategoryButtons = categoriesSlice.map((category) => {
        return (
            <Button
                key={category.name}
                color="primary"
                onClick={() => handleCategoryClicked(category.id)}
                sx={{
                    fontSize: "24px",
                    borderRadius: "150px 150px 150px 150px",
                    padding: '1.5rem 4rem',
                }}
                disableElevation
                disabled={selected === category.id}
            >
                {category.name}
            </Button>
        )
    });

    return (
        <Stack
            direction="row"
            spacing={10}
            marginTop="5%"
            alignItems="center"
            justifyContent="center"
            bgcolor="secondary.main"
            width="90%"
            height="50%"
            borderRadius="150px 150px 150px 150px"
        >
            <IconButton
                color="primary"
                disabled={stIdx === 0}
                onClick={handleLeftArrowClicked}
            > <KeyboardArrowLeftIcon sx={{ fontSize: "42px" }} />
            </IconButton>

            <Stack direction="row" alignItems="center" spacing={3} justifyContent="center" width="80%" height="100%">
                {renderedCategoryButtons}
            </Stack>

            <IconButton
                color="primary"
                disabled={enIdx === (categories.length)}
                onClick={handleRightArrowClicked}
            > <KeyboardArrowRightIcon sx={{ fontSize: "42px" }} />
            </IconButton>
        </Stack>
    );
}