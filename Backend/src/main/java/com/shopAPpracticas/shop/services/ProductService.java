/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.shopAPpracticas.shop.services;

import com.shopAPpracticas.shop.model.ProductModel;
import com.shopAPpracticas.shop.repository.ProductRepository;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author pablo
 */

@Service
public class ProductService implements IProductService {

    @Autowired
    ProductRepository ProductRepo;

    @Override
    public List<ProductModel> listProducts() {
        return ProductRepo.findAll();
    }

    @Override
    public void saveProduct(ProductModel product) {
        ProductRepo.save(product);
    }

    @Override
    public void deleteProduct(Long id) {
        ProductRepo.deleteById(id);
    }

    @Override
    public Optional<ProductModel> getOne(ProductModel product) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public ProductModel findProductById(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

}