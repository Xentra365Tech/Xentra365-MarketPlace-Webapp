
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingCart, ShieldCheck, ArrowLeft, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const { isAuthenticated } = useAuth();

  const handleCheckout = () => {
    if (isAuthenticated) {
      navigate('/checkout'); // We will build this page later!
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen w-screen bg-[#0A0A11] text-white font-sans flex flex-col overflow-x-hidden">
      
      {/* Minimal Nav for Checkout Flow */}
      <nav className="bg-[#12121D] border-b border-[#2A2A38] sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#6324E2] rounded-lg flex items-center justify-center font-bold text-lg lg:text-xl text-white shadow-[0_0_15px_rgba(99,36,226,0.4)]">X</div>
            <span className="text-xl lg:text-2xl font-bold tracking-tight hidden sm:block">Xentra365</span>
          </Link>
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold tracking-wider">
            <Lock size={16} /> SECURE CHECKOUT
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="flex items-center gap-3 mb-8">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-[#1E1E2C] border border-[#2A2A38] rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={18} />
          </button>
          <h1 className="text-2xl lg:text-3xl font-bold text-white">Shopping Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-12 text-center flex flex-col items-center">
            <ShoppingCart size={48} className="text-gray-600 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Your cart is empty</h2>
            <p className="text-gray-400 mb-6">Browse our secure marketplace to find high-end tech and assets.</p>
            <Link to="/" className="bg-[#6324E2] hover:bg-[#501bb8] text-white font-bold px-8 py-3 rounded-xl transition-colors">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Cart Items List */}
            <div className="flex-1 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#1E1E2C] rounded-xl overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col sm:flex-row justify-between w-full">
                    <div className="flex flex-col gap-1 mb-4 sm:mb-0">
                      <h3 className="text-base sm:text-lg font-bold text-white line-clamp-2">{item.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-400">Color: {item.color}</p>
                      <div className="text-[#A67CFF] font-black text-lg mt-2">{item.price}</div>
                    </div>
                    
                    <div className="flex sm:flex-col items-center justify-between sm:items-end sm:justify-center gap-4">
                      {/* Quantity Selector */}
                      <div className="flex items-center bg-[#1E1E2C] border border-[#2A2A38] rounded-lg">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white">-</button>
                        <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white">+</button>
                      </div>
                      
                      {/* Remove Button */}
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-400 flex items-center gap-1 text-xs font-bold uppercase tracking-wider">
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-[400px] shrink-0">
              <div className="bg-[#12121D] border border-[#2A2A38] rounded-2xl p-6 lg:p-8 sticky top-28">
                <h2 className="text-lg font-bold text-white mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Subtotal ({cartItems.length} items)</span>
                    <span className="text-white font-medium">${cartTotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Escrow Security Fee (1.5%)</span>
                    <span className="text-white font-medium">${(cartTotal * 0.015).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Shipping</span>
                    <span className="text-emerald-400 font-medium">Calculated at Checkout</span>
                  </div>
                </div>
                
                <div className="h-px bg-[#2A2A38] w-full mb-6"></div>
                
                <div className="flex justify-between items-end mb-8">
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Total</span>
                  <span className="text-2xl font-black text-[#A67CFF]">
                    ${(cartTotal + (cartTotal * 0.015)).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </span>
                </div>

                <button onClick={handleCheckout} className="w-full bg-[#6324E2] hover:bg-[#501bb8] text-white font-bold py-4 rounded-xl transition-colors shadow-[0_0_20px_rgba(99,36,226,0.3)] flex items-center justify-center gap-2 mb-4">
                  PROCEED TO CHECKOUT
                </button>
                
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <ShieldCheck size={14} className="text-blue-500" />
                  Payments secured by Xentra Escrow
                </div>
              </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
};

export default CartPage;