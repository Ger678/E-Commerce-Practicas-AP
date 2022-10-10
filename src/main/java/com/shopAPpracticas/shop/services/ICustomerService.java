/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.shopAPpracticas.shop.services;

import com.shopAPpracticas.shop.model.CustomerModel;
import java.util.List;

/**
 *
 * @author pablo
 */
public interface ICustomerService {
      public List<CustomerModel> listCustomers();
      public void saveCustomer(CustomerModel customer);
      public void deleteCustomer (CustomerModel customer);
      public void findCustomerById (Long id);
}
