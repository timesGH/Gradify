import { Box, Button, Container, List, Typography } from "@mui/material";
import { ThreadCard } from "../components";

export const StudentDiscussionForum = () => {
  const DEMA_THREADS = [
    {
      name: "The Philosophy of Science",
      src: "gradify/science",
      reaction: 37,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    },
    {
      name: "The Philosophy of Humanities",
      src: "gradify/humanities",
      reaction: 15,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    },
    {
      name: "The Philosophy of Science",
      src: "gradify/science",
      reaction: 37,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    },
    {
      name: "The Philosophy of Humanities",
      src: "gradify/humanities",
      reaction: 15,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    },
  ];

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        paddingY="20px"
      >
        <Typography variant="h4">Student Discussion Forum</Typography>
        <Box display="flex" marginTop="10px">
          <Button color="primary" variant="contained" sx={{ marginRight: 1 }}>
            Create Thread
          </Button>
          <Button color="secondary" variant="contained" sx={{ marginRight: 1 }}>
            Saved Threads
          </Button>
          <Button variant="outlined">Settings</Button>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center">
        {DEMA_THREADS.map((thread) => (
          <ThreadCard
            key={thread.name}
            name={thread.name}
            src={thread.src}
            reaction={thread.reaction}
            description={thread.description}
          />
        ))}
      </Box>
    </Container>
  );
};