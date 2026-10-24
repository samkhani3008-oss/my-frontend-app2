import React from 'react';

export default function CartDrawer({ isOpen, toggleCart, cart, setCart }) {
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Thank you for shopping! Sohail Khan's team will contact you via WhatsApp for order confirmation.");
    setCart([]);
    toggleCart();
  };

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={toggleCart}></div>

      {/* Drawer */}
      <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-5 bg-slate-900 text-white flex justify-between items-center">
          <h3 className="font-bold text-lg">Your Shopping Cart</h3>
          <button onClick={toggleCart} className="text-2xl font-bold hover:text-blue-400">&times;</button>
        </div>

        <div className="p-5 flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-center text-slate-400 py-12">Your cart is empty.</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex justify-between items-center mb-4 pb-4 border-b border-slate-100">
                <div>
                  <h4 className="font-bold text-sm text-slate-800">{item.title}</h4>
                  <div className="text-xs text-slate-500 mt-1">Rs. {item.price.toLocaleString()} x {item.qty}</div>
                </div>
                <div className="font-bold text-slate-900 text-sm">
                  Rs. {(item.price * item.qty).toLocaleString()}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-5 border-t border-slate-100 bg-slate-50">
          <div className="flex justify-between text-lg font-bold text-slate-900 mb-4">
            <span>Total:</span>
            <span className="text-blue-600">Rs. {totalAmount.toLocaleString()}</span>
          </div>
          <button 
            onClick={handleCheckout}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}