/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.shopAPpracticas.shop.services;

import com.shopAPpracticas.shop.model.CategoryModel;
import java.util.List;
import java.util.Optional;

/**
 *
 * @author pablo
 */

public interface ICategoryService {

    public List<CategoryModel> listCategories();
    public Optional<CategoryModel> getOne(CategoryModel category);
    public void saveCategory(CategoryModel category);
    public void deleteCategory(Long id);
    public CategoryModel findCategoryById(Long id);

}