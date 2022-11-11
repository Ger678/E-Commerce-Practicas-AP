/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.shopAPpracticas.shop.services;

import com.shopAPpracticas.shop.model.UserModel;
import com.shopAPpracticas.shop.repository.UserRepository;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author pablo
 */
@Service
public class UserService implements IUserService{

    @Autowired
    UserRepository UserRepo;

    @Override
    public List<UserModel> listUser() {
        return UserRepo.findAll();
    }

    @Override
    public void saveUser(UserModel user) {
        UserRepo.save(user);
    }

    @Override
    public void deleteUser(Long id) {
        UserRepo.deleteById(id);
    }

    @Override
    public UserModel findUserById(Long id) {
        return UserRepo.findById(id).orElse(null);
    }

}