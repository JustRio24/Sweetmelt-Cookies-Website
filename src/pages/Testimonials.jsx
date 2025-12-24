import { Star, Quote } from "lucide-react";
import { useState } from "react";
import Toast from "../components/Toast";
import {Link} from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Maharani",
      location: "Palembang",
      rating: 5,
      text: "Cookies terenak yang pernah saya coba! Teksturnya sempurna, renyah di luar tapi lembut di dalam. Chocolate chipnya juga premium banget. Pasti akan order lagi!",
      image: "/Sarah.jpg",
      product: "Chocolate Chip Classic",
    },
    {
      id: 2,
      name: "Budi Santoso",
      location: "Bandung",
      rating: 5,
      text: "Packaging cantik banget, cocok buat kado. Rasanya juga lezat, tidak terlalu manis. Anak-anak di rumah suka sekali. Recommended!",
      image:
        "https://i.pinimg.com/736x/36/1f/11/361f1158bce9909614efcff1bf4bdb93.jpg",
      product: "Red Velvet Delight",
    },
    {
      id: 3,
      name: "Maya Putri",
      location: "Surabaya",
      rating: 5,
      text: "Matcha cookies-nya authentic banget! Tidak terlalu manis dan rasa matchanya pas. Pengiriman juga cepat dan aman. Top deh!",
      image:
        "https://i.pinimg.com/736x/d5/99/ba/d599ba11c706cec991e3d83b62d6d91d.jpg",
      product: "Matcha Green Tea",
    },
    {
      id: 4,
      name: "Andi Rahman",
      location: "Medan",
      rating: 4,
      text: "Kualitas cookies sangat baik, fresh dan enak. Harga sebanding dengan kualitas. Cuma pengiriman ke Medan agak lama, tapi worth it!",
      image:
        "https://i.pinimg.com/736x/0d/b7/61/0db7613a8a1aa80afccb4e348f0f3505.jpg",
      product: "Double Chocolate",
    },
    {
      id: 5,
      name: "Lisa Anggraini",
      location: "Yogyakarta",
      rating: 5,
      text: "Strawberry cream cookies-nya unik dan enak! Cream-nya tidak terlalu manis dan strawberry-nya fresh. Inovasi yang bagus!",
      image:
        "https://i.pinimg.com/736x/0e/60/03/0e6003825ff3ea565a58ffccae863950.jpg",
      product: "Strawberry Cream",
    },
    {
      id: 6,
      name: "Dedi Kurniawan",
      location: "Semarang",
      rating: 5,
      text: "Vanilla butter cookies yang simple tapi enak banget. Butter-nya premium dan tidak berminyak. Cocok untuk cemilan sehari-hari.",
      image:
        "https://i.pinimg.com/736x/90/28/26/90282621baf3e1e92f58f98134ebece8.jpg",
      product: "Vanilla Butter",
    },
    {
      id: 7,
      name: "Rina Sari",
      location: "Makassar",
      rating: 5,
      text: "Cookies & cream favorit keluarga! Oreo crumbs-nya banyak dan cream-nya lembut. Anak-anak sampai minta dibelikan lagi.",
      image:
        "https://i.pinimg.com/736x/7f/bd/e7/7fbde72ce2b176f8aab4beaadafa06f6.jpg",
      product: "Cookies & Cream",
    },
    {
      id: 8,
      name: "Agus Wijaya",
      location: "Palembang",
      rating: 4,
      text: "Peanut butter cookies-nya crunchy dan gurih. Rasa kacangnya authentic. Packaging juga rapi dan aman untuk pengiriman jauh.",
      image:
        "https://i.pinimg.com/736x/8d/98/0b/8d980bca3f11534c39928278c803f660.jpg",
      product: "Peanut Butter",
    },
    {
      id: 9,
      name: "Sinta Dewi",
      location: "Denpasar",
      rating: 5,
      text: "Salted caramel cookies-nya premium banget! Balance antara manis dan asin pas sekali. Ini yang terenak dari semua varian yang pernah saya coba.",
      image:
        "https://i.pinimg.com/736x/1e/70/9b/1e709b4664cc6f19857350e6f32a2725.jpg",
      product: "Salted Caramel",
    },
  ];

  const stats = [
    { number: "4.9", label: "Rating Rata-rata", suffix: "/5" },
    { number: "1000+", label: "Pelanggan Puas", suffix: "" },
    { number: "500+", label: "Ulasan Positif", suffix: "" },
    { number: "98%", label: "Repeat Order", suffix: "" },
  ];

  // State untuk form
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    product: "",
    rating: 0,
    review: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, city, product, rating, review } = formData;

    if (!name || !city || !product || !rating || review.length < 10) {
      setToastMessage(
        "Mohon lengkapi semua kolom dan isi ulasan minimal 10 karakter."
      );
      setToastType("warning");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xgvywvnr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, city, product, rating, review }),
      });

      if (response.ok) {
        setToastMessage("✅ Ulasan berhasil dikirim. Terima kasih!");
        setToastType("success");
        setFormData({
          name: "",
          city: "",
          product: "",
          rating: 0,
          review: "",
        });
      } else {
        setToastMessage("❌ Gagal mengirim ulasan. Silakan coba lagi.");
        setToastType("error");
      }
    } catch (error) {
      console.error(error);
      setToastMessage("⚠️ Terjadi kesalahan. Coba lagi nanti.");
      setToastType("error");
    }
  };

  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("info");

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 pb-6 shiny-text">
            Testimoni Pelanggan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengarkan langsung dari pelanggan kami yang telah merasakan
            kelezatan SweetMelt Cookies
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-white via-pink-50 to-white rounded-2xl shadow-md border border-pink-100 transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700 mb-2">
                {stat.number}
                {stat.suffix}
              </div>
              <div className="text-sm text-gray-700 font-semibold tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 border border-pink-100 shadow-[0_4px_20px_rgba(255,192,203,0.2)] hover:shadow-[0_8px_30px_rgba(255,192,203,0.3)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-pink-300 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed relative">
                <span className="text-pink-400 text-2xl absolute -top-3 left-0">
                  “
                </span>
                {testimonial.text}
                <span className="text-pink-400 text-2xl absolute -bottom-3 right-0">
                  ”
                </span>
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-pink-200"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                  <p className="text-sm text-pink-600 font-medium">
                    {testimonial.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-3xl p-10 lg:p-14 bg-gradient-to-br from-pink-100 via-white to-pink-200 border border-pink-100 shadow-lg text-center">
          {/* Background Decorative Pattern */}
          <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-10 bg-cover bg-no-repeat pointer-events-none"></div>

          {/* Decorative Top Left Icon */}
          <div className="absolute top-4 left-4 w-12 h-12 bg-pink-200 rounded-full opacity-30 blur-lg"></div>
          <div className="absolute bottom-4 right-6 w-16 h-16 bg-white rounded-full opacity-10 blur-2xl"></div>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-pink-700 mb-4 tracking-tight">
            Bergabunglah dengan Ribuan Pelanggan Puas!
          </h2>

          <p className="text-lg lg:text-xl mb-6 text-pink-600 max-w-2xl mx-auto leading-relaxed">
            Rasakan sendiri kelezatan cookies premium kami dan jadilah bagian
            dari keluarga SweetMelt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link
              to="/catalog"
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold shadow-sm hover:bg-pink-100 transition-colors"
            >
              🍪 Pesan Sekarang
            </Link>
            <Link
              to="/contact"
              className="border border-pink-300 text-pink-700 px-8 py-3 rounded-full font-bold hover:bg-pink-100 hover:text-pink-800 transition-colors"
            >
              💬 Hubungi Kami
            </Link>
          </div>
        </div>

        {/* Review Form */}
        <div className="mt-16 bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Bagikan Pengalaman Anda
          </h2>
          <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kota
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Masukkan kota Anda"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Produk yang Dibeli
              </label>
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="">Pilih produk</option>
                <option value="Chocolate Chip Classic">
                  Chocolate Chip Classic
                </option>
                <option value="Red Velvet Delight">Red Velvet Delight</option>
                <option value="Matcha Green Tea">Matcha Green Tea</option>
                <option value="Double Chocolate">Double Chocolate</option>
                <option value="Strawberry Cream">Strawberry Cream</option>
                <option value="Vanilla Butter">Vanilla Butter</option>
                <option value="Cookies & Cream">Cookies & Cream</option>
                <option value="Peanut Butter">Peanut Butter</option>
                <option value="Salted Caramel">Salted Caramel</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    className="p-1 hover:scale-110 transition-transform"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= formData.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      } transition-colors`}
                      fill={star <= formData.rating ? "currentColor" : "none"}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ulasan Anda
              </label>
              <textarea
                name="review"
                value={formData.review}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Ceritakan pengalaman Anda dengan produk kami..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors"
              >
                Kirim Ulasan
              </button>
            </div>
          </form>
          {toastMessage && (
            <Toast
              message={toastMessage}
              type={toastType}
              onClose={() => {
                setToastMessage("");
                setToastType("info");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
