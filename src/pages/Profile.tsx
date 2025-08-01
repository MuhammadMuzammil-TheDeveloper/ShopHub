import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Package, Heart, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size={40} className="text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
              
              <nav className="space-y-2">
                <a href="#profile" className="flex items-center px-4 py-2 text-blue-600 bg-blue-50 rounded-lg">
                  <User size={20} className="mr-3" />
                  Profile Information
                </a>
                <a href="#orders" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  <Package size={20} className="mr-3" />
                  Order History
                </a>
                <a href="#wishlist" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  <Heart size={20} className="mr-3" />
                  Wishlist
                </a>
                <a href="#settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  <Settings size={20} className="mr-3" />
                  Account Settings
                </a>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg w-full text-left"
                >
                  <LogOut size={20} className="mr-3" />
                  Sign Out
                </button>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Information */}
            <div id="profile" className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6">Profile Information</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={user.name.split(' ')[0] || ''}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={user.name.split(' ')[1] || ''}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Update Profile
                </button>
              </form>
            </div>
            
            {/* Order History */}
            <div id="orders" className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6">Recent Orders</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">Order #ORD-2024-001</h4>
                      <p className="text-sm text-gray-600">Placed on January 15, 2024</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Delivered
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">3 items • $329.97</p>
                  <button className="text-blue-600 hover:underline text-sm">
                    View Details
                  </button>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">Order #ORD-2024-002</h4>
                      <p className="text-sm text-gray-600">Placed on January 20, 2024</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      In Transit
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">1 item • $89.99</p>
                  <button className="text-blue-600 hover:underline text-sm">
                    Track Package
                  </button>
                </div>
              </div>
            </div>
            
            {/* Wishlist */}
            <div id="wishlist" className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6">Wishlist</h3>
              <div className="empty-state text-center py-8">
                <Heart size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">Your wishlist is empty</p>
                <p className="text-sm text-gray-400">Save items you love for later</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;