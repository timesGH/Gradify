import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  let userData = localStorage.getItem("user");
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/login");
    }
  }, [userData]);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <div>
      <Button variant="contained" onClick={() => logout()}>Log Out</Button>
    </div>
  );
};
