import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Templates from "./pages/Templates";
import Home from "./pages/Home";
import Editor from "./pages/Editor";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/markdown-editor" element={<Editor />} />
      </Routes>
    </>
  );
};

export default App;
