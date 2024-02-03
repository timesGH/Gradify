import { Box, Link, Typography } from "@mui/material";
import { colors } from "../utilities";
import { MenuSvg } from "../utilities/svgs";
import { useState } from "react";

export const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Box
      width="100vw"
      bgcolor={colors.primary}
      position="sticky"
      height={64}
      display="flex"
      justifyContent="space-between"
      alignItems={"center"}
    >
      <Link href="/" underline="none" sx={{ marginLeft: 6 }}>
        <Typography variant="h4" color="white">
          Gradify
        </Typography>
      </Link>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        height="auto"
        marginTop={showMenu ? 20 : 0}
        sx={{ marginRight: 6 }}
      >
        <div
          onClick={() => setShowMenu(!showMenu)}
          style={{ cursor: "pointer" }}
        >
          <MenuSvg />
        </div>
        {showMenu && (
          <Box bgcolor={colors.primary} padding={2} borderRadius={2}>
            <Link href="/profile" underline="none">
              <Typography variant="h6" color="white">
                Profile
              </Typography>
            </Link>
            <Link href="/student-discussion-forum" underline="none">
              <Typography variant="h6" color="white">
                Student Discussion
              </Typography>
            </Link>
            <Link href="/student-resource" underline="none">
              <Typography variant="h6" color="white">
                Student Resource
              </Typography>
            </Link>
            <Link href="/career" underline="none">
              <Typography variant="h6" color="white">
                Careers
              </Typography>
            </Link>
            <Link href="/login" underline="none">
              <Typography
                variant="h6"
                color="white"
                onClick={() => {
                  localStorage.removeItem("user");
                }}
              >
                Log Out
              </Typography>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};
