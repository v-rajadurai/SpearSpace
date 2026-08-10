package com.example.backend.controller;

import com.example.backend.service.RazorpayService;
import com.razorpay.RazorpayException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    @Autowired
    private RazorpayService razorpayService;

    @PostMapping("/create-order")
    public Map<String, Object> createOrder(@RequestParam int amount, @RequestParam String currency) {
        Map<String, Object> response = new HashMap<>();
        try {
            String order = razorpayService.createOrder(amount, currency, "receipt_100");
            response.put("order", order);
        } catch (RazorpayException e) {
            response.put("error", e.getMessage());
        }
        return response;
    }
}
