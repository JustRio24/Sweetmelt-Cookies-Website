"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import CheckoutModal from "../components/CheckoutModal";

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.variant ? item.variant.price : item.price;
      return total + price * item.quantity;
    }, 0);
  };

  const shippingCost = 15000;
  const subtotal = calculateSubtotal();
  const total = subtotal + shippingCost;

  const handleWhatsAppOrder = () => {
    const orderDetails = cartItems
      .map((item) => {
        const price = item.variant ? item.variant.price : item.price;
        const variantText = item.variant ? ` (${item.variant.name})` : "";
        return `• ${item.name}${variantText} - ${
          item.quantity
        }x - ${formatPrice(price * item.quantity)}`;
      })
      .join("\n");

    const message = `Halo! Saya ingin memesan:\n\n${orderDetails}\n\nSubtotal: ${formatPrice(
      subtotal
    )}\nOngkir: ${formatPrice(shippingCost)}\nTotal: ${formatPrice(
      total
    )}\n\nTerima kasih!`;

    const whatsappUrl = `https://wa.me/62887437229494?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleOnlineOrder = () => {
    setIsCheckoutModalOpen(true);
  };

  const handleOrderComplete = () => {
    // Clear all items from cart
    cartItems.forEach((item) => removeFromCart(item.id));
    setIsCheckoutModalOpen(false);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Keranjang Anda Kosong
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Belum ada produk yang ditambahkan ke keranjang
            </p>
            <Link
              to="/catalog"
              className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors inline-block"
            >
              Mulai Belanja
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
            Keranjang Belanja
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => {
                const price = item.variant ? item.variant.price : item.price;
                const variantText = item.variant
                  ? item.variant.name
                  : "Original";

                return (
                  <div
                    key={`${item.id}-${item.variant?.id || "default"}`}
                    className="bg-white rounded-2xl shadow-lg p-6"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={
                          item.image || "/placeholder.svg?height=100&width=100"
                        }
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Varian: {variantText}
                        </p>
                        <p className="text-pink-500 font-semibold">
                          {formatPrice(price)}
                        </p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-3 py-2 font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="text-lg font-semibold text-gray-800">
                        {formatPrice(price * item.quantity)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Ringkasan Pesanan
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ongkos Kirim</span>
                    <span className="font-semibold">
                      {formatPrice(shippingCost)}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold text-gray-800">
                        Total
                      </span>
                      <span className="text-lg font-bold text-pink-500">
                        {formatPrice(total)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                  >
                    Pesan via WhatsApp
                  </button>

                  <button
                    onClick={handleOnlineOrder}
                    className="w-full bg-pink-500 text-white py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors"
                  >
                    Checkout Online
                  </button>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Pilihan Pengiriman
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Same Day (Palembang)</span>
                      <span>Rp 15.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Regular (1-2 hari)</span>
                      <span>Rp 10.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>COD (Cash on Delivery)</span>
                      <span>Rp 20.000</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <Link
                    to="/catalog"
                    className="text-pink-500 hover:text-pink-600 font-medium text-sm"
                  >
                    ← Lanjut Belanja
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        cartItems={cartItems}
        total={total}
        subtotal={subtotal}
        shippingCost={shippingCost}
        onOrderComplete={handleOrderComplete}
      />
    </>
  );
};

export default Cart;
