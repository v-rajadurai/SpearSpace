package com.example.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int price;
    private int discount;
    private int quantity;

    public Cart() {}

    public Cart(String name, int price, int discount, int quantity) {
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.quantity = quantity;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public int getPrice() { return price; }
    public int getDiscount() { return discount; }
    public int getQuantity() { return quantity; }

    public void setId(Long id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setPrice(int price) { this.price = price; }
    public void setDiscount(int discount) { this.discount = discount; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

    // Calculate total price after discount
    public int getTotalPrice() {
        return (price - (price * discount / 100)) * quantity;
    }
}
