// components/Footer.js

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo and Description */}
                    <div>
                        <h2 className="text-2xl font-bold">College Predictor</h2>
                        <p className="mt-4 text-gray-400">Helping you make informed college decisions with accurate predictions and personalized insights.</p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">Predictions</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">Insights</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">About</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.405.595 24 1.325 24H12.82V14.706h-3.261v-3.622h3.261V8.413c0-3.24 1.973-5.007 4.852-5.007 1.382 0 2.571.103 2.918.149v3.39h-2.004c-1.569 0-1.872.746-1.872 1.84v2.41h3.744l-.489 3.622h-3.255V24h6.38c.73 0 1.325-.595 1.325-1.326V1.326C24 .595 23.405 0 22.675 0z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557a9.986 9.986 0 0 1-2.825.775 4.933 4.933 0 0 0 2.165-2.724 9.885 9.885 0 0 1-3.127 1.194 4.92 4.92 0 0 0-8.384 4.483 13.949 13.949 0 0 1-10.126-5.142 4.822 4.822 0 0 0-.665 2.475c0 1.71.87 3.218 2.188 4.104a4.904 4.904 0 0 1-2.229-.616c-.054 1.991 1.402 3.863 3.445 4.28a4.935 4.935 0 0 1-2.224.085c.63 1.965 2.445 3.396 4.6 3.434A9.867 9.867 0 0 1 0 21.539a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 14.307-14.41 0-.219-.005-.437-.014-.653A10.243 10.243 0 0 0 24 4.557z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.428 0H4.572A4.576 4.576 0 0 0 0 4.572v14.856A4.576 4.576 0 0 0 4.572 24h14.856A4.576 4.576 0 0 0 24 19.428V4.572A4.576 4.576 0 0 0 19.428 0zm-8.1 19.428H8.1V10.4h3.228v9.028zm-1.614-10.257a1.861 1.861 0 1 1 0-3.722 1.861 1.861 0 0 1 0 3.722zm10.257 10.257h-3.228V14.57c0-1.159-.023-2.656-1.621-2.656-1.622 0-1.87 1.267-1.87 2.575v4.938H8.1V10.4h3.1v1.238h.043c.432-.82 1.49-1.687 3.066-1.687 3.277 0 3.88 2.154 3.88 4.956v4.522z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-6 text-center">
                    <p>&copy; 2024 College Predictor. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
