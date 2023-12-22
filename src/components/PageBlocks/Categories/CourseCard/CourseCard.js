import { Button, Card, CardContent, CardHeader, Rating, Stack, Typography } from "@mui/material";
import MediaShow from "./MediaShow";
import { useCallback, useEffect, useState } from "react";
import { fetchImages } from "./fetchImage";
import books from '../../../../assets/images/books.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CourseCard({ course }) {
    const [image, setImage] = useState(null);

    const name = course.name.length > 30 ? course.name.slice(0, 27) + '...' : course.name;
    const description = course.name.length > 100 ? course.name.slice(0, 97) + '...' : course.name;

    const onLoad = useCallback(async () => {
        try {
            const response = await fetchImages(course.name);
            const fetched = response.data.results[0];
            console.log(fetched);
            setImage(fetched);
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    }, [course.name]);

    // useEffect(() => { onLoad() }, [onLoad]);

    return (
        <Card
            sx={{
                borderRadius: "20px 20px 20px 20px",
                width: "1/4",
                height: "42rem",
                position: 'relative',
            }}
        >
            <CardContent>
                <MediaShow image={books} />
            </CardContent>
            <CardHeader title={name} subheader={course.instructor} />
            <Stack margin={2} justifyContent="center" alignItems="flex-start">
                <Rating name="read-only" value={course.rating} readOnly />
                <Typography variant="body1">
                    {description}
                </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" position="absolute" style={{ bottom: '5%', right: "5%", left: "5%" }}>
                <Button variant="outlined" color="primary" sx={{ padding: "2% 20%" }}>
                    Enroll Now
                </Button>
                <Button variant="outlined" color="primary">
                    <ShoppingCartIcon />
                </Button>
            </Stack>
        </Card>
    )
}