package com.shopAPpracticas.shop.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Getter
@Setter
@Table(name="cart")
public class CartModel implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private int cart_id;
    private int cart_customer_id;
    private String cart_discount;
    private int cart_product;
    private int cart_product_quantity;
    private int cart_price;
    private Date cart_date;

    public CartModel() {
    }

    public CartModel(int cart_id, int cart_customer_id, String cart_discount, int cart_product, int cart_product_quantity, int cart_price, Date cart_date, CustomerModel customerModel) {
        this.cart_id = cart_id;
        this.cart_customer_id = cart_customer_id;
        this.cart_discount = cart_discount;
        this.cart_product = cart_product;
        this.cart_product_quantity = cart_product_quantity;
        this.cart_price = cart_price;
        this.cart_date = cart_date;
        this.customerModel = customerModel;
    }

    @OneToOne
    @JoinColumn(name = "customer_id")
    private CustomerModel customerModel;
}
