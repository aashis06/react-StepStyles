import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (email && password) {
            alert("Login Successful!");
            onLogin();
        } else {
            alert("Please enter valid credentials.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
                        <Lock className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                    <p className="text-gray-600">Sign in to your StepStyle account</p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                                    placeholder="Enter your email address"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                                />
                                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700 cursor-pointer">
                                    Remember me
                                </label>
                            </div>
                            <NavLink to="/forgot-password" className="text-sm text-blue-500 hover:text-blue-600 font-medium cursor-pointer">
                                Forgot password?
                            </NavLink>
                        </div>

                        {/* Login Button */}
                        <button 
                            type="submit" 
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
                        >
                            <span>Sign In</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500 font-medium">New to StepStyle?</span>
                            </div>
                        </div>
                    </div>

                    {/* Sign Up Link */}
                    <div className="mt-6">
                        <NavLink 
                            to="/signup" 
                            className="w-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2"
                        >
                            <span>Create New Account</span>
                        </NavLink>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-500">
                        By signing in, you agree to our{' '}
                        <NavLink to="/terms" className="text-blue-500 hover:text-blue-600 cursor-pointer">
                            Terms of Service
                        </NavLink>
                        {' '}and{' '}
                        <NavLink to="/privacy" className="text-blue-500 hover:text-blue-600 cursor-pointer">
                            Privacy Policy
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
