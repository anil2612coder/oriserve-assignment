import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PackageDetail from "./pages/PackageDetail";

import VersionDetailPage from "./pages/VersionDetailPage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/package/:name" element={<PackageDetail />} />
      <Route path="/package/:name/:version" element={<VersionDetailPage />} />
    </Routes>
  </Router>
);

export default App;
