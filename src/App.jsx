import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Home from './pages/Home';
import Why from './pages/Why';
import Industries from './pages/Industries';
import FindIOSDev from './pages/FindIOSDev';
import ApplyAsVendor from './pages/ApplyAsVendor';
import HireIOSDev from './pages/HireIOSDev';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Banner />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why" element={<Why />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/find-ios-dev" element={<FindIOSDev />} />
            <Route path="/apply-as-vendor" element={<ApplyAsVendor />} />
            <Route path="/hire-ios-dev" element={<HireIOSDev />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
