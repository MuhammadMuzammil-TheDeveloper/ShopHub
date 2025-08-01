import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Briefcase, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">ShopHub</h3>
            <p className="text-gray-300 mb-4">
              Your one-stop destination for quality products at amazing prices. 
              We're committed to providing exceptional shopping experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61550242382522" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://muhammadmuzammil-thedeveloper.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
  <Briefcase size={20} />
</a>

              <a href="https://www.instagram.com/" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-orange-400 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products/electronics" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products/clothing" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/products/books" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Books
                </Link>
              </li>
              <li>
                <Link to="/products/home" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Home & Garden
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={16} className="text-orange-400 mr-2" />
                <span className="text-gray-300 text-sm">Korangi Karachi</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-orange-400 mr-2" />
                <span className="text-gray-300 text-sm">+92 317 644 2334</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-orange-400 mr-2" />
                <span className="text-gray-300 text-sm">muzammil.thedeveloper@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 ShopHub. All rights reserved. | Privacy Policy | Terms of Service | Muhammad-Muzammil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;