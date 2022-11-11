/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.shopAPpracticas.shop.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author pablo
 */

@Entity
@Getter @Setter
@Table(name="product")

public class ProductModel implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private int product_id;
    private String product_name;
    private String product_brand;
    private int product_category;
    private String product_condition;
    private boolean product_free_shipping;
    private String product_gender;
    private String product_guarantee;
    private String product_img;
    private float product_price;
    private String product_size;
    private String product_stock;
    //private String product_type;

    public ProductModel() {
    }

    public ProductModel(int product_id, String product_name, String product_brand, int product_category, String product_condition, boolean product_free_shipping, String product_gender, String product_guarantee, String product_img, float product_price, String product_size, String product_stock, String product_type) {
        this.product_id = product_id;
        this.product_name = product_name;
        this.product_brand = product_brand;
        this.product_category = product_category;
        this.product_condition = product_condition;
        this.product_free_shipping = product_free_shipping;
        this.product_gender = product_gender;
        this.product_guarantee = product_guarantee;
        this.product_img = product_img;
        this.product_price = product_price;
        this.product_size = product_size;
        this.product_stock = product_stock;
        //this.product_type = product_type;
    }

    @ManyToOne(fetch=FetchType.LAZY)
    @JsonIgnore()
    @JoinColumn ( name = "category_id")
    private CategoryModel category;


}