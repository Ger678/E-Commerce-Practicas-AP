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
@Getter @Setter
@Table(name="customers")

public class CustomerModel implements Serializable {

    @Id
    @Column(name = "user_id")
    
    private int customer_id;
    private String customer_name;
    private String customer_lastname;
    private String customer_mail;
    private String customer_location;
    private String customer_address;
    private int customer_cart_id; //Para vincular al carro de compras
    private float customer_bills; //Para generar un historial de las compras realizadas por el cliente
 
    public CustomerModel() {
    }

    public CustomerModel(int customer_id, String customer_name, String customer_lastname, String customer_mail, String customer_location, String customer_address, int customer_cart_id, float customer_bills) {
        this.customer_id = customer_id;
        this.customer_name = customer_name;
        this.customer_lastname = customer_lastname;
        this.customer_mail = customer_mail;
        this.customer_location = customer_location;
        this.customer_address = customer_address;
        this.customer_cart_id = customer_cart_id; //El id del carro debe ser único para cada cliente
        this.customer_bills = customer_bills; //Historial de Compras(?)
    }

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private UserModel user;

}
