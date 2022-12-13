import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Information from "./pages/Information";
import Contact from "./pages/Contact";

// ========== ADMIN =========
import Dashboard from "./admin/pages/Dashboard";
import Customer from "./admin/pages/Customer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route activeClassName="is-acive" path="/about" element={<About />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/information" element={<Information />} />
        <Route path="/contact" element={<Contact />} />
      
        {/* ADMIN */}
        <Route path="/admin/" element={<Dashboard />} />
        <Route path="/admin/customer" element={<Customer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
