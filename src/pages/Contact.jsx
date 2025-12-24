"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import Toast from "../components/Toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import TypingEffect from "../components/TypingEffect";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [toast, setToast] = useState({
    message: "",
    type: "success",
    show: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xgvywvnr", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const userName = formData.name;
        setToast({
          message: `Terimakasih, ${userName}! Pesan Anda Berhasil Terkirim.`,
          type: "success",
          show: true,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setToast({
          message: "Pesan Gagal Terkirim, Coba Beberapa Saat Lagi.",
          type: "error",
          show: true,
        });
      }
    } catch (error) {
      setToast({
        message: "Terjadi kesalahan. Silakan coba lagi.",
        type: "info",
        show: true,
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon & WhatsApp",
      details: ["+62 895-6213-89403"],
      color: "text-green-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@sweetmelt.com", "order@sweetmelt.com"],
      color: "text-blue-500",
    },
    {
      icon: MapPin,
      title: "Alamat",
      details: [
        "Jl. Sungai Sahang Ujung",
        "Kec. Ilir Bar. I, Kota Palembang, Sumatera Selatan",
      ],
      color: "text-red-500",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: ["Senin - Sabtu: 08:00 - 20:00", "Minggu: 09:00 - 17:00"],
      color: "text-purple-500",
    },
  ];

  const socialMedia = [
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@sweetmelt.cookies",
      url: "https://www.instagram.com/sweetmelt.cookies?igsh=MWdxNWh0ZHpmbTY5dg==",
      color: "text-pink-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      handle: "SweetMelt Cookies",
      url: "#",
      color: "text-blue-600",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      handle: "+62 895-6213-89403",
      url: "https://wa.me/+62887437229494",
      color: "text-green-500",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 shiny-text pb-6">
            Hubungi Kami
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami siap membantu Anda! Hubungi kami untuk pertanyaan, pemesanan,
            atau saran mengenai produk kami.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-16 h-16 ${info.color
                  .replace("text-", "bg-")
                  .replace(
                    "500",
                    "100"
                  )} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <info.icon className={`w-8 h-8 ${info.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {info.title}
              </h3>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Kirim Pesan
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="nama@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="+62 812-3456-7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Pilih subjek</option>
                    <option value="order">Pemesanan Produk</option>
                    <option value="custom">Custom Order</option>
                    <option value="complaint">Keluhan</option>
                    <option value="partnership">Kerjasama</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors"
              >
                Kirim Pesan
              </button>
            </form>
            {toast.show && (
              <Toast
                message={toast.message}
                type={toast.type}
                onClose={() => setToast({ ...toast, show: false })}
              />
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="w-full h-64 sm:h-80 lg:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1992.212292468696!2d104.7298440348474!3d-2.979578468494347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b750ecb035e67%3A0x515f1231fc0d218b!2sJurusan%20DIV%20Manajemen%20Informatika%20Politeknik%20Negeri%20Sriwijaya!5e0!3m2!1sid!2sid!4v1748586492771!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Kunjungi Toko Kami
                </h3>
                <p className="text-gray-600 mb-4">
                  Datang langsung ke toko kami untuk melihat proses pembuatan
                  cookies dan mencicipi langsung produk fresh kami.
                </p>
                <a
                  href="https://www.google.com/maps/place/Jurusan+DIV+Manajemen+Informatika+Politeknik+Negeri+Sriwijaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-600 font-medium"
                >
                  Lihat di Google Maps →
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Ikuti Kami
              </h3>
              <div className="space-y-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div
                      className={`w-12 h-12 ${social.color
                        .replace("text-", "bg-")
                        .replace("500", "100")
                        .replace(
                          "600",
                          "100"
                        )} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <social.icon className={`w-6 h-6 ${social.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {social.name}
                      </h4>
                      <p className="text-gray-600 text-sm">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Butuh Respon Cepat?</h3>
              <p className="text-pink-100 mb-6">
                Untuk pemesanan urgent atau pertanyaan mendesak, hubungi kami
                langsung via WhatsApp.
              </p>
              <a
                href="https://wa.me/62887437229494"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pink-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Pertanyaan Umum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Berapa lama cookies bisa bertahan?
              </h3>
              <p className="text-gray-600 mb-6">
                Cookies kami dapat bertahan hingga 7 hari dalam kemasan tertutup
                pada suhu ruang, atau 2 minggu jika disimpan di kulkas.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Apakah bisa custom order?
              </h3>
              <p className="text-gray-600">
                Ya, kami menerima custom order untuk acara khusus dengan minimum
                order 50 pcs. Hubungi kami untuk diskusi lebih lanjut.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Bagaimana cara pemesanan?
              </h3>
              <p className="text-gray-600 mb-6">
                Anda bisa memesan melalui website, WhatsApp, atau datang
                langsung ke toko kami. Pembayaran bisa cash, transfer, atau COD.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Apakah ada pengiriman ke luar kota?
              </h3>
              <p className="text-gray-600">
                Ya, kami melayani pengiriman ke seluruh Indonesia melalui
                ekspedisi terpercaya dengan packaging khusus untuk menjaga
                kualitas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
