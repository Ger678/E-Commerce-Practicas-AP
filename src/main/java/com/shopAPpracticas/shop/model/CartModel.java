package com.shopAPpracticas.shop.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
 @Table(name = "cart")
public class CartModel {

    @Id
    private int cart_id;
    private int customer_id;

}
