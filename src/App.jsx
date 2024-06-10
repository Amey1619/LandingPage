import React from "react";
import { Routes,  Route} from "react-router-dom";
import FrontendPage from "./pages/FrontendPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<FrontendPage />} />
      </Routes>
  );
}
export default App;
