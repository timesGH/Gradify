import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContentBox = (props: any) => {
  const { title, description, size = "small" } = props;
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);

  return (
    <Box
      padding={4}
      height={180}
      width={size === "small" ? "300px" : "100%"}
      border="1px solid lightgray"
      marginBottom={2}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      borderRadius={2}
    >
      <Box>
        <Typography color="black" variant="h4" sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" marginTop={2}>
        <Button onClick={() => navigate("/article")} variant="outlined">
          Read more
        </Button>
        <Button variant="outlined" onClick={() => setSaved(!saved)}>
          {saved ? "Saved" : "Save"}
        </Button>
      </Box>
    </Box>
  );
};

const DummyData = [
  {
    title: "What to not do in CVs",
    description:
      "Learn how to write a CV that showcases your skills, achievements, and personality, and impresses potential employers in …",
    size: "large",
  },
  {
    title: "What to do in job interviews",
    description: "This is a description",
  },
  {
    title: "How to succesfully start University",
    description: "This is a description",
  },
  {
    title: "How to get a job",
    description: "This is a description",
  },
  {
    title: "How to structure courses",
    description: "This is a description",
  },
  {
    title: "Where to find good internships",
    description: "This is a description",
  },
  {
    title: "How hard should I study?",
    description: "This is a description",
  },
];

export const StudentResource = () => {
  return (
    <Box
      sx={{
        overflowY: "scroll",
        overflowX: "hidden",
      }}
    >
      <Box
        display="flex"
        flexWrap="wrap"
        height="auto"
        gap={2}
        width="80%"
        marginLeft="10%"
        justifyContent="space-between"
      >
        {DummyData.map((data, index) => (
          <ContentBox {...data} key={index} />
        ))}
      </Box>
    </Box>
  );
};
