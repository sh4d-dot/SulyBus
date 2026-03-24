import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import busLogo from "../icons/sulybus.png";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [regStep, setRegStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    age: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    age: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Only allow numbers and max 10 digits
      if (/^\d{0,10}$/.test(value)) {
        setForm({ ...form, phone: value });
        setErrors({ ...errors, phone: "" });
      }
      return;
    }

    if (name === "age") {
      // Only allow max 2 digits
      if (/^\d{0,2}$/.test(value)) {
        setForm({ ...form, age: value });
        setErrors({ ...errors, age: "" });
      }
      return;
    }

    if (name === "email") {
      setForm({ ...form, email: value });
      setErrors({ ...errors, email: "" });
      return;
    }

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleNext = () => {
    const newErrors = {};
    if (regStep === 0) {
      if (!form.name) newErrors.name = "Name is required";
      if (!form.phone || form.phone.length !== 10) newErrors.phone = "Enter a valid 10-digit Iraqi number";
      if (!form.age) newErrors.age = "Age is required";
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
    }
    setRegStep(prev => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.password) newErrors.password = "Password is required";
    if (!form.phone || form.phone.length !== 10) newErrors.phone = "Enter a valid 10-digit Iraqi number";
    if (form.email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) newErrors.email = "Enter a valid email";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log({ ...form, phone: "+964" + form.phone });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Top Accent with Logo */}
        <div className="bg-amber-500 p-6 text-center flex flex-col items-center">
          <img
            src={busLogo}
            alt="Bus Logo"
            className="w-32 h-32 mb-3 object-contain"
          />
          <h2 className="text-2xl font-bold text-white">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-white/80 text-sm mt-1">
            {isLogin ? "Login to continue" : "Register to get started"}
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white p-6">
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.form
                key="login"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full btn bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-2xl font-semibold"
                >
                  Login
                </motion.button>
              </motion.form>
            ) : (
              <motion.form
                key="register"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={regStep}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-2"
                  >
                    {/* Step 0: Name, Phone, Age together */}
                    {regStep === 0 && (
                      <>
                        <div>
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-amber-400"
                          />
                          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div className="flex items-center">
                          <span className="px-3 py-3 rounded-l-2xl bg-gray-200">+964</span>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="7XXXXXXXXX"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-r-2xl border focus:outline-none focus:ring-2 focus:ring-amber-400"
                          />
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        <div>
                          <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={form.age}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-amber-400"
                          />
                          {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
                        </div>
                      </>
                    )}
                    {/* Step 1: Email (optional) */}
                    {regStep === 1 && (
                      <input
                        type="email"
                        name="email"
                        placeholder="Email (optional)"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    )}
                    {/* Step 2: Password (required) */}
                    {regStep === 2 && (
                      <div>
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={form.password}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Next / Submit Buttons */}
                {regStep < 2 && (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    onClick={handleNext}
                    className="w-full btn bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-2xl font-semibold"
                  >
                    Next
                  </motion.button>
                )}

                {regStep === 2 && (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full btn bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-2xl font-semibold"
                  >
                    Create Account
                  </motion.button>
                )}
              </motion.form>
            )}
          </AnimatePresence>

          {/* Toggle Text */}
          <div className="text-center mt-5 text-sm">
            {isLogin ? (
              <p className="text-gray-600">
                Don’t have an account?{' '}
                <span
                  onClick={() => { setIsLogin(false); setRegStep(0); }}
                  className="text-amber-500 font-semibold cursor-pointer hover:underline"
                >
                  Create an account
                </span>
              </p>
            ) : (
              <p className="text-gray-600">
                Already have an account?{' '}
                <span
                  onClick={() => setIsLogin(true)}
                  className="text-amber-500 font-semibold cursor-pointer hover:underline"
                >
                  Login
                </span>
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}