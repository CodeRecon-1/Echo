import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ThreadPage from "./pages/ThreadPage";
import ValidationArena from "./pages/ValidationArena";
import FAQPage from "./pages/FAQPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />

                <Route
                    path="/thread/:id"
                    element={<ThreadPage />}
                />
                <Route
                    path="/arena"
                    element={<ValidationArena />}
                />

                <Route
                    path="/faq"
                    element={<FAQPage />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
