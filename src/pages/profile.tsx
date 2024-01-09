import { Box, Container, Typography, Link, useMediaQuery } from "@mui/material";
import { colors } from "../utilities";
import { Link as RouterLink } from "react-router-dom";

export const Profile = () => {
  // This isMobile variable stores if the windows resolution width is less than 600px - if it is mobile
  const isMobile = useMediaQuery("(max-width:600px)");
  
  const handleEditClick = () => {
    const isConfirmed = window.confirm("Change profile");
  

  if (isConfirmed)
    alert("profile changed");
  }

  return (
    <>
      {/* Try not to use sx because it is same forcing something */}
      {/* Really appreciate using colors */}
      <Box bgcolor={colors.primary} color={colors.white} padding={3}>
        <Container>
          <Typography variant="h4">Gradify</Typography>

          {/* Using margin is fine when it is only on one component but it is not optimal for using it on repeated components */}
          {/* When the components are repeated try and you want to give spaces to each of them try to use flex attributes */}
          <Box
            display="flex"
            width={isMobile ? "100vw" : "50vw"}
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Link component={RouterLink} to="/profile" color="inherit">
              Profile
            </Link>

            <Link component={RouterLink} to="/student-resource" color="inherit">
              Resources
            </Link>

            <Link component={RouterLink} to="/" color="inherit">
              Career
            </Link>

            <Link component={RouterLink} to="/" color="inherit">
              Forum
            </Link>

            <Link component={RouterLink} to="/" color="inherit">
              Help
            </Link>
          </Box>
        </Container>
      </Box>

      {/* When setting size for something always use sizes which is dividable by 4, it is kind of a rule */}
      <Box
        display="flex"
        alignItems="center"
        padding={1}
        width={isMobile ? "auto" : "50vw"}
        justifyContent="space-between"
        marginLeft={6}
        flexWrap="wrap"
      >
        <Typography
          variant="h4"
          color={colors.primary}
          fontSize={16}
          fontWeight="bold"
        >
          Gradify Console
        </Typography>

        <Typography variant="h4" color={colors.primary} fontSize={16}>
          Select 1
        </Typography>

        <Typography variant="h4" color={colors.primary} fontSize={16}>
          Select 2
        </Typography>
      </Box>

      <Box
      bgcolor={colors.primary}
      color={colors.white}
      padding={5}
      width="200px"
      height="200px"
      borderRadius="50%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      margin="auto"
      marginTop={10}
      >
      
      <Typography variant="h4" color={colors.white} fontSize={16} alignItems="center" margin="auto">
          Profile Picture
        </Typography>
      </Box>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 10 }}>
      <button onClick={handleEditClick} style={{ margin: 0}}>
        Edit
      </button>
      </div>
    </>
  );
};
