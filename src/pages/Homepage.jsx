import { Link } from "react-router-dom";
import { Star, Award, Truck, Shield } from "lucide-react";
import React, { useState, useEffect } from "react";
import TypingEffect from "../components/TypingEffect";
import TypingEffectWithColor from "../components/TypingEffectWithColor";
import ParallaxSection from "../components/ParallaxSection";

const Homepage = () => {
  const bestSellers = [
    {
      id: 1,
      name: "Chocolate Chip Classic",
      price: "Rp 45.000",
      image: "/Classic1.jpg",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Red Velvet Delight",
      price: "Rp 50.000",
      image: "/RedValvet.jpg",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Matcha Green Tea",
      price: "Rp 55.000",
      image: "/Matcha.jpg",
      rating: 4.9,
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Cookies terenak yang pernah saya coba! Teksturnya sempurna dan rasanya autentik.",
      rating: 5,
    },
    {
      name: "Budi S.",
      text: "Packaging cantik, rasa lezat. Cocok banget buat kado atau cemilan sehari-hari.",
      rating: 5,
    },
  ];
  const rotatingTexts = [
    "Cita Rasa Elegan",
    "Lezat & Lembut",
    "Favorit Keluarga",
    "Disukai Semua Usia",
  ];
  const [currentText, setCurrentText] = useState(rotatingTexts[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Mulai fade-out
      setTimeout(() => {
        setCurrentText((prevText) => {
          const currentIndex = rotatingTexts.indexOf(prevText);
          const nextIndex = (currentIndex + 1) % rotatingTexts.length;
          return rotatingTexts[nextIndex];
        });
        setFade(true); // Fade-in setelah ganti teks
      }, 500); // Delay untuk animasi keluar
    }, 3000); // Interval pergantian teks

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-pink-50 via-rose-100 to-rose-200 py-20 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-pink-100/30 to-rose-200/30 pointer-events-none z-0" />

        {/* Decorative Blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse z-0" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Section */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight animate-fade-in-full">
                Cookies Manis,
                <span
                  className={`text-pink-500 block transition-opacity duration-500 ${
                    fade ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {currentText}
                </span>
              </h1>
              <TypingEffect
                text="Nikmati kelezatan cookies premium yang dibuat dengan bahan
                berkualitas tinggi dan resep rahasia keluarga."
                typingSpeed={15}
                element="p"
                className="text-xl text-gray-600 mb-8 animate-fadeIn delay-200 w-[580px]"
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/catalog"
                  className="relative overflow-hidden bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out text-center shadow-md before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:via-white/30 before:to-white/10 before:opacity-0 hover:before:opacity-10 before:transition-opacity"
                >
                  Pesan Sekarang
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-100 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out text-center"
                >
                  Tentang Kami
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="border-[10px] border-pink-100 rounded-[30px] shadow-xl p-1 bg-white/60 backdrop-blur-md transition-transform duration-500 hover:scale-105">
                <img
                  src="/cookies.jpg"
                  alt="SweetMelt Cookies"
                  className="w-full h-auto rounded-[30px] border-4 border-pink-300 shadow-pink-200 shadow-lg"
                />
              </div>

              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-800 px-4 py-2 rounded-full font-bold transform rotate-12 shadow-md">
                Promo Spesial!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-16 bg-gradient-to-br from-pink-200 via-rose-300 to-rose-400/80 relative overflow-hidden shadow-lg rounded-none">
        {/* Decorative Glow */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none z-0 animate-pulse" />

        {/* Floating Sparkle Dots */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-10 left-16 w-6 h-6 bg-white/40 rounded-full blur-xl animate-bounce" />
          <div className="absolute bottom-12 right-20 w-5 h-5 bg-white/30 rounded-full blur-md animate-bounce delay-300" />
        </div>

        <ParallaxSection
          imageUrl={"./bg_parallax.jpeg"}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-wide text-slate-800 mb-4 uppercase animate-bounce">
              🎉 Promo Spesial Hari Ini!
            </h2>
            <p className="text-lg sm:text-xl text-rose-800 mb-6 font-medium">
              Beli{" "}
              <span className="font-bold text-white bg-rose-500 px-2 py-0.5 rounded-md shadow-sm">
                3
              </span>{" "}
              Gratis{" "}
              <span className="font-bold text-white bg-rose-500 px-2 py-0.5 rounded-md shadow-sm">
                1
              </span>{" "}
              untuk semua varian cookies 🍪
            </p>
            <Link
              to="/catalog"
              className="inline-block px-10 py-3 rounded-full text-white bg-rose-600 hover:bg-rose-700 font-semibold transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl"
            >
              🚀 Ambil Promo Sekarang
            </Link>
          </div>
        </ParallaxSection>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute -top-32 -left-24 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0 animate-pulse" />
        <div className="absolute -bottom-32 -right-20 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 z-0 animate-pulse delay-200" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <TypingEffectWithColor
              textParts={[
                { text: "Produk ", className: "text-rose-700" },
                { text: "Best Seller", className: "text-pink-400" },
              ]}
              typingSpeed={150}
              element="h2"
              wrapperClass="text-3xl lg:text-4xl font-bold mb-4 "
            />
            <p className="text-xl text-gray-600">
              Cookies favorit pelanggan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestSellers.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl shadow-lg border border-pink-100 overflow-hidden transform hover:scale-[1.03] transition duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow animate-bounce">
                    Best Seller
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-b from-white to-pink-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-3">
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
                      {product.price}
                    </span>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition-colors duration-300 shadow-sm"
                    >
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 overflow-hidden">
        {/* Decorative Blob Backgrounds */}
        <div className="absolute -top-32 -left-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0 animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 z-0 animate-pulse delay-200" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <TypingEffectWithColor
              textParts={[
                { text: "Mengapa Pilih ", className: "text-rose-700" },
                { text: "SweetMelt?", className: "text-pink-400" },
              ]}
              typingSpeed={150}
              element="h2"
              wrapperClass="text-3xl lg:text-4xl font-bold mb-4"
            />

            <p className="text-gray-600 text-lg">
              Kami memberikan yang terbaik untuk pengalaman cookies yang tak
              terlupakan 🍪
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card */}
            {[
              {
                icon: <Award className="w-8 h-8 text-pink-500" />,
                title: "Kualitas Premium",
                desc: "Bahan berkualitas tinggi dan resep rahasia keluarga",
                bg: "bg-pink-100",
              },
              {
                icon: <Shield className="w-8 h-8 text-green-500" />,
                title: "Halal & Aman",
                desc: "Tersertifikasi halal dan tanpa pengawet berbahaya",
                bg: "bg-green-100",
              },
              {
                icon: <Truck className="w-8 h-8 text-blue-500" />,
                title: "Pengiriman Cepat",
                desc: "Same day delivery untuk area Palembang",
                bg: "bg-blue-100",
              },
              {
                icon: <Star className="w-8 h-8 text-yellow-500" />,
                title: "Rating Tinggi",
                desc: "4.9/5 rating dari ribuan pelanggan puas",
                bg: "bg-yellow-100",
              },
            ].map(({ icon, title, desc, bg }, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 ease-in-out group"
              >
                <div
                  className={`w-16 h-16 ${bg} rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Kata Pelanggan Kami
            </h2>
            <p className="text-lg text-gray-600">
              Apa kata mereka tentang cookies kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md border border-pink-200 relative hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute -top-6 left-6 text-pink-300 text-5xl opacity-30">
                  &ldquo;
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-900">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/testimonials"
              className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors"
            >
              Lihat Semua Testimoni
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
