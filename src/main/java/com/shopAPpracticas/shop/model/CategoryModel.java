/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.shopAPpracticas.shop.model;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author pablo
 */

@Entity
@Getter @Setter
@Table(name="categories")
public class CategoryModel implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    
    private int category_id;
    private String category_name;

    public CategoryModel() {
    }
    
    public CategoryModel(int category_id, String category_name) {
        this.category_id = category_id;
        this.category_name = category_name;
    }
    
    @OneToMany(fetch = FetchType.LAZY, mappedBy="category")
    private List<ProductModel> product;
        
}
