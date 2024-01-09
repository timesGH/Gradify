import { Box, Typography, Button } from "@mui/material";
import { colors } from "../utilities";

export const AdminForumCard = () => {
  return (
    <Box
      width={400}
      height={400}
      border={2}
      borderColor={colors.primary}
      borderRadius={8}
      marginLeft={8}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Typography variant="h3">u/admin</Typography>
      <Box border={2} borderRadius={4} padding={2} borderColor={colors.green}>
        Status: Online
      </Box>
      <Box display="flex" width="80%" justifyContent="space-between">
        <Button>Create Threads</Button>
        <Button>Saved Threads</Button>
      </Box>
      <Button>Settings</Button>
    </Box>
  );
};
