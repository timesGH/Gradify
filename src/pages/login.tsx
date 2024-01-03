import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { colors } from "../utilities";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      alert("Login successful");
      navigate("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width={300}
        height="auto"
        bgcolor={colors.white}
        display="flex"
        flexDirection="column"
      >
        <text>Username:</text>
        <TextField
          placeholder="Username"
          variant="outlined"
          value={username}
          onChange={(e) => handleUsername(e)}
        />
        <text>Password:</text>
        <TextField
          placeholder="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => handlePassword(e)}
        />
        <Button variant="contained" onClick={() => handleLogin()}>
          Login
        </Button>
        <Link to="/forgot-password">Forgot Password?</Link>
        <Link to="/signup">Don't have account yet?</Link>
      </Box>
    </Box>
  );
};
