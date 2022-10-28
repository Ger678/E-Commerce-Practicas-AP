/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.shopAPpracticas.shop.repository;

import com.shopAPpracticas.shop.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author pablo
 */
public interface UserRepository extends JpaRepository <UserModel, Long>{

}