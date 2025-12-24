import { Heart, Users, Award, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 shiny-text pb-6">
            Tentang SweetMelt Cookies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perjalanan kami dimulai dari dapur kecil dengan mimpi besar untuk
            menghadirkan cookies terbaik dengan cita rasa yang tak terlupakan.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Cerita Kami
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                SweetMelt Cookies lahir dari kecintaan mendalam terhadap seni
                membuat kue. Dimulai pada tahun 2020 di dapur rumah sederhana,
                kami berkomitmen untuk menciptakan cookies dengan kualitas
                premium menggunakan bahan-bahan terbaik.
              </p>
              <p>
                Setiap cookies dibuat dengan penuh cinta dan perhatian detail.
                Kami percaya bahwa makanan bukan hanya soal rasa, tetapi juga
                tentang menciptakan momen kebahagiaan dan kenangan indah bersama
                orang-orang terkasih.
              </p>
              <p>
                Dari resep rahasia keluarga yang diwariskan turun-temurun, kami
                terus berinovasi untuk menghadirkan varian rasa yang unik namun
                tetap mempertahankan cita rasa autentik yang menjadi ciri khas
                kami.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/About.jpg"
              alt="Dapur SweetMelt"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-pink-500 text-white p-4 rounded-xl">
              <p className="font-semibold">Sejak 2020</p>
              <p className="text-sm">Melayani dengan ❤️</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-gradient-to-r from-pink-50 to-cream-50 rounded-3xl p-8 lg:p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Heart className="w-6 h-6 text-pink-500 mr-2" />
                Misi Kami
              </h3>
              <p className="text-gray-600">
                Menghadirkan cookies berkualitas premium dengan cita rasa yang
                membahagiakan, dibuat dari bahan-bahan terbaik dan proses yang
                higienis, untuk menciptakan momen kebahagiaan di setiap gigitan.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Award className="w-6 h-6 text-yellow-500 mr-2" />
                Visi Kami
              </h3>
              <p className="text-gray-600">
                Menjadi brand cookies terdepan di Indonesia yang dikenal karena
                kualitas, inovasi, dan pelayanan terbaik, serta menjadi pilihan
                utama untuk setiap momen spesial.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="relative py-20 bg-gradient-to-br from-rose-50 via-white to-pink-100 overflow-hidden">
          {/* Decorative Blobs */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0 animate-pulse" />
          <div className="absolute -bottom-28 -right-24 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 z-0 animate-pulse" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Nilai-nilai Kami */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-rose-700 text-center mb-12">
                Nilai-Nilai Kami
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Heart className="w-8 h-8 text-pink-500" />,
                    title: "Kualitas",
                    desc: "Kami tidak pernah berkompromi dengan kualitas. Setiap cookies dibuat dengan standar tertinggi dan bahan premium.",
                    bg: "bg-pink-100",
                  },
                  {
                    icon: <Users className="w-8 h-8 text-green-500" />,
                    title: "Kepuasan Pelanggan",
                    desc: "Kepuasan pelanggan adalah prioritas utama. Kami selalu mendengarkan feedback dan terus berinovasi.",
                    bg: "bg-green-100",
                  },
                  {
                    icon: <Clock className="w-8 h-8 text-blue-500" />,
                    title: "Konsistensi",
                    desc: "Setiap cookies yang kami produksi memiliki rasa dan kualitas yang konsisten, hari demi hari.",
                    bg: "bg-blue-100",
                  },
                ].map((val, i) => (
                  <div
                    key={i}
                    className="text-center p-6 bg-white/70 backdrop-blur-md rounded-3xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${val.bg}`}
                    >
                      {val.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {val.title}
                    </h3>
                    <p className="text-gray-600">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sertifikasi & Penghargaan */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-rose-700 text-center mb-10">
                Sertifikasi & Penghargaan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {[
                  {
                    icon: <Award className="w-10 h-10 text-green-500" />,
                    title: "Sertifikat Halal",
                    desc: "Tersertifikasi halal MUI untuk menjamin kehalalan produk.",
                    bg: "bg-green-100",
                  },
                  {
                    icon: <Award className="w-10 h-10 text-blue-500" />,
                    title: "PIRT",
                    desc: "Nomor PIRT untuk menjamin keamanan dan kualitas produk.",
                    bg: "bg-blue-100",
                  },
                  {
                    icon: <Award className="w-10 h-10 text-yellow-500" />,
                    title: "Best UMKM 2023",
                    desc: "Penghargaan UMKM terbaik kategori makanan ringan.",
                    bg: "bg-yellow-100",
                  },
                ].map((cert, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`${cert.bg} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      {cert.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600">{cert.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
