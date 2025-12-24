"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

const Header = ({ cartItemsCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/icon.jpeg"
              alt="SweetMelt Logo"
              className="w-15 h-15 object-cover shadow-sm"
            />
            <span className="text-2xl font-semibold text-pink-700 tracking-tight font-dancing">
              SweetMelt Cookies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              ["Beranda", "/"],
              ["Tentang Kami", "/about"],
              ["Katalog", "/catalog"],
              ["Testimoni", "/testimonials"],
              ["Kontak", "/contact"],
            ].map(([label, path]) => (
              <Link
                key={path}
                to={path}
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative p-2 text-gray-600 hover:text-pink-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {[
                ["Beranda", "/"],
                ["Tentang Kami", "/about"],
                ["Katalog", "/catalog"],
                ["Testimoni", "/testimonials"],
                ["Kontak", "/contact"],
              ].map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
