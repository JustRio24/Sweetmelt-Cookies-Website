import { useState } from "react";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import Toast from "./Toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("info");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/xgvywvnr", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setToastMessage("✅ Berhasil berlangganan newsletter!");
        setToastType("success");
        setEmail("");
      } else {
        setToastMessage("❌ Gagal mengirim. Silakan coba lagi.");
        setToastType("error");
      }
    } catch (error) {
      console.error(error);
      setToastMessage("⚠️ Terjadi kesalahan. Coba lagi nanti.");
      setToastType("error");
    }
  };

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold text-sm">SM</span>
              </div>
              <span className="text-xl font-bold text-gray-800">
                SweetMelt Cookies
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Cookies manis dengan cita rasa elegan. Dibuat dengan bahan
              berkualitas tinggi dan resep rahasia keluarga.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-pink-500" />
                <span className="text-gray-600">+62 895-6213-89403</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-pink-500" />
                <span className="text-gray-600">hello@sweetmelt.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-pink-500" />
                <span className="text-gray-600">Palembang, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Newsletter
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Dapatkan info promo dan produk terbaru
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                name="email"
                required
                placeholder="Email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-pink-500 text-white rounded-r-md hover:bg-pink-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 SweetMelt Cookies. All rights reserved.
          </p>
        </div>

        {/* Toast */}
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
    </footer>
  );
};

export default Footer;
