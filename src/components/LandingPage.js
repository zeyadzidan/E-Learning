import { Stack } from "@mui/material";
import Header from "./PageBlocks/Header/Header";
import Intro from "./PageBlocks/Intro";
import LearningProcess from "./PageBlocks/LearningProcess/LearningProcess";
import Categories from "./PageBlocks/Categories/Categories";

export default function LandingPage() {
    const categories = [
        {id: 1, name: 'Development'},
        {id: 2, name: 'Design'},
        {id: 3, name: 'Marketing'},
        {id: 4, name: 'Business'},
        {id: 5, name: 'Languages'},
        {id: 6, name: 'Zayoda'},
    ]

    return (
        <>
            <Stack direction="column" alignItems="center" justifyContent="center">
                <Intro />
                <LearningProcess />
                <Categories categories={categories} />
            </Stack>
            <Header />
        </>
    )
}