package com.example.backend.controller;

import com.example.backend.model.Cart;
import com.example.backend.service.CartService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = "http://localhost:5175") // Allow frontend access
public class CartController {
    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping("/items")
    public ResponseEntity<List<Cart>> getAllCartItems() {
        return ResponseEntity.ok(cartService.getAllCartItems());
    }

    @PostMapping("/add")
    public ResponseEntity<Cart> addItemToCart(@RequestBody Cart cartItem) {
        return new ResponseEntity<>(cartService.addItemToCart(cartItem), HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Cart> updateCartItem(@PathVariable Long id, @RequestBody Cart cartItem) {
        return ResponseEntity.ok(cartService.updateCartItem(id, cartItem));
    }

    @PutMapping("/update/quantity/{id}")
    public ResponseEntity<Cart> updateQuantity(@PathVariable Long id, @RequestParam int quantity) {
        return ResponseEntity.ok(cartService.updateQuantity(id, quantity));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> removeCartItem(@PathVariable Long id) {
        cartService.removeCartItem(id);
        return ResponseEntity.ok("Item removed successfully.");
    }
}
