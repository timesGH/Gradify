import { Box, MenuItem, TextField } from "@mui/material";
import { colors } from "../utilities";

const DefaultBox = (props: any) => {
  const { children } = props;
  return (
    <Box display="flex" flexDirection="column" margin={2}>
      {children}
    </Box>
  );
};

const DefaultContentBox = () => {
  return <Box width="100%" height={250} bgcolor={colors.primary} />;
};

export const StudentResource = () => {
  return (
    <Box>
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
        width="100%"
        height="auto"
        padding={2}
        justifyContent="space-evenly"
      >
        {/* Unit Reviews */}
        <DefaultBox display="flex" flexDirection="column">
          <h1>Unit Reviews</h1>
          <DefaultContentBox />
        </DefaultBox>

        {/* Free Services */}
        <DefaultBox>
          <h1>Directories to free services for university students</h1>
          <DefaultContentBox />
        </DefaultBox>

        {/* Student Societies */}
        <DefaultBox>
          <h1>Student Societies</h1>
          <DefaultContentBox />
        </DefaultBox>

        {/* Structuring unit outline */}
        <DefaultBox>
          <h1>Structuring unit outline</h1>
          <DefaultContentBox />
        </DefaultBox>
      </Box>
    </Box>
  );
};
