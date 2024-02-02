import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@mui/material";

export const Profile = () => {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "James",
    lastName: "Liang",
    description: "Passionate about technology and coding.",
    faculty: "Computer Science",
    interest: "Mechanical Engineering",
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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop={5}
    >
      <label htmlFor="profile-picture-input" style={{ position: "relative" }}>
        <img
          src={
            selectedFile
              ? URL.createObjectURL(selectedFile)
              : profile.profilePicture
          }
          alt="Profile"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseOver={(event) => {
            if (event.currentTarget) {
              event.currentTarget.style.transform = "scale(1.1)";
            }
          }}
          onMouseOut={(event) => {
            if (event.currentTarget) {
              event.currentTarget.style.transform = "scale(1)";
            }
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderRadius: "50%",
            pointerEvents: "none",
            transition: "background-color 0.3s ease-in-out",
            opacity: 0,
          }}
        />
      </label>

      <Typography variant="h4" style={{ marginTop: "10px" }}>
        {`${profile.firstName} ${profile.lastName}`}
      </Typography>

      <Typography variant="body1" color="textSecondary" style={{ marginTop: "8px" }}>
        {profile.description}
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="center" marginTop={3}>
        <Typography variant="h6">Academic Details</Typography>
        <Typography variant="body2" color="textSecondary">
          Faculty: {profile.faculty}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Interest: {profile.interest}
        </Typography>
      </Box>

      <Button variant="contained" onClick={handleOpen} style={{ marginTop: "20px" }}>
        Edit Profile
      </Button>

      <input
        id="profile-picture-input"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept="image/*"
      />

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
    </Box>
  );
};
