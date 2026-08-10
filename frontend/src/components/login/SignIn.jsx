import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/context/AuthContext";
import axios from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  TextField,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import space from "../../assets/space.jpg";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("error");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const pass = data.get("password");

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email,
        password: pass,
      });

      if (response.status === 200) {
        setSnackbarMessage("Login successful");
        setAlertSeverity("success");
        login({ email });
        setTimeout(() => navigate("/profile"), 1500);
      }
    } catch (error) {
      setSnackbarMessage(
        error.response?.status === 401
          ? "Invalid username or password"
          : "An error occurred. Please try again."
      );
      setAlertSeverity("error");
    } finally {
      setSnackbarVisible(true);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center gap-3 p-10">
      {/* Left Side - Image */}
      <div className="hidden md:flex w-1/2 h-full items-stretch">
        <img
          src={space}
          alt="Background"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/3 h-full flex items-center justify-center">
        {/* Snackbar for alerts */}
        <Snackbar
          open={snackbarVisible}
          autoHideDuration={4000}
          onClose={() => setSnackbarVisible(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity={alertSeverity} onClose={() => setSnackbarVisible(false)}>
            {snackbarMessage}
          </Alert>
        </Snackbar>

        {/* Sign In Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-10 rounded-lg shadow-xl w-full max-w-md flex flex-col justify-center h-full"
        >
          <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>

          <TextField
            fullWidth
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />

          <TextField
            fullWidth
            margin="normal"
            required
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Forgot Password aligned right */}
          <div className="flex justify-end mt-4">
            <Link to="#" className="text-sm text-blue-600 hover:no-underline">
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="mt-7 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
          >
            Sign In
          </Button>

          {/* Sign Up centered below button */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:no-underline font-medium">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
