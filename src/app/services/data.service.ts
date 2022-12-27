import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

//Global http header object
const options = {
  headers: new HttpHeaders
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  currentUser: any

  constructor(private http: HttpClient) { }

  //Register API Request
  register(username: any, password: any, email: any) {

    const data = {
      username,
      password,
      email
    }
    return this.http.post('http://localhost:3000/register', data)
  }

  login(username: any, password: any) {
    const data = {
      username,
      password
    }
    return this.http.post('http://localhost:3000/login', data)
  }

  resetpassword(username: any, password: any) {
    const data = {
      username,
      password
    }
    return this.http.post('http://localhost:3000/resetpassword', data)
  }

  getPerfumes(category: any) {
    const data = {
      category
    }
    return this.http.post('http://localhost:3000/getPerfumes', data)
  }

  addtoCart(pid: any, pname: any, price: any, url: any, number: any, username: any) {
    const data = {
      pid,
      pname,
      price,
      url,
      number,
      username
    }
    return this.http.post('http://localhost:3000/addtoCart', data)
  }

  getCart(username: any) {
    const data = {
      username
    }
    return this.http.post('http://localhost:3000/getCart', data)
  }

  removeItem(productid: any, username: any) {
    return this.http.delete('http://localhost:3000/removeItem/'+productid+'/'+username)
  }

}
