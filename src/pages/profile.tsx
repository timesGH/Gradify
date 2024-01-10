import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  useMediaQuery,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@mui/material";
import { colors } from "../utilities";
import { Link as RouterLink } from "react-router-dom";

export const Profile = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "first",
    lastName: "last",
    description: "Hi, I am first.",
    faculty: "compsci",
    interest: "mechanical engineering",
    profilePicture: "image.jpg",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleProfileChange = (field: string, value: string) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSaveChanges = () => {
    console.log("Updated Profile:", {
      ...profile,
      profilePicture: selectedFile
        ? URL.createObjectURL(selectedFile)
        : profile.profilePicture,
    });

    handleClose();
  };

  const handleUploadAvatar = () => {
    const inputElement = document.getElementById("profile-picture-input");
    if (inputElement) {
      inputElement.click();
    }
  };

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
            <Link component={RouterLink} to="/" color="inherit">
              Home
            </Link>

            <Link component={RouterLink} to="/student-resource" color="inherit">
              Resources
            </Link>

            <Link component={RouterLink} to="/" color="inherit">
              Career
            </Link>

            <Link component={RouterLink} to="/student-discussion-forum" color="inherit">
              Forum
            </Link>

            <Link component={RouterLink} to="/" color="inherit">
              Help
            </Link>
          </Box>
        </Container>
      </Box>

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

        <div>
          <Button variant="contained" onClick={handleOpen}>
            Edit Profile
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <TextField
                  label="First Name"
                  value={profile.firstName}
                  onChange={(e) =>
                    handleProfileChange("firstName", e.target.value)
                  }
                  style={{ marginBottom: "10px", marginTop: "10px" }}
                />
                <br />
                <TextField
                  label="Last Name"
                  value={profile.lastName}
                  onChange={(e) =>
                    handleProfileChange("lastName", e.target.value)
                  }
                  style={{ marginBottom: "10px" }}
                />
                <br />
                <TextField
                  label="Description"
                  value={profile.description}
                  onChange={(e) =>
                    handleProfileChange("description", e.target.value)
                  }
                  style={{ marginBottom: "10px" }}
                />
                <br />
                <TextField
                  label="Faculty"
                  value={profile.faculty}
                  onChange={(e) =>
                    handleProfileChange("faculty", e.target.value)
                  }
                  style={{ marginBottom: "10px" }}
                />
                <br />
                <TextField
                  label="Interest"
                  value={profile.interest}
                  onChange={(e) =>
                    handleProfileChange("interest", e.target.value)
                  }
                  style={{ marginBottom: "10px" }}
                />
                <br />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleSaveChanges}>Save Changes</Button>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </div>
      </Box>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        {selectedFile ? (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Profile"
            style={{ width: "200px", height: "200px", borderRadius: "0" }}
          />
        ) : (
          <img
            src={profile.profilePicture}
            alt="Profile"
            style={{ width: "200px", height: "200px", borderRadius: "0" }}
          />
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <button onClick={handleUploadAvatar} style={{ margin: 0 }}>
          Upload Avatar
        </button>
        <input
          id="profile-picture-input"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
          accept="image/*"
        />
      </div>

      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ marginTop: "8px" }}
        >
          {profile.faculty}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {profile.interest}
        </Typography>
      </Box>
      <input
        id="profile-picture-input"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept="image/*"
      />
    </>
  );
};
