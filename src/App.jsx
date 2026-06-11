import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Properties from './pages/Properties.jsx';
import GalleryPage from './pages/GalleryPage';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import TopHeader from './components/layout/TopHeader.jsx';
import WhatsAppFloat from './components/layout/WhatsAppButton.jsx';
import CallNowFloat from './components/layout/CallButton.jsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <TopHeader/>
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
    <WhatsAppFloat/>
    <CallNowFloat/>
  </div>
);

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;