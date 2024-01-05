import { Box, Container, Typography, Link } from "@mui/material";
import { colors } from "../utilities";
import { Link as RouterLink } from "react-router-dom";

export const Profile = () => {

    // const navigate = useNavigate();

  return (
    <div>
      <Box
        sx={{
          backgroundColor: colors.primary,
          color: colors.white,
          padding: '20px',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ marginLeft: -40}}>
            Gradify</Typography>
          <Typography variant="subtitle1" sx={{ marginLeft: -39, marginTop: 1}}>

            <Link component={RouterLink} to="/profile" color="inherit">
                Profile
            </Link>

            <Link component={RouterLink} to="/student-resource" color="inherit" sx={{ marginLeft: 5}}>
                Resources
            </Link>

            <Link component={RouterLink} to="/" color="inherit" sx={{ marginLeft: 5}}>
                Career
            </Link>

            <Link component={RouterLink} to="/" color="inherit" sx={{ marginLeft: 5}}>
                Forum
            </Link>

            <Link component={RouterLink} to="/" color="inherit" sx={{ marginLeft: 5}}>
                Help
            </Link>

          </Typography>
        </Container>
      </Box>

       <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px'
          }}
        >
        <Typography variant="h4" sx={{ color: colors.primary, fontSize: '15px', marginLeft: 20, fontWeight: 'bold'}}>
            Gradify Console
        </Typography>

        <Typography variant="h4" sx={{ color: colors.primary, fontSize: '15px', marginLeft: 15 }}>
            Select 1
        </Typography>

        <Typography variant="h4" sx={{ color: colors.primary, fontSize: '15px', marginLeft: 5 }}>
            Select 2
        </Typography>
       </Box>

       <Box
        sx={{
            backgroundColor: colors.primary,
            color: colors.white,
            padding: '20px',
          }}
        >

       </Box>
      </div>
  );
};