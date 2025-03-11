import React from "react"; // Add this line
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n"; 

const Register = () => {
  const { t } = useTranslation();  
  const [aadhaar, setAadhaar] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");

  const validateAadhaar = (aadhaarNumber) => {
    return /^\d{12}$/.test(aadhaarNumber);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleSendOtp = () => {
    if (!validateAadhaar(aadhaar)) {
      setError("Invalid Aadhaar number. It must be 12 digits.");
      return;
    }
    setError("");
    setOtpSent(true);
    alert("OTP sent successfully!");
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 6) {
      setError("Invalid OTP. It must be 6 digits.");
      return;
    }
    setError("");
    alert("OTP Verified Successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <button onClick={() => changeLanguage("hi")}>हिंदी</button>
        <button onClick={() => changeLanguage("en")}>English</button>
        <h2 className="text-xl font-bold text-center mb-4">{t("Register with Aadhaar")}</h2>

        <input
          type="text"
          value={aadhaar}
          onChange={(e) => setAadhaar(e.target.value)}
          maxLength={12}
          placeholder="Enter Aadhaar Number"
          className="w-full p-2 border rounded mb-2"
        />
        
        {!otpSent && (
          <button onClick={handleSendOtp} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Send OTP
          </button>
        )}

        {otpSent && (
          <>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              placeholder="Enter OTP"
              className="w-full p-2 border rounded mt-2"
            />
            <button onClick={handleVerifyOtp} className="w-full bg-green-600 text-white p-2 rounded mt-2 hover:bg-green-700">
              Verify OTP
            </button>
          </>
        )}

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Register;
