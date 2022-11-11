/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.shopAPpracticas.shop.services;

import com.shopAPpracticas.shop.model.UserModel;
import java.util.List;

/**
 *
 * @author pablo
 */
public interface IUserService {

    public List<UserModel> listUser();
    public void saveUser(UserModel user);
    public void deleteUser (Long id);
    public UserModel findUserById (Long id);

}