import { Box, List, Paper } from "@mui/material";
import { AdminForumCard, ThreadCard } from "../components";

export const StudentDiscussionForum = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <AdminForumCard />
      <List>
        <ThreadCard
          name="The Philosophy of Science"
          src="gradify/science"
          reaction={37}
          defination="blah blha blah"
        />
        <ThreadCard
          name="The Philosophy of Humanities"
          src="gradify/humanities"
          reaction={15}
          defination="blah blha blah"
        />
      </List>
    </Box>
  );
};
