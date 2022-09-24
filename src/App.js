import './App.css';
import './index.css';
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import NavBar from "./components/NavBar";
import React from 'react';


function App() {
    return (
      <>
        <NavBar/>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="*" element={<Navigate to="/"/> } />
        </Routes>
      </>
    );
}

export default App;
