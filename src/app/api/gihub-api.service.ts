import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class GihubAPIService {

  constructor(private http:HttpClient) { }

  //geting user
  getUser(user:string){
        let userResponse =  this.http
                                .get<User>('https://api.github.com/users/'+user+'?access_token=' + environment.apiKey);
        
        return userResponse;
  }


  //geting user repos

}
