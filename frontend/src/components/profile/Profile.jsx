import React, { useState } from "react";
import {
  TextField, Button, Card, CardContent, Stack, Alert, IconButton, InputAdornment
} from "@mui/material";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import defaultProfile from "../../assets/profile.jpg"; // Default profile image

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [alert, setAlert] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState(localStorage.getItem("profileImage") || defaultProfile);

  const [formData, setFormData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("profileData"));
    return savedData || {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      phone: "7092968532",
      address: "133/8, Kumarapalayam",
      city: "Karur",
      state: "Tamil Nadu",
      password: "********",
    };
  });

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (saving data)
  const handleSave = () => {
    localStorage.setItem("profileData", JSON.stringify(formData));
    setEditMode(false);
    setAlert("Changes saved successfully.");
    setTimeout(() => setAlert(null), 3000);
  };

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setImage(imageUrl);
        localStorage.setItem("profileImage", imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <Card className="shadow-lg rounded-xl overflow-hidden w-full max-w-5xl">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Container - Profile Image */}
            <div className="flex flex-col items-center justify-center flex-1 border-r border-gray-300 pr-8">
              <div className="relative w-80 h-80">
                <img 
                  src={image} 
                  alt="Profile" 
                  className="w-full h-full object-cover border border-gray-300 shadow-lg rounded-full"
                />
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="upload-image" />
                <label htmlFor="upload-image" className="absolute bottom-3 right-3 bg-white p-2 rounded-full cursor-pointer shadow-lg">
                  <CameraAltIcon color="gray" fontSize="large" />
                </label>
              </div>
            </div>

            {/* Right Container - Personal Information */}
            <div className="flex flex-col flex-1 space-y-6">
              {alert && (
                <Stack sx={{ width: "100%" }} spacing={2}>
                  <Alert severity="success" onClose={() => setAlert(null)}>
                    {alert}
                  </Alert>
                </Stack>
              )}

              <h2 className="text-2xl font-bold text-gray-800">Personal Information
                
              {/* Action Buttons */}
              <div className="flex justify-end">
                {editMode ? (
                  <Button variant="contained" color="primary" onClick={handleSave}>
                    Save Changes
                  </Button>
                ) : (
                  <Button variant="outlined" color="primary" onClick={() => setEditMode(true)}>
                    Edit Profile
                  </Button>
                )}
              </div>
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {Object.keys(formData).map((key) => (
                  <TextField
                    key={key}
                    label={key.charAt(0).toUpperCase() + key.slice(1)}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    disabled={!editMode}
                    type={key === "password" && !showPassword ? "password" : "text"}
                    className="w-full"
                    InputProps={{
                      endAdornment:
                        key === "password" ? (
                          <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                            </IconButton>
                          </InputAdornment>
                        ) : null,
                    }}
                  />
                ))}
              </div>

              
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
