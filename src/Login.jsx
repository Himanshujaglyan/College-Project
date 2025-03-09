import React from "react";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <form>
                    <label className="block mb-2 text-sm font-medium">Enter Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        placeholder="Enter your email"
                    />

                    <label className="block mb-2 text-sm font-medium">Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                        placeholder="Enter your password"
                    />

                    <a href="#" className="text-blue-500 text-sm block mb-4">Forgot password?</a>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
                    >
                        Login
                    </button>
                </form>

                <div className="text-center my-4">or</div>

                <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg shadow-sm hover:bg-gray-200">
                    <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-5 h-5" />
                    Login with Google
                </button>

                <p className="text-center text-sm mt-4">
                    Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a> and start freelancing today!
                </p>
            </div>
        </div>
    );
};

export default Login;
