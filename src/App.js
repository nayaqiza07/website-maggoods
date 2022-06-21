import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import {
  Home,
  Services,
  About,
  ContactUs,
  Order,
} from "./components/pages/pages";
import "./components/font.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="order/*" element={<Order />} />
        <Route path="services/*" element={<Services />} />
        <Route path="about/*" element={<About />} />
        <Route path="contact/*" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
