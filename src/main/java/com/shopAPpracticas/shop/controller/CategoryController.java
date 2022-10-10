/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.shopAPpracticas.shop.controller;

import com.shopAPpracticas.shop.model.CategoryModel;
import com.shopAPpracticas.shop.services.ICategoryService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author pablo
 */

@RequestMapping("/category")
@CrossOrigin
@RestController
public class CategoryController {
    @Autowired 
    private ICategoryService categories;
    
    @GetMapping ("/all")
    @ResponseBody
    public List<CategoryModel> listCategories(){
        return categories.listCategories();
    }
    
    @GetMapping ("/search")
    @ResponseBody
    public Optional<CategoryModel> searchCategory(@RequestBody CategoryModel category){
     return categories.getOne(category);
    } //Probar funcionamiento de búsqueda
    
    @GetMapping ("/view/{id}")
    @ResponseBody
    public CategoryModel viewCategory(@PathVariable Long id){
       return categories.findCategoryById(id);
    }
    
    // @PreAuthorize("hasRole('ADMIN')")
    @PostMapping ("/new")
    public void addCategory(@RequestBody CategoryModel category){
        categories.saveCategory(category);
    } 
  
    // @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping ("/delete/{id}")
    public void deleteProduct(@PathVariable Long id){
        categories.deleteCategory(id);
    }
    
}
