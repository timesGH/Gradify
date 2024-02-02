import { Box, Button, TextField, Typography } from "@mui/material";
import { HeartSvg } from "../utilities/svgs";

type ThreadCardProps = {
  name: string;
  src: string;
  reaction: number;
  description: string;
};

export const ThreadCard = (props: ThreadCardProps) => {
  const { name, src, reaction, description } = props;

  return (
    <Box
      width="30%"
      display="flex"
      border="1px solid lightgray"
      borderRadius={4}
      flexDirection="column"
      alignItems="center"
      margin={8}
      padding={4}
      gap={4}
    >
      <Box>
        <Typography variant="h4">{name}</Typography>
        <Typography color="red">{src}</Typography>
      </Box>
      <Typography variant="body1">{description}</Typography>
      <Box display="flex" width="100%" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap={1}>
          <HeartSvg />
          <Typography>{reaction}</Typography>
        </Box>
        <TextField variant="standard" label="add comment..."/>
        <Button>Save</Button>
      </Box>
    </Box>
  );
};
