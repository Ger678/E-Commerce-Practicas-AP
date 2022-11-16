import { Injectable } from '@angular/core';

const SHOPPING_CART = 'ShoppingCart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() {
    //this.setCart([{"id": 1,"title": "Iphone", "price": 100, "cantidad":1},{"id": 2,"title": "Iphone","price": 100,"cantidad":2}])
    //this.getCart()
  }

  public setCart(productsList: any[]): void {
    // window.sessionStorage.removeItem(SHOPPING_CART);
    // window.sessionStorage.setItem(SHOPPING_CART, JSON.stringify(productsList));
    window.localStorage.removeItem(SHOPPING_CART);
    window.localStorage.setItem(SHOPPING_CART, JSON.stringify(productsList));
  }

  public getCart(): any[] {
    let productsArray: any[] = [];
    // const stringStorage: string = sessionStorage.getItem(SHOPPING_CART) || "";
    const stringStorage: string = window.localStorage.getItem(SHOPPING_CART) || "";

  if (stringStorage !== "") {
    productsArray = JSON.parse(stringStorage)
  }
    //console.log(productsArray)
    return productsArray;
  }

  public addCart(product: any): void {
    let productList = this.getCart();
    if (productList.some(prod => prod.id == product.id)) {
      //el producto ya está en el carrito, aumento la cantidad
      //console.log("ya está en el carrito")
      let prod = productList.filter(prod => prod.id == product.id)
      prod[0]['amount'] += 1;
      //console.log(prod)
      //console.log(productList)

    } else {
      //el producto no está ya en el carrito, lo agrego
      //agrego el atributo amount
      product['amount']=1;
      productList.push(product);
    }
    //console.log(productList)
    this.setCart(productList)
  }

  public substractCart(product: any): void {
    let productList = this.getCart();
    if (productList.some(prod => prod.id == product.id)) {
      //el producto está en el carrito, reduzco la cantidad
      console.log("ya está en el carrito")
      let prod = productList.filter(prod => prod.id == product.id)
      prod[0]['amount'] -= 1;
      //console.log(prod)
      //console.log(productList)

    } else {
      //el producto no está en el carrito
    }
    //console.log(productList)
    this.setCart(productList)
  }

  public deleteItemCart(product: any): void {
    let productList = this.getCart();
    if (productList.some(prod => prod.id == product.id)) {
      //el producto ya está en el carrito
      //console.log("ya está en el carrito")
      // let index = productList.findIndex(prod => product.id == prod.id)
      // productList.splice(index)
      // console.log(index)
      console.log(product.id)
      let newProductList = productList.filter(prod => prod.id !== product.id)
      console.log(newProductList)
      this.setCart(newProductList)
    }
    //console.log(productList)
  }
}
