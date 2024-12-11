import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import electrical_banner from "./Components/Assets/banner_electrical.jpg";
import plumbing_banner from "./Components/Assets/banner_plumbing.jpg";
import carpentary_banner from "./Components/Assets/banner_carpentary.jpg";
import LoginSignup from "./Pages/LoginSignup";
import NewsLetterPhoto from './Pages/NewsLetter-photo';

export const backend_url = 'http://localhost:4000';
export const currency = '₹';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/Plumbing Tools" element={<ShopCategory banner={plumbing_banner} category="Plumbing Tools" />} />
          <Route path="/Electrical Tools" element={<ShopCategory banner={electrical_banner} category="Electrical Tools" />} />
          <Route path="/Carpentary Tools" element={<ShopCategory banner={carpentary_banner} category="Carpentary Tools" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
          <Route path="NewsLetter-photo" element={<NewsLetterPhoto />} /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
