/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.shopAPpracticas.shop.controller;

import com.shopAPpracticas.shop.model.UserModel;
import com.shopAPpracticas.shop.services.IUserService;

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


@RequestMapping("/user")
@CrossOrigin
@RestController

public class UserController {
    @Autowired
    private IUserService users;

    @GetMapping("/all")
    @ResponseBody
    public List<UserModel> listUser(){
        return users.listUser();
    }

    @GetMapping ("/view/{id}")
    @ResponseBody
    public UserModel viewUser(@PathVariable Long id){
        return users.findUserById(id);
    }

    @PostMapping("/add")
    public void addUser(@RequestBody UserModel user){
        users.saveUser(user);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable Long id){
        users.deleteUser(id);
    }
}