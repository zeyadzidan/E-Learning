import { Stack } from "@mui/material";
import Header from "./PageBlocks/Header/Header";
import IntroBlock from "./PageBlocks/IntroBlock";

export default function Page() {
    return (
        <Stack direction="column">
            <Header />
            <IntroBlock />
        </Stack>
    )
}