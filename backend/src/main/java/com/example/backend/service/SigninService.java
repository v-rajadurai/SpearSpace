package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.model.LoginModel;
import com.example.backend.repository.LogRepo;

@Service
public class SigninService {
    @Autowired 
    private LogRepo rep;

    public boolean autho(String email, String password) {
        return rep.findByEmailAndPassword(email, password).isPresent();
    }
}
