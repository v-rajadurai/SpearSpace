import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  // Request OTP (Simulated)
  const requestOtp = () => {
    if (phone.length !== 10) {
      alert("Enter a valid 10-digit phone number!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setShowOtpInput(true);
      setLoading(false);
    }, 1500); // Simulate API delay
  };

  // Handle OTP input
  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next box if filled
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Verify OTP (Simulated)
  const verifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 6) {
      alert("Enter all 6 digits!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      alert("Login Successful!");
      setLoading(false);
      navigate("/"); // Correct way to navigate
    }, 1500); // Simulate API delay
  };

  // Resend OTP
  const resendOtp = () => {
    setResendDisabled(true);
    setTimeout(() => setResendDisabled(false), 30000); // Enable after 30 sec
    alert("OTP Resent!");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Login with OTP
        </h2>

        {!showOtpInput ? (
          <>
            {/* Phone Number Input */}
            <input
              type="text"
              placeholder="Enter phone number"
              minLength={10}
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={requestOtp}
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        ) : (
          <>
            {/* OTP Inputs */}
            <div className="flex justify-center space-x-2 mb-4">
              {otp.map((value, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={value}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  className="w-10 h-10 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              ))}
            </div>

            {/* Verify Button */}
            <button
              onClick={verifyOtp}
              className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            {/* Resend OTP */}
            <button
              onClick={resendOtp}
              disabled={resendDisabled}
              className={`mt-4 text-blue-600 underline ${
                resendDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Resend OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
