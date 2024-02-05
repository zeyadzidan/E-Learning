import { Box } from "@mui/material";
import MediaContent from "../atoms/CardContent/MediaContent"
import CourseContent from "../atoms/CardContent/CourseContent";
import CertContent from "../atoms/CardContent/CertContent";
import EnrollButtons from "../atoms/Buttons/EnrollButtons";

export default function Card({ content, isCourse, image }) {
  return (
    <Box
      bgcolor="bgPrimary.main"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      overflow="hidden"
      position="relative"
      width="270px"
      height={isCourse ? "460px" : "400px"}
      margin="0 20px"
      borderRadius="20px"
      boxShadow="0 3px 6px rgba(0, 0, 0, 0.16)"
    >
      <MediaContent isCourse={isCourse} image={image} />
      {isCourse ? (
        <>
          <CourseContent course={content} />
          <EnrollButtons course={content} />
        </>
      ) : (
        <CertContent cert={content} />
      )}
    </Box>
  );
}
