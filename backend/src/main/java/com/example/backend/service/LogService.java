package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.model.LoginModel;
import com.example.backend.repository.LogRepo;

import java.util.List;

@Service
public class LogService {
    @Autowired
    private LogRepo logRepo;

    // Register a new user
    public boolean registerUser(LoginModel log) {
        if (logRepo.existsById(log.getEmail())) {
            return false; // Email already exists
        }
        try {
            logRepo.save(log);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    // Authenticate user (Login)
    public boolean autho(String email, String password) {
        return logRepo.findByEmailAndPassword(email, password).isPresent();
    }

    // Get user profile
    public LoginModel getUserProfile(String email) {
        return logRepo.findById(email).orElse(null);
    }

    // Update user profile
    public boolean updateUserProfile(LoginModel updatedUser) {
        if (logRepo.existsById(updatedUser.getEmail())) {
            try {
                logRepo.save(updatedUser);
                return true;
            } catch (Exception e) {
                e.printStackTrace();
                return false;
            }
        }
        return false;
    }

    // Get all users
    public List<LoginModel> getAllUsers() {
        return logRepo.findAll();
    }
}
