package com.example.backend.service;

import com.example.backend.model.Cart;
import com.example.backend.repository.CartRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CartService {
    private final CartRepository cartRepository;

    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public List<Cart> getAllCartItems() {
        return cartRepository.findAll();
    }

    public Cart addItemToCart(Cart cartItem) {
        return cartRepository.save(cartItem);
    }

    @Transactional
    public Cart updateCartItem(Long id, Cart cartItem) {
        return cartRepository.findById(id).map(existingItem -> {
            existingItem.setName(cartItem.getName());
            existingItem.setPrice(cartItem.getPrice());
            existingItem.setDiscount(cartItem.getDiscount());
            existingItem.setQuantity(cartItem.getQuantity());
            return cartRepository.save(existingItem);
        }).orElseThrow(() -> new RuntimeException("Item not found in cart"));
    }

    @Transactional
    public Cart updateQuantity(Long id, int quantity) {
        return cartRepository.findById(id).map(item -> {
            item.setQuantity(quantity);
            return cartRepository.save(item);
        }).orElseThrow(() -> new RuntimeException("Item not found in cart"));
    }

    public void removeCartItem(Long id) {
        if (!cartRepository.existsById(id)) {
            throw new RuntimeException("Item not found in cart");
        }
        cartRepository.deleteById(id);
    }
}
