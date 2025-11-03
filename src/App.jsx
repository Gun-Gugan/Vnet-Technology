import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Cctv from "./pages/Productpage/Cctv";
import Accessories from "./pages/Productpage/Accessories";
import Laptop from "./pages/Productpage/Laptop";
import Routers from "./pages/Productpage/Routers";
import Trending from "./pages/Productpage/Trending";
import Blog from "./pages/Blog";
import ProductDetails from "./pages/Productpage/ProductDetails";
import CartPage from "./pages/CartPage";
import BackToTop from "./BackToTop";
import ShopPage from "./pages/Productpage/ShopPage ";
import SocialMediaMarketing from "./pages/Services/SocialMedia/SocialMedia";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import EndpointSecurity from "./pages/Services/EndPoint";
import Cloud from "./pages/Services/Cloud";
import UiUx from "./pages/Services/UiUx";
import Website from "./pages/Services/Website";
import ComputerNetwork from "./pages/Services/ComputerNetwork";
import Network from "./pages/Services/Network";
import Instagram from "./pages/Services/SocialMedia/Instagram";
import SMSMarketing from "./pages/Services/SocialMedia/SMSMarketing";
import Google from "./pages/Services/SocialMedia/Google";
import YouTubeMarketing from "./pages/Services/SocialMedia/YouTubeMarketing";
import FacebookMarketing from "./pages/Services/SocialMedia/Facebook";
import Email from "./pages/Services/SocialMedia/EmailMarketing";
import CrmErp from "./pages/Services/CrmErp";
import ServicesHome from "./pages/Services/ServiceHome";
import SecurityAudit from "./pages/Services/SecurityAudit";
import Seo from "./pages/Services/Seo";
import ServerFirewall from "./pages/Services/Firewall";
import SaleAndService from "./pages/Services/SaleService";
// (Other imports same as before)

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cctv" element={<Cctv />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/routers" element={<Routers />} />
          <Route path="/shoppage" element={<ShopPage />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/social" element={<SocialMediaMarketing />} />
          <Route path="/instagram" element={<Instagram/>} />
          <Route path="/SMS" element={<SMSMarketing/>} />
          <Route path="/youtubemarketing" element={<YouTubeMarketing/>} />
          <Route path="/google" element={<Google/>} />
          <Route path="/facebook" element={<FacebookMarketing/>} />
          <Route path="/email" element={<Email/>} />
          <Route path="/endpoint" element={<EndpointSecurity />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/uiux" element={<UiUx />} />
          <Route path="/website" element={<Website />} />
          <Route path="/computernetwork" element={<ComputerNetwork />} />
          <Route path="/network" element={<Network />} />
          <Route path="/crm" element={<CrmErp />} />
          <Route path="/service" element={<ServicesHome />} />
          <Route path="/security" element={<SecurityAudit />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/serverfirewall" element={<ServerFirewall />} />
          <Route path="/sale" element={<SaleAndService />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccessPage />} />
          {/* (Keep the rest of your service routes here) */}
        </Routes>
        <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
