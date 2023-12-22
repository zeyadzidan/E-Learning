import { CardMedia, IconButton, Stack, Tooltip } from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from "react";

export default function MediaShow({ image }) {
    const [bookmarked, setBookmarked] = useState(false);

    return (
        <Stack direction="row" sx={{ position: 'relative' }}>
            <CardMedia
                component="img"
                image={image}
                alt="books"
                sx={{
                    borderRadius: '20px 20px 20px 20px',
                }}
            />
            <Tooltip
                title="Bookmark"
                arrow
                onClick={() => setBookmarked((current) => current = !current)}
                sx={{
                    marginRight: '10px',
                    position: 'absolute',
                    right: '5px',
                    top: '20px'
                }}
            >
                <IconButton color="primary">
                    {bookmarked && <BookmarkIcon sx={{ fontSize: '32px' }} />}
                    {!bookmarked && <BookmarkBorderIcon sx={{ fontSize: '32px' }} />}
                </IconButton>
            </Tooltip>
        </Stack>

    )
}