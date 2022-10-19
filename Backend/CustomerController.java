/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.shopAPpracticas.shop.controller;

import com.shopAPpracticas.shop.model.CustomerModel;
import com.shopAPpracticas.shop.model.ProductModel;

import com.shopAPpracticas.shop.services.ICustomerService;
import java.util.List;
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

@RequestMapping("/customer")
@CrossOrigin
@RestController

public class CustomerController {

    @Autowired
    private ICustomerService customers;
    
    @GetMapping("/all")
    @ResponseBody
    public List<CustomerModel> listCustomers(){
        return customers.listCustomers();
    }
    
    @GetMapping ("/view/{id}")
    @ResponseBody
    public CustomerModel viewCustomer(@PathVariable Long id){
     return customers.findCustomerById(id);
    }
    
    @PostMapping("/add")
    public void addCustomer(@RequestBody CustomerModel customer){
        customers.saveCustomer(customer);
    }
    
    @DeleteMapping("/delete/{id}")
    public void deleteCustomer(@PathVariable Long id){
        customers.deleteCustomer(id);
    }
}
