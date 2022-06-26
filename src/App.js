import './App.css';
import Navbar from "./homepage/navbar/navbar"
import Home from './homepage/home/home';
import Footer from './homepage/footer/footer';
import { Routes, Route } from "react-router-dom";
import Featured from './pages/Featured';
import ContactUs from './pages/contactUs';
import Blogs from './pages/blogs';
import AllProducts from './pages/allProducts';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="featured" element={<Featured />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="allProducts" element={<AllProducts />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
