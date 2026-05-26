import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ThreadPage from "./pages/ThreadPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />

                <Route
                    path="/thread/:id"
                    element={<ThreadPage />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
