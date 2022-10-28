/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.shopAPpracticas.shop.model;

import java.io.Serializable;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author pablo
 */

@Entity
@Getter @Setter
@Table(name="user")

public class UserModel implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

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
    /*
    @OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
    @MapsId
    @JoinColumn(name="user_id")
    private CustomerModel customer;
    */
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private CustomerModel customer;
}