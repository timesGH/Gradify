import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  SignUp,
  Profile,
  ForgotPassword,
  StudentResource,
  StudentDiscussionForum,
  Article,
} from "./pages";
import { Navigation } from "./components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navigation />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/student-resource" element={<StudentResource />} />
        <Route
          path="/student-discussion-forum"
          element={<StudentDiscussionForum />}
        />
        <Route path="/article" element={<Article />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
