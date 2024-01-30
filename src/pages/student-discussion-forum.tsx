import { Box, List } from "@mui/material";
import { AdminForumCard, ThreadCard } from "../components";

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
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="space-evenly"
      flexWrap="wrap"
      alignItems="center"
      overflow="auto"
    >
      <AdminForumCard />
      {DEMA_THREADS.map((thread) => {
        return (
          <ThreadCard
            name={thread.name}
            src={thread.src}
            reaction={thread.reaction}
            description={thread.description}
          />
        );
      })}
    </Box>
  );
};
