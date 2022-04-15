import React from 'react';
import './App.css';

import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorythreads/:categoryId" element={<Home />}/>
        </Routes>
    )

}

export default App;
