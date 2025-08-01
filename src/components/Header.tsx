import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { categories } from '../data/products';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-orange-400 hover:text-orange-300 transition-colors">
            ShopHub
          </Link>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-12 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-orange-600 transition-colors"
              >
                <Search size={20} />
              </button>
            </div>
          </form>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* User Menu - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm">Hello, {user.name}</span>
                  <Link to="/profile" className="hover:text-orange-400 transition-colors">
                    <User size={20} />
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-sm hover:text-orange-400 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link to="/login" className="text-sm hover:text-orange-400 transition-colors">
                    Sign In
                  </Link>
                  <Link to="/register" className="text-sm hover:text-orange-400 transition-colors">
                    Register
                  </Link>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative hover:text-orange-400 transition-colors">
              <ShoppingCart size={24} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden hover:text-orange-400 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Categories Navigation - Desktop */}
        <nav className="hidden md:block border-t border-slate-700 py-2">
          <div className="flex items-center space-x-8">
            <Link to="/products" className="text-sm hover:text-orange-400 transition-colors py-2">
              All Products
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products/${category.id}`}
                className="text-sm hover:text-orange-400 transition-colors py-2"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-3 space-y-3">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-12 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-orange-600 transition-colors"
              >
                <Search size={18} />
              </button>
            </form>

            {/* Mobile Navigation */}
            <div className="space-y-2">
              <Link
                to="/products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm hover:text-orange-400 transition-colors py-2"
              >
                All Products
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/products/${category.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm hover:text-orange-400 transition-colors py-2"
                >
                  {category.name}
                </Link>
              ))}
            </div>

            {/* Mobile User Menu */}
            <div className="border-t border-slate-700 pt-3">
              {user ? (
                <div className="space-y-2">
                  <div className="text-sm">Hello, {user.name}</div>
                  <Link
                    to="/profile"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm hover:text-orange-400 transition-colors py-1"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block text-sm hover:text-orange-400 transition-colors py-1 text-left"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm hover:text-orange-400 transition-colors py-1"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm hover:text-orange-400 transition-colors py-1"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;