import React, { useState } from "react";
import {
  Radio,
  Button,
  Typography,
  Card,
  CardContent,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const initialAddresses = [
  {
    id: 1,
    name: "Rajadurai Venkat",
    phone: "7092961093",
    address: "HOR MEN HOSTEL, SKCET, BK Pudur, Kuniyamuthur, Coimbatore, Tamil Nadu - 641008",
  },
  {
    id: 2,
    name: "Rajadurai Venkat",
    phone: "7092961093",
    address: "13/8, Kumarapalayam, Sellandipatti(po), Velliyanai North, Karur, Tamil Nadu - 639118",
    home: true,
  },
];

export default function AddressSelection() {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [selectedAddress, setSelectedAddress] = useState(2);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  // Function to handle address selection
  const handleSelectAddress = (id) => {
    if (id !== selectedAddress) {
      setSelectedAddress(id);
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
      }, 5000);
    }
  };

  // Handle new address form input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle adding a new address
  const handleAddAddress = (e) => {
    e.preventDefault();
    if (!newAddress.name || !newAddress.phone || !newAddress.address) return;

    const newEntry = {
      id: Date.now(),
      name: newAddress.name,
      phone: newAddress.phone,
      address: `${newAddress.address}, ${newAddress.city}, ${newAddress.state} - ${newAddress.zip}, ${newAddress.country}`,
    };

    setAddresses((prev) => [...prev, newEntry]);
    setShowForm(false);
    setNewAddress({ name: "", phone: "", address: "", city: "", state: "", zip: "", country: "" });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-4 shadow-lg rounded-lg">
      {/* DELIVERY ADDRESS HEADER */}
      <div className="bg-gray-200 p-4 rounded-lg mb-6 shadow-md">
        <Typography variant="h6" className="text-black text-center font-semibold" fontWeight="bold">
          DELIVERY ADDRESS
        </Typography>
      </div>

      {/* Address List */}
      {addresses.map((addr) => (
        <Card key={addr.id} className={`mb-4 ${selectedAddress === addr.id ? "bg-blue-50 border border-blue-500" : ""}`}>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Radio
                  checked={selectedAddress === addr.id}
                  onChange={() => handleSelectAddress(addr.id)}
                  value={addr.id}
                />
                <div>
                  <Typography variant="subtitle1" fontWeight="bold">{addr.name}</Typography>
                  <Typography variant="body2" fontWeight="bold">{addr.phone}</Typography>
                  <Typography variant="body2">{addr.address}</Typography>
                </div>
              </div>
            </div>

            {/* Show Confirmation Message if Address is Changed */}
            {selectedAddress === addr.id && showConfirmation && (
              <Typography variant="body1" className="text-green-600 text-center mt-3 font-semibold">
                ✅ Your delivery address has been updated!
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}

      {/* Button to Add New Address */}
      <Button variant="text" color="primary" fullWidth onClick={() => setShowForm(!showForm)}>
        + Add a new address
      </Button>

      {/* Form to Add New Address */}
      {showForm && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <Typography variant="h6" className="mb-2">Add New Address</Typography>
          <form className="grid grid-cols-1 gap-4" onSubmit={handleAddAddress}>
            <TextField name="name" label="Full Name" variant="outlined" required fullWidth onChange={handleChange} />
            <TextField name="phone" label="Phone Number" variant="outlined" required fullWidth onChange={handleChange} />
            <TextField name="address" label="Address Line" variant="outlined" required fullWidth onChange={handleChange} />
            <TextField name="city" label="City" variant="outlined" required fullWidth onChange={handleChange} />
            <FormControl fullWidth>
              <InputLabel>State</InputLabel>
              <Select name="state" required onChange={handleChange}>
                <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                <MenuItem value="Karnataka">Karnataka</MenuItem>
                <MenuItem value="Maharashtra">Maharashtra</MenuItem>
              </Select>
            </FormControl>
            <TextField name="zip" label="Zip Code" variant="outlined" required fullWidth onChange={handleChange} />
            <FormControl fullWidth>
              <InputLabel>Country</InputLabel>
              <Select name="country" required onChange={handleChange}>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="USA">USA</MenuItem>
              </Select>
            </FormControl>

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Save Address
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
