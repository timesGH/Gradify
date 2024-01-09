import { Box } from "@mui/material";

type ThreadCardProps = {
  name: string;
  src: string;
  reaction: number;
  defination: string;
};

export const ThreadCard = (props: ThreadCardProps) => {
  const { name, src, reaction, defination } = props;

  return (
    <Box
      width={400}
      height={200}
      display="flex"
      bgcolor="lightgray"
      borderRadius={4}
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      margin={8}
    >
      <Box>{src}</Box>
      <Box>{name}</Box>
      <Box display="flex" width="100%" justifyContent="space-around">
        <Box>{reaction}</Box>
        <Box>{defination}</Box>
      </Box>
    </Box>
  );
};
