import React from "react";
import { TextField, FormControlLabel, Checkbox, MenuItem, Select, InputLabel, FormControl } from "@mui/material";

export default function AddressForm() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Address Form</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextField id="first-name" label="First Name" variant="outlined" required fullWidth />
        <TextField id="last-name" label="Last Name" variant="outlined" required fullWidth />
        <TextField id="address1" label="Address Line 1" variant="outlined" required fullWidth />
        <TextField id="address2" label="Address Line 2 (Optional)" variant="outlined" fullWidth />
        <TextField id="city" label="City" variant="outlined" required fullWidth />
        
        {/* State Selection */}
        <FormControl fullWidth>
          <InputLabel>State</InputLabel>
          <Select id="state" required>
            <MenuItem value="NY">New York</MenuItem>
            <MenuItem value="CA">California</MenuItem>
            <MenuItem value="TX">Texas</MenuItem>
          </Select>
        </FormControl>

        <TextField id="zip" label="Zip / Postal Code" variant="outlined" required fullWidth />

        {/* Country Selection */}
        <FormControl fullWidth>
          <InputLabel>Country</InputLabel>
          <Select id="country" required>
            <MenuItem value="USA">United States</MenuItem>
            <MenuItem value="CAN">Canada</MenuItem>
            <MenuItem value="UK">United Kingdom</MenuItem>
          </Select>
        </FormControl>

        <div className="col-span-2">
          <FormControlLabel
            control={<Checkbox />}
            label="Use this address for payment details"
          />
        </div>
      </form>
    </div>
  );
}
