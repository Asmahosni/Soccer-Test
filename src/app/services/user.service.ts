import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpClientInMemBackendServiceFactory } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = "http://localhost:3001";
  constructor(private httpClient : HttpClient) { }
  // getAllUsers () {
  //   return this.httpClient.get()
  // }
  getAllUsers(){
    return this.httpClient.get<{message : string , users : any}>(`${this.userUrl}/allUsers`)
  }
  addUser(user : any , image :File ){
    let formData = new FormData();
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('cPassword', user.cPassword);
    formData.append('image', image);
    return this.httpClient.post(`${this.userUrl}/addUser`,formData)
  };
  login(user : any){
    console.log('user in service', user);
    
    return this.httpClient.post<{user : any}>(`${this.userUrl}/login`,user)
  }
  
}
