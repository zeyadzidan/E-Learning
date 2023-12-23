import { Button, CardContent, CardHeader, Rating, Stack, Typography } from "@mui/material";
import MediaShow from "./MediaShow";
import books from '../../assets/images/books.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Card({ content, isCourse }) {

    const name = content.name.length > 30 ? content.name.slice(0, 27) + '...' : content.name;
    const description = content.name.length > 100 ? content.name.slice(0, 97) + '...' : content.name;

    // TODO: Fetch some images through url requests.
    // const [image, setImage] = useState(null);
    // const onLoad = useCallback(async () => {
    //     try {
    //         const response = await fetchImages(course.name);
    //         const fetched = response.data.results[0];
    //         console.log(fetched);
    //         setImage(fetched);
    //     } catch (error) {
    //         console.error('Error fetching image:', error);
    //     }
    // }, [course.name]);

    // useEffect(() => { onLoad() }, [onLoad]);
    // TODO: END

    return (
        <Stack
            sx={{
                borderRadius: "20px 20px 20px 20px",
                maxWidth: '1/4',
                width: "20rem",
                height: isCourse ? "42rem" : "28rem",
                position: 'relative',
            }}
            bgcolor="secondary.main"
        >
            <CardContent>
                <MediaShow image={books} />
            </CardContent>
            <CardHeader title={name} subheader={content.instructor} />

            {
                isCourse &&
                <Stack margin={2} justifyContent="center" alignItems="flex-start">
                    <Rating name="read-only" value={content.rating} readOnly />
                    <Typography variant="body1">
                        {description}
                    </Typography>
                </Stack>
            }
            {
                isCourse &&
                <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" position="absolute" style={{ bottom: '5%', right: "5%", left: "5%" }}>
                    <Button variant="outlined" color="primary" sx={{ padding: "2% 20%" }} onClick={() => { console.log(`Enrolled in ${content.name}`) }}>
                        Enroll Now
                    </Button>
                    <Button variant="outlined" color="primary" onClick={() => { console.log(`Added ${content.name} to shopping cart.`) }}>
                        <ShoppingCartIcon />
                    </Button>
                </Stack>
            }
        </Stack>
    )
}