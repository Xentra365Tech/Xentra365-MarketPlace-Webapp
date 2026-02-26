import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import VerifyPage from "./pages/VerifyPage";
import DashboardPage from "./pages/DashboardPage";
import SearchResultsPage from './pages/SearchResultsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import WalletPage from './pages/WalletPage';
import SecurityPage from './pages/SecurityPage';
import SettingsPage from './pages/SettingsPage';
import NotificationsPage from './pages/NotificationsPage';

import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            {/* Public Landing Page */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Auth Screens */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/verify" element={<VerifyPage />} />
            
            {/* App Screens */}
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/:category" element={<DashboardPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            
            {/* Cart & Checkout */}
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;