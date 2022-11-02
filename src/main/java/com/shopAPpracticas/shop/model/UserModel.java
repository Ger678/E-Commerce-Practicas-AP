/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.shopAPpracticas.shop.model;

import java.io.Serializable;
import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author pablo
 */

@Entity
@Getter
@Setter
@Table(name = "user")

public class UserModel implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    
    private int user_id;
    private String user_mail;
    private String user_password;

    public UserModel() {
    }

    public UserModel(int user_id, String user_mail, String user_password) {
        this.user_id = user_id;
        this.user_mail = user_mail;
        this.user_password = user_password;
    }

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private CustomerModel customer;
}
