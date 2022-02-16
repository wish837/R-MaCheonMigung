import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "routes/Home";
import Main from "routes/Main";
import End from "routes/End";
import Fail from "routes/Fail";

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/main" element={<Main />} />
                <Route path="/end" element={<End />} />
                <Route path="/fail" element={<Fail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;