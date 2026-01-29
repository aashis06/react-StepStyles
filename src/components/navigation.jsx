import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src="/images/logo-placeholder.svg" alt="StepStyle Logo" className="w-10 h-10 mr-3"/>
                        <span className="text-2xl font-bold text-gray-900">StepStyle</span>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-8">
                        <li><NavLink to="/" className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-300 cursor-pointer">Home</NavLink></li>
                        <li><NavLink to="/collections" className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-300 cursor-pointer">Collections</NavLink></li>
                        <li><NavLink to="/about" className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-300 cursor-pointer">About</NavLink></li>
                        <li><NavLink to="/contact" className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-300 cursor-pointer">Contact</NavLink></li>
                    </ul>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink to="/login" className="px-4 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer">Login</NavLink>
                        <NavLink to="/signup" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 cursor-pointer">Sign Up</NavLink>
                    </div>

                    {/* Mobile menu button */}
                    <button 
                        className="md:hidden text-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <ul className="space-y-4">
                            <li><NavLink to="/" className="block text-gray-700 hover:text-blue-500 font-medium cursor-pointer">Home</NavLink></li>
                            <li><NavLink to="/collections" className="block text-gray-700 hover:text-blue-500 font-medium cursor-pointer">Collections</NavLink></li>
                            <li><NavLink to="/about" className="block text-gray-700 hover:text-blue-500 font-medium cursor-pointer">About</NavLink></li>
                            <li><NavLink to="/contact" className="block text-gray-700 hover:text-blue-500 font-medium cursor-pointer">Contact</NavLink></li>
                        </ul>
                        <div className="flex space-x-4 mt-4">
                            <NavLink to="/login" className="px-4 py-2 text-blue-500 border border-blue-500 rounded-lg cursor-pointer">Login</NavLink>
                            <NavLink to="/signup" className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer">Sign Up</NavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
