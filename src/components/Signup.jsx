import React from "react";

const Signup = () => {
    return (
        <form>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-22">
            <div className="w-full max-w-4xl bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="p-3 border rounded-lg" />
                    <input type="text" placeholder="Last Name" className="p-3 border rounded-lg" />
                    <input type="email" placeholder="Email Address" className="p-3 border rounded-lg" />
                    <input type="password" placeholder="Create Password" className="p-3 border rounded-lg" />
                    <input type="password" placeholder="Confirm Password" className="p-3 border rounded-lg" />
                    <input type="text" placeholder="Phone Number" className="p-3 border rounded-lg" />
                    <input type="text" placeholder="Address" className="p-3 border rounded-lg col-span-2" />
                    <select className="p-3 border rounded-lg">
                        <option>Select Freelancer Type</option>
                        <option>Web Developer</option>
                        <option>Graphic Designer</option>
                        <option>Content Writer</option>
                    </select>
                    <select className="p-3 border rounded-lg">
                        <option>Years of Experience</option>
                        <option>0-1</option>
                        <option>1-3</option>
                        <option>3+</option>
                    </select>
                    <div className="flex gap-4 items-center col-span-2">
                        <label className="font-medium">Select Gender:</label>
                        <label><input type="radio" name="gender" className="mr-1" /> Male</label>
                        <label><input type="radio" name="gender" className="mr-1" /> Female</label>
                        <label><input type="radio" name="gender" className="mr-1" /> Other</label>
                    </div>
                    <input type="text" placeholder="Qualification" className="p-3 border rounded-lg col-span-2" />
                </form>

                <div className="flex flex-col items-center mt-6">
                    <button className="w-1/2 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 mb-2">Signup</button>
                    <button className="flex items-center justify-center w-1/2 border p-3 rounded-lg">
                        <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-5 h-5 mr-2" />
                        Login with Google
                    </button>
                </div>

                <p className="text-center text-sm mt-4">
                    Already have an account? <a href="/login" className="text-blue-500">Log in</a>
                </p>
            </div>
        </div>
        </form>
    );
};

export default Signup;
