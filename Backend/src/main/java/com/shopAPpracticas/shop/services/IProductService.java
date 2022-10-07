/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.shopAPpracticas.shop.services;

import com.shopAPpracticas.shop.model.ProductModel;
import java.util.List;
import java.util.Optional;

/**
 *
 * @author pablo
 */
public interface IProductService {
    
    public List<ProductModel> listProducts();
    public Optional<ProductModel> getOne(ProductModel product);
    public void saveProduct(ProductModel product);
    public void deleteProduct(Long id);
    public ProductModel findProductById(Long id);
     
}
