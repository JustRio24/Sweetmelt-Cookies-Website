"use client";

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  Plus,
  Minus,
  ShoppingCart,
  Heart,
  Shield,
  Truck,
  Award,
} from "lucide-react";
import Toast from "../components/Toast";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState("original");
  const [selectedImage, setSelectedImage] = useState(0);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "info",
  });

  const products = [
    {
      id: 1,
      name: "Chocolate Chip Classic",
      price: 45000,
      originalPrice: 50000,
      image: "/Classic1.jpg",
      images: ["/Classic1.jpg", "/Classic2.jpg", "/Classic3.jpg"],
      rating: 4.9,
      reviewCount: 127,
      description:
        "Cookies klasik dengan chocolate chip premium yang dibuat dari bahan-bahan berkualitas tinggi. Setiap gigitan memberikan sensasi renyah di luar dan lembut di dalam dengan cita rasa coklat yang autentik.",
      ingredients:
        "Tepung terigu premium, mentega, gula, telur, chocolate chip Belgium, vanilla extract, baking powder",
      variants: [
        { id: "original", name: "Original", price: 45000 },
        { id: "large", name: "Large Pack", price: 80000 },
        { id: "gift-box", name: "Gift Box", price: 95000 },
      ],
      features: [
        "Tanpa pengawet buatan",
        "Halal certified",
        "Bahan premium",
        "Kemasan food grade",
      ],
    },
    {
      id: 2,
      name: "Red Velvet Delight",
      price: 50000,
      originalPrice: 55000,
      image: "/RedValvet.jpg",
      images: ["/RedValvet.jpg", "/RedValvet2.jpeg", "/RedValvet3.jpeg"],
      rating: 4.8,
      reviewCount: 98,
      description:
        "Cookies red velvet dengan cream cheese dan aroma vanilla khas, cocok untuk pencinta rasa lembut dengan sentuhan keju.",
      ingredients:
        "Tepung, gula, butter, telur, cream cheese, cocoa powder, vanilla, pewarna makanan alami",
      variants: [
        { id: "original", name: "Original", price: 50000 },
        { id: "gift-box", name: "Gift Box", price: 95000 },
      ],
      features: [
        "Rasa khas red velvet",
        "Isi cream cheese",
        "Premium packaging",
        "Tanpa bahan kimia",
      ],
    },
    {
      id: 3,
      name: "Matcha Green Tea",
      price: 55000,
      originalPrice: 60000,
      image: "/Matcha.jpg",
      rating: 4.8,
      rating: 4.9,
      category: "premium",
      description:
        "Cookies matcha dengan white chocolate yang lembut dan aroma teh hijau Jepang yang autentik.",
      images: ["/Matcha.jpg", "/Matcha2.jpeg", "/Matcha3.jpeg"],
      reviewCount: 112,
      ingredients:
        "Tepung terigu, gula, butter, telur, matcha powder Jepang, white chocolate",
      variants: [
        { id: "original", name: "Original", price: 55000 },
        { id: "large", name: "Large Pack", price: 95000 },
      ],
      features: [
        "Mengandung matcha asli Jepang",
        "White chocolate premium",
        "Tanpa pengawet",
        "Aroma alami",
      ],
    },
    {
      id: 4,
      name: "Double Chocolate",
      price: 48000,
      originalPrice: 52000,
      image: "/DoubleChocolate.jpg",
      images: ["/DoubleChocolate.jpg", "/DC2.jpeg", "/DC3.jpeg"],
      rating: 4.7,
      category: "classic",
      description:
        "Cookies coklat lembut dengan potongan dark chocolate chunks untuk rasa intens dan kaya coklat.",
      reviewCount: 89,
      ingredients: "Tepung, kakao, dark chocolate, gula, telur, butter",
      variants: [
        { id: "original", name: "Original", price: 48000 },
        { id: "double-pack", name: "Double Pack", price: 90000 },
      ],
      features: [
        "Kaya coklat",
        "Tekstur fudgy",
        "Dark chocolate asli",
        "Cocok untuk pecinta coklat",
      ],
    },
    {
      id: 5,
      name: "Strawberry Cream",
      price: 52000,
      originalPrice: 58000,
      image: "/StrawberryCream.jpg",
      rating: 4.8,
      category: "premium",
      description:
        "Cookies manis dengan isian cream dan aroma stroberi segar, favorit anak-anak dan dewasa.",
      images: [
        "/StrawberryCream.jpg",
        "/StrawberryCream2.jpeg",
        "/StrawberryCream3.jpeg",
      ],
      reviewCount: 74,
      ingredients:
        "Tepung, gula, butter, telur, essence stroberi, cream filling",
      variants: [
        { id: "original", name: "Original", price: 52000 },
        { id: "gift-box", name: "Gift Box", price: 98000 },
      ],
      features: [
        "Isi cream stroberi",
        "Manis seimbang",
        "Warna alami",
        "Daya tarik visual tinggi",
      ],
    },
    {
      id: 6,
      name: "Vanilla Butter",
      price: 42000,
      originalPrice: 47000,
      image: "/Vanilla.jpg",
      rating: 4.6,
      category: "classic",
      description:
        "Cookies vanilla lembut dengan rasa butter premium yang ringan dan wangi.",
      images: ["/Vanilla.jpg", "/VB2.jpeg", "/VB3.jpeg"],
      reviewCount: 65,
      ingredients: "Tepung, mentega, gula, telur, vanilla extract",
      variants: [
        { id: "original", name: "Original", price: 42000 },
        { id: "butter-pack", name: "Butter Pack", price: 80000 },
      ],
      features: [
        "Rasa butter asli",
        "Tanpa pewarna",
        "Aroma vanilla natural",
        "Ringan di lidah",
      ],
    },
    {
      id: 7,
      name: "Cookies & Cream",
      price: 49000,
      originalPrice: 55000,
      image: "/Co&Cream.jpg",
      rating: 4.8,
      category: "premium",
      description:
        "Cookies lembut dengan remahan oreo dan isian krim manis, cocok untuk camilan santai.",
      images: ["/Co&Cream.jpg", "/cc2.jpeg", "/cc3.jpeg"],
      reviewCount: 92,
      ingredients:
        "Tepung, gula, butter, telur, vanilla, cookies crumbs, cream filling",
      variants: [
        { id: "original", name: "Original", price: 49000 },
        { id: "snack-pack", name: "Snack Pack", price: 85000 },
      ],
      features: [
        "Remahan oreo",
        "Cream filling",
        "Rasa manis pas",
        "Disukai anak-anak",
      ],
    },
    {
      id: 8,
      name: "Peanut Butter",
      price: 46000,
      originalPrice: 50000,
      image: "/Peanut.jpg",
      rating: 4.7,
      category: "classic",
      description:
        "Cookies dengan selai kacang alami, tekstur crunchy dan rasa gurih yang khas.",
      images: ["/Peanut.jpg", "/PB2.jpeg", "/PB3.jpeg"],
      reviewCount: 70,
      ingredients: "Tepung, gula, butter, telur, kacang tanah sangrai, garam",
      variants: [
        { id: "original", name: "Original", price: 46000 },
        { id: "twin-pack", name: "Twin Pack", price: 87000 },
      ],
      features: [
        "Selai kacang asli",
        "Gurih dan crunchy",
        "Protein alami",
        "Cocok untuk ngemil",
      ],
    },
    {
      id: 9,
      name: "Salted Caramel",
      price: 58000,
      originalPrice: 64000,
      image: "/SaltedCaramel.jpg",
      rating: 4.9,
      category: "premium",
      description:
        "Cookies manis asin dengan lelehan caramel dan sentuhan sea salt premium.",
      images: ["/SaltedCaramel.jpg", "/SC2.jpeg", "/SC3.jpeg"],
      reviewCount: 104,
      ingredients: "Tepung, gula, telur, butter, caramel sauce, sea salt",
      variants: [
        { id: "original", name: "Original", price: 58000 },
        { id: "deluxe-box", name: "Deluxe Box", price: 100000 },
      ],
      features: [
        "Salted caramel premium",
        "Manis dan asin seimbang",
        "Lelehan caramel lembut",
        "Topping eksklusif",
      ],
    },
  ];
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500">
        Produk tidak ditemukan.
      </div>
    );
  }

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    const selectedVariantData = product.variants.find(
      (v) => v.id === selectedVariant
    );
    const productToAdd = {
      ...product,
      variant: selectedVariantData,
      quantity: quantity,
      totalPrice: selectedVariantData.price * quantity,
    };
    addToCart(productToAdd);

    setToast({
      show: true,
      message: "Produk berhasil ditambahkan ke keranjang!",
      type: "success",
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const selectedVariantData = product.variants.find(
    (v) => v.id === selectedVariant
  );

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-pink-500">
              Beranda
            </Link>
            <span>/</span>
            <Link to="/catalog" className="hover:text-pink-500">
              Katalog
            </Link>
            <span>/</span>
            <span className="text-gray-800">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 ${
                    selectedImage === index
                      ? "border-pink-500"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">
                    ({product.rating}) • {product.reviewCount} ulasan
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-pink-500">
                  {formatPrice(selectedVariantData.price)}
                </span>
                {product.originalPrice > selectedVariantData.price && (
                  <span className="text-xl text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            {/* Variants */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Pilih Varian
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {product.variants.map((variant) => (
                  <label
                    key={variant.id}
                    className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      selectedVariant === variant.id
                        ? "border-pink-500 bg-pink-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="variant"
                        value={variant.id}
                        checked={selectedVariant === variant.id}
                        onChange={(e) => setSelectedVariant(e.target.value)}
                        className="sr-only"
                      />
                      <span className="font-medium text-gray-800">
                        {variant.name}
                      </span>
                    </div>
                    <span className="font-semibold text-pink-500">
                      {formatPrice(variant.price)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Jumlah
              </h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    disabled={quantity >= 10}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-gray-600">Maksimal 10 pcs</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors flex items-center justify-center"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Tambah ke Keranjang
              </button>
              <button className="px-6 py-3 border-2 border-pink-500 text-pink-500 rounded-full font-semibold hover:bg-pink-50 transition-colors flex items-center justify-center">
                <Heart className="w-5 h-5 mr-2" />
                Wishlist
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Deskripsi Produk
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Bahan-bahan
              </h3>
              <p className="text-gray-600">{product.ingredients}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Informasi Pengiriman
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-600">
                    Same day delivery Palembang
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Garansi fresh 3 hari</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Promo Spesial!</h3>
              <p className="text-pink-100 mb-4">
                Beli 3 gratis 1 untuk semua varian
              </p>
              <Link
                to="/catalog"
                className="bg-white text-pink-500 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Lihat Promo
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Toast */}
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
    </div>
  );
};

export default ProductDetail;
