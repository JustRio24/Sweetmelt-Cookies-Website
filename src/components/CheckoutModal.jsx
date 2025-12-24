"use client";

import { useState } from "react";
import {
  X,
  CreditCard,
  Smartphone,
  Building,
  Check,
  ArrowLeft,
  ArrowRight,
  Truck,
  User,
} from "lucide-react";

const CheckoutModal = ({
  isOpen,
  onClose,
  cartItems,
  total,
  subtotal,
  shippingCost,
  onOrderComplete,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  });

  const [selectedPayment, setSelectedPayment] = useState("");
  const [selectedShipping, setSelectedShipping] = useState("same-day");

  const paymentMethods = [
    {
      id: "bank-transfer",
      name: "Transfer Bank",
      icon: Building,
      description: "BCA, Mandiri, BNI, BRI",
      fee: 0,
    },
    {
      id: "cash-on-delivery",
      name: "Cash On Delivery",
      icon: Building,
      description: "Bayar Ditempat Setelah Barang Sampai",
      fee: 0,
    },
    {
      id: "e-wallet",
      name: "E-Wallet",
      icon: Smartphone,
      description: "GoPay, OVO, DANA, ShopeePay",
      fee: 0,
    },
    {
      id: "virtual-account",
      name: "Virtual Account",
      icon: CreditCard,
      description: "VA BCA, Mandiri, BNI",
      fee: 2500,
    },
    {
      id: "credit-card",
      name: "Credit Card",
      icon: CreditCard,
      description: "Visa, Mastercard, JCB",
      fee: 5000,
    },
  ];

  const shippingOptions = [
    {
      id: "same-day",
      name: "Same Day Delivery",
      description: "Palembang area, delivered today",
      price: 15000,
      duration: "3-6 jam",
    },
    {
      id: "regular",
      name: "Regular Delivery",
      description: "1-2 hari kerja",
      price: 10000,
      duration: "1-2 hari",
    },
    {
      id: "cod",
      name: "Cash on Delivery",
      description: "Bayar saat terima",
      price: 20000,
      duration: "1-2 hari",
    },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return (
          customerData.name &&
          customerData.email &&
          customerData.phone &&
          customerData.address &&
          customerData.city
        );
      case 2:
        return selectedShipping;
      case 3:
        return selectedPayment;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const calculateFinalTotal = () => {
    const selectedShippingOption = shippingOptions.find(
      (option) => option.id === selectedShipping
    );
    const selectedPaymentMethod = paymentMethods.find(
      (method) => method.id === selectedPayment
    );

    const shippingPrice = selectedShippingOption
      ? selectedShippingOption.price
      : 15000;
    const paymentFee = selectedPaymentMethod ? selectedPaymentMethod.fee : 0;

    return subtotal + shippingPrice + paymentFee;
  };

  const processOrder = async () => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const newOrderId = `SM${Date.now()}`;
    setOrderId(newOrderId);
    setOrderSuccess(true);
    setIsLoading(false);

    // Call parent function to clear cart
    setTimeout(() => {
      onOrderComplete();
      setCurrentStep(1);
      setOrderSuccess(false);
      setCustomerData({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        notes: "",
      });
      setSelectedPayment("");
      setSelectedShipping("same-day");
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>
            {!orderSuccess && (
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        step <= currentStep
                          ? "bg-pink-500 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {step < currentStep ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        step
                      )}
                    </div>
                    {step < 4 && (
                      <div
                        className={`w-8 h-1 mx-1 ${
                          step < currentStep ? "bg-pink-500" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {orderSuccess ? (
            /* Success Screen */
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Pesanan Berhasil!
              </h3>
              <p className="text-xl text-gray-600 mb-6">
                Terima kasih atas pesanan Anda. Kami akan segera memproses
                pesanan Anda.
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-sm text-gray-600">Order ID</p>
                    <p className="font-semibold text-gray-800">#{orderId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Pembayaran</p>
                    <p className="font-semibold text-pink-500">
                      {formatPrice(calculateFinalTotal())}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Metode Pembayaran</p>
                    <p className="font-semibold text-gray-800">
                      {
                        paymentMethods.find((m) => m.id === selectedPayment)
                          ?.name
                      }
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Estimasi Pengiriman</p>
                    <p className="font-semibold text-gray-800">
                      {
                        shippingOptions.find((s) => s.id === selectedShipping)
                          ?.duration
                      }
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Instruksi pembayaran telah dikirim ke email Anda. Pesanan akan
                diproses setelah pembayaran dikonfirmasi.
              </p>
            </div>
          ) : isLoading ? (
            /* Loading Screen */
            <div className="p-8 text-center">
              <div className="w-20 h-20 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Memproses Pesanan...
              </h3>
              <p className="text-gray-600">
                Mohon tunggu, kami sedang memproses pesanan Anda.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Step 1: Customer Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-pink-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Informasi Pengiriman
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={customerData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={customerData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                          placeholder="nama@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nomor Telepon *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={customerData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                          placeholder="+62 812-3456-7890"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Kota *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={customerData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                          placeholder="Palembang"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Alamat Lengkap *
                      </label>
                      <textarea
                        name="address"
                        value={customerData.address}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Jl. Contoh No. 123, RT/RW 01/02, Kelurahan, Kecamatan"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Kode Pos
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          value={customerData.postalCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                          placeholder="12345"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Catatan (Opsional)
                        </label>
                        <input
                          type="text"
                          name="notes"
                          value={customerData.notes}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                          placeholder="Catatan untuk kurir"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Shipping Options */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Truck className="w-5 h-5 text-blue-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Pilih Pengiriman
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {shippingOptions.map((option) => (
                        <label
                          key={option.id}
                          className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all ${
                            selectedShipping === option.id
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            <input
                              type="radio"
                              name="shipping"
                              value={option.id}
                              checked={selectedShipping === option.id}
                              onChange={(e) =>
                                setSelectedShipping(e.target.value)
                              }
                              className="sr-only"
                            />
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                {option.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {option.description}
                              </p>
                              <p className="text-sm text-blue-600 font-medium">
                                {option.duration}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-800">
                              {formatPrice(option.price)}
                            </p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Payment Method */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-green-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Metode Pembayaran
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {paymentMethods.map((method) => (
                        <label
                          key={method.id}
                          className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                            selectedPayment === method.id
                              ? "border-green-500 bg-green-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <input
                            type="radio"
                            name="payment"
                            value={method.id}
                            checked={selectedPayment === method.id}
                            onChange={(e) => setSelectedPayment(e.target.value)}
                            className="sr-only"
                          />
                          <div className="flex items-center space-x-4 w-full">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                              <method.icon className="w-6 h-6 text-gray-600" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-800">
                                {method.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {method.description}
                              </p>
                              {method.fee > 0 && (
                                <p className="text-sm text-orange-600">
                                  +{formatPrice(method.fee)} biaya admin
                                </p>
                              )}
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Review Order */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-purple-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Review Pesanan
                      </h3>
                    </div>

                    {/* Customer Info Review */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Informasi Pengiriman
                      </h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>
                          <span className="font-medium">Nama:</span>{" "}
                          {customerData.name}
                        </p>
                        <p>
                          <span className="font-medium">Email:</span>{" "}
                          {customerData.email}
                        </p>
                        <p>
                          <span className="font-medium">Telepon:</span>{" "}
                          {customerData.phone}
                        </p>
                        <p>
                          <span className="font-medium">Alamat:</span>{" "}
                          {customerData.address}, {customerData.city}
                        </p>
                      </div>
                    </div>

                    {/* Shipping & Payment Review */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-xl p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Pengiriman
                        </h4>
                        <p className="text-sm text-gray-600">
                          {
                            shippingOptions.find(
                              (s) => s.id === selectedShipping
                            )?.name
                          }
                        </p>
                      </div>
                      <div className="bg-green-50 rounded-xl p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Pembayaran
                        </h4>
                        <p className="text-sm text-gray-600">
                          {
                            paymentMethods.find((p) => p.id === selectedPayment)
                              ?.name
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-2xl p-6 sticky top-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Ringkasan Pesanan
                  </h3>

                  {/* Items */}
                  <div className="space-y-3 mb-4">
                    {cartItems.slice(0, 3).map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-3"
                      >
                        <img
                          src={
                            item.image || "/placeholder.svg?height=40&width=40"
                          }
                          alt={item.name}
                          className="w-10 h-10 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-600">
                            {item.quantity}x
                          </p>
                        </div>
                      </div>
                    ))}
                    {cartItems.length > 3 && (
                      <p className="text-sm text-gray-600">
                        +{cartItems.length - 3} item lainnya
                      </p>
                    )}
                  </div>

                  {/* Pricing */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">
                        {formatPrice(subtotal)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ongkir</span>
                      <span className="font-medium">
                        {formatPrice(
                          shippingOptions.find((s) => s.id === selectedShipping)
                            ?.price || 15000
                        )}
                      </span>
                    </div>
                    {selectedPayment &&
                      paymentMethods.find((p) => p.id === selectedPayment)
                        ?.fee > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Biaya Admin</span>
                          <span className="font-medium">
                            {formatPrice(
                              paymentMethods.find(
                                (p) => p.id === selectedPayment
                              )?.fee || 0
                            )}
                          </span>
                        </div>
                      )}
                    <div className="border-t border-gray-300 pt-2">
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-800">
                          Total
                        </span>
                        <span className="font-bold text-pink-500">
                          {formatPrice(calculateFinalTotal())}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer Navigation */}
          {!orderSuccess && !isLoading && (
            <div className="border-t border-gray-200 p-6">
              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-colors ${
                    currentStep === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Kembali</span>
                </button>

                {currentStep < 4 ? (
                  <button
                    onClick={nextStep}
                    disabled={!validateStep(currentStep)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-colors ${
                      validateStep(currentStep)
                        ? "bg-pink-500 text-white hover:bg-pink-600"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <span>Lanjutkan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={processOrder}
                    className="flex items-center space-x-2 bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Bayar Sekarang</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
