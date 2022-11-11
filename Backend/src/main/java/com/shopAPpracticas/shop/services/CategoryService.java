/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
        package com.shopAPpracticas.shop.services;

import com.shopAPpracticas.shop.model.CategoryModel;
import com.shopAPpracticas.shop.repository.CategoryRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author pablo
 */
@Service
public class CategoryService implements ICategoryService{

    @Autowired
    CategoryRepository CatRepo;

    @Override
    public List<CategoryModel> listCategories() {
        return CatRepo.findAll();
    }

    @Override
    public Optional<CategoryModel> getOne(CategoryModel product) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public void saveCategory(CategoryModel category) {
        CatRepo.save(category);
    }

    @Override
    public void deleteCategory(Long id) {
        CatRepo.deleteById(id);
    }

    @Override
    public CategoryModel findCategoryById(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

}