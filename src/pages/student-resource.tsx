import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DefaultContentBox = (props: any) => {
  const { title, description, tag } = props;
  const navigate = useNavigate();

  return (
    <Box
      padding={2}
      height={250}
      bgcolor="lightgray"
      marginBottom={2}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      borderRadius={2}
    >
      <Box padding={2}>
        <Typography color="black" variant="h4" sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
        <Box padding={2}>{tag}</Box>
      </Box>
      <Button onClick={() => navigate("/article")} variant="text">
        View
      </Button>
    </Box>
  );
};

const DummyData = [
  {
    title: "What to not do in CVs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nisl nisl ultricies nisl, nec ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies ultricies, nisl nisl ultricies nisl, nec ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies ultricies, nisl nisl ultricies nisl, nec ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies ultricies, nisl nisl ultricies nisl, nec ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies ultricies, nisl nisl ultricies nisl, nec ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies ultricies, nisl nisl ultricies nisl, nec ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies ultricies, nisl nisl ultricies nisl, nec ultricies nisl nisl eget nisl.",
    tag: "A",
  },
  {
    title: "What to do in job interviews",
    description: "This is a description",
    tag: "B",
  },
  {
    title: "How to succesfully start University",
    description: "This is a description",
    tag: "C",
  },
  {
    title: "How to get a job",
    description: "This is a description",
    tag: "A",
  },
  {
    title: "How to structure courses",
    description: "This is a description",
    tag: "D",
  },
  {
    title: "Where to find good internships",
    description: "This is a description",
    tag: "B",
  },
  {
    title: "How hard should I study?",
    description: "This is a description",
    tag: "C",
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
      <Box display="flex">
        Search by tags
        <TextField select label="tags" helperText="please select tags">
          <MenuItem value="A">A</MenuItem>
          <MenuItem value="B">B</MenuItem>
          <MenuItem value="C">C</MenuItem>
          <MenuItem value="D">D</MenuItem>
        </TextField>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        width="90%"
        marginLeft="5%"
        height="auto"
        justifyContent="space-evenly"
        gap={2}
      >
        {DummyData.map((data) => (
          <DefaultContentBox {...data} />
        ))}
      </Box>
    </Box>
  );
};
