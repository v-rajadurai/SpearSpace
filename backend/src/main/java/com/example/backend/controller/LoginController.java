package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.backend.service.LogService;
import com.example.backend.model.LoginModel;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") 
public class LoginController {
    @Autowired
    private LogService logService;

    // Register a new user (Sign Up)
    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody LoginModel user) {
        boolean isRegistered = logService.registerUser(user);
        if (isRegistered) {
            return ResponseEntity.ok("User registered successfully.");
        } else {
            return ResponseEntity.badRequest().body("Email already exists.");
        }
    }

    // Login user
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String pass = credentials.get("password");

        if (email == null || pass == null) {
            return ResponseEntity.badRequest().body("Email and Password cannot be empty.");
        }

        boolean isAuthenticated = logService.autho(email, pass);
        if (isAuthenticated) {
            return ResponseEntity.ok("Login successful.");
        } else {
            return ResponseEntity.status(401).body("Invalid email or password.");
        }
    }
}
