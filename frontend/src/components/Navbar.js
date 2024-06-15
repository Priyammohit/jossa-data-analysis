// components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <span className="text-white text-2xl font-bold">JoSAA Insights</span>
                    </div>

                    {/* Navigation links */}
                    <div className="hidden md:flex md:space-x-8">
                        <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:text-gray-200 hover:bg-blue-600">Home</Link>
                        <Link to="/collagepredictor" className="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:text-gray-200 hover:bg-blue-600">Predictions</Link>
                        <Link to="/dataAnalysis" className="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:text-gray-200 hover:bg-blue-600">Trends</Link>
                        <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:text-gray-200 hover:bg-blue-600">Insights</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
