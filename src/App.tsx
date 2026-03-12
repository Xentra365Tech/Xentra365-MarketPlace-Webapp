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

import SellerLogin from './pages/seller/SellerLogin';
import SellerRegister from './pages/seller/SellerRegister';
import SellerDashboard from './pages/seller/SellerDashboard';
import SellerOnboarding from './pages/seller/SellerOnboarding';
import SellerReviews from './pages/seller/SellerReviews';
import SellerAnalytics from './pages/seller/SellerAnalytics';
import SellerKYC from './pages/seller/SellerKYC';
import SellerEscrowGuide from './pages/seller/SellerEscrowGuide';
import SellerOnboardingSuccess from './pages/seller/SellerOnboardingSuccess';
import SellerListings from './pages/seller/SellerListings';
import SellerOrders from './pages/seller/SellerOrders';
import SellerEscrow from './pages/seller/SellerEscrow';
import SellerSettings from './pages/seller/SellerSettings';
import SellerMessages from './pages/seller/SellerMessages';
import SellerSupport from './pages/seller/SellerSupport';

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

            <Route path="/seller/login" element={<SellerLogin />} />
            <Route path="/seller/register" element={<SellerRegister />} />
            <Route path="/seller/dashboard" element={<SellerDashboard />} /> 
            <Route path="/seller/onboarding" element={<SellerOnboarding />} />
            <Route path="/seller/reviews" element={<SellerReviews />} />
            <Route path="/seller/analytics" element={<SellerAnalytics />} />
            <Route path="/seller/onboarding/kyc" element={<SellerKYC />} />
            <Route path="/seller/onboarding/escrow" element={<SellerEscrowGuide />} />
            <Route path="/seller/onboarding/success" element={<SellerOnboardingSuccess />} />
            <Route path="/seller/listings" element={<SellerListings />} />
            <Route path="/seller/orders" element={<SellerOrders />} />
            <Route path="/seller/escrow" element={<SellerEscrow />} />
            <Route path="/seller/settings" element={<SellerSettings />} />
            <Route path="/seller/messages" element={<SellerMessages />} />
            <Route path="/seller/support" element={<SellerSupport />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;