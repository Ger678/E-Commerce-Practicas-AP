/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.shopAPpracticas.shop.controller;

import com.shopAPpracticas.shop.model.ProductModel;
import com.shopAPpracticas.shop.services.IProductService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author pablo
 */

@RequestMapping("/product")
@CrossOrigin
@RestController

public class ProductController {
    @Autowired 
    private IProductService products;
    
    @GetMapping ("/all")
    @ResponseBody
    public List<ProductModel> listProduct(){
        return products.listProducts();
    }
    
    @GetMapping ("/search")
    @ResponseBody
    public Optional<ProductModel> searchProducts(@RequestBody ProductModel product){
     return products.getOne(product);
    } //Probar funcionamiento de búsqueda
    
    @GetMapping ("/view/{id}")
    @ResponseBody
    public ProductModel viewProduct(@PathVariable Long id){
     return products.findProductById(id);
    }
    
    // @PreAuthorize("hasRole('ADMIN')")
    @PostMapping ("/new")
    public void addProduct(@RequestBody ProductModel product){
        products.saveProduct(product);
    } 
  
    // @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping ("/delete/{id}")
    public void deleteProduct(@PathVariable Long id){
    products.deleteProduct(id);
    }
    
    /*
   // @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Long id, @RequestBody Job jobs){
      Job trabajo_mod = trabajo.getOne(id).get();
      trabajo_mod.setJob_name(jobs.getJob_name());
      trabajo_mod.setJob_place(jobs.getJob_place());
      //trabajo_mod.setPortfolio(jobs.getPortfolio());
      
      trabajo.saveJob(trabajo_mod);
      return new ResponseEntity(new Mensaje("El trabajo ha sido actualizado"),HttpStatus.OK);
    }
*/
}
