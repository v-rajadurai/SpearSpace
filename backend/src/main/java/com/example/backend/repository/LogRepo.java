package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.backend.model.LoginModel;

import java.util.Optional;

@Repository
public interface LogRepo extends JpaRepository<LoginModel, String> { // Changed Long -> String
    Optional<LoginModel> findByEmailAndPassword(String email, String password);
}
