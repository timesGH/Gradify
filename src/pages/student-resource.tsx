import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { colors } from "../utilities";
import { useNavigate } from "react-router-dom";

const DefaultContentBox = () => {
  const navigate = useNavigate();
  return (
    <Box
      padding={2}
      height={250}
      bgcolor={colors.primary}
      marginBottom={2}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Typography color="white" variant="h4">
          Testing Title
        </Typography>
        <Typography variant="body1">Testing Title</Typography>
      </Box>
      <Button onClick={() => navigate("/article")} variant="contained">View</Button>
    </Box>
  );
};

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
        <DefaultContentBox />
        <DefaultContentBox />
        <DefaultContentBox />
        <DefaultContentBox />
        <DefaultContentBox />
        <DefaultContentBox />
        <DefaultContentBox />
        <DefaultContentBox />
        <DefaultContentBox />
        <DefaultContentBox />
      </Box>
    </Box>
  );
};
