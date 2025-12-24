"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Filter } from "lucide-react";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const products = [
    {
      id: 1,
      name: "Chocolate Chip Classic",
      price: 45000,
      image: "/Classic1.jpg",
      rating: 4.9,
      category: "classic",
      description: "Cookies klasik dengan chocolate chip premium",
    },
    {
      id: 2,
      name: "Red Velvet Delight",
      price: 50000,
      image: "/RedValvet.jpg",
      rating: 4.8,
      category: "premium",
      description: "Cookies red velvet dengan cream cheese",
    },
    {
      id: 3,
      name: "Matcha Green Tea",
      price: 55000,
      image: "/Matcha.jpg",
      rating: 4.9,
      category: "premium",
      description: "Cookies matcha dengan white chocolate",
    },
    {
      id: 4,
      name: "Double Chocolate",
      price: 48000,
      image: "/DoubleChocolate.jpg",
      rating: 4.7,
      category: "classic",
      description: "Cookies coklat dengan dark chocolate chunks",
    },
    {
      id: 5,
      name: "Strawberry Cream",
      price: 52000,
      image: "/StrawberryCream.jpg",
      rating: 4.8,
      category: "premium",
      description: "Cookies strawberry dengan cream filling",
    },
    {
      id: 6,
      name: "Vanilla Butter",
      price: 42000,
      image: "/Vanilla.jpg",
      rating: 4.6,
      category: "classic",
      description: "Cookies vanilla dengan butter premium",
    },
    {
      id: 7,
      name: "Cookies & Cream",
      price: 49000,
      image: "/Co&Cream.jpg",
      rating: 4.8,
      category: "premium",
      description: "Cookies dengan oreo crumbs dan cream",
    },
    {
      id: 8,
      name: "Peanut Butter",
      price: 46000,
      image: "/Peanut.jpg",
      rating: 4.7,
      category: "classic",
      description: "Cookies selai kacang dengan tekstur crunchy",
    },
    {
      id: 9,
      name: "Salted Caramel",
      price: 58000,
      image: "/SaltedCaramel.jpg",
      rating: 4.9,
      category: "premium",
      description: "Cookies caramel dengan sea salt premium",
    },
  ];

  const categories = [
    { value: "all", label: "Semua Produk" },
    { value: "classic", label: "Classic" },
    { value: "premium", label: "Premium" },
  ];

  const priceRanges = [
    { value: "all", label: "Semua Harga" },
    { value: "under50", label: "Di bawah Rp 50.000" },
    { value: "above50", label: "Di atas Rp 50.000" },
  ];

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;
    const priceMatch =
      priceRange === "all" ||
      (priceRange === "under50" && product.price < 50000) ||
      (priceRange === "above50" && product.price >= 50000);

    return categoryMatch && priceMatch;
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen py-12 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="flex items-center justify-center text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 gap-2">
            <span role="img" aria-label="cookie" className="animate-pulse">
              🍪
            </span>
            <span className="shiny-text pb-2 ">Katalog Produk</span>
          </h1>

          <p className="text-lg text-gray-600">
            Temukan cookies favorit Anda dari koleksi premium kami
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-md border border-pink-200 p-6 mb-10">
          <div className="flex items-center mb-6">
            <Filter className="w-6 h-6 text-pink-500 mr-2" />
            <h3 className="text-xl font-bold text-gray-800">Filter Produk</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Kategori
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Rentang Harga
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md border border-pink-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm uppercase tracking-wide">
                  {product.category === "premium" ? "Premium" : "Classic"}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-b from-white to-pink-50">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {product.description}
                </p>

                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">
                    ({product.rating})
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-extrabold text-pink-600">
                    {formatPrice(product.price)}
                  </span>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-black text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              Tidak ada produk yang sesuai dengan filter Anda.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setPriceRange("all");
              }}
              className="mt-4 text-pink-600 hover:text-pink-700 font-semibold underline"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl p-10 lg:p-16 text-center text-white shadow-xl">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
            Tidak Menemukan yang Anda Cari?
          </h2>
          <p className="text-lg lg:text-xl mb-6">
            Hubungi kami untuk custom order atau pertanyaan lainnya
          </p>
          <Link
            to="/contact"
            className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
