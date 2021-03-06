import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repo } from '../repo';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class GihubAPIService {

  user:User;

  repos:Repo[];

  loaded:boolean=false;

  constructor(private http:HttpClient) { 
       
  }

  //geting user
  getUser(user:string){
       //with url with PAK for dev
       //let apiUrl= `https://api.github.com/users/${user}?access_token=${environment.apiKey}`;

       //with url withiout PAK for produdtion
       let apiUrl= `https://api.github.com/users/${user}`;

       //observable option
       let userObservable = this.http
                              .get<User>(apiUrl);

       return userObservable;
      
//  promise option
      //   let promise = new Promise(
      //                       (resolve, reject) => {
                        
      //                            resolve(this.user);
                              
      //                                     this.http.
      //                                     get<User>(apiUrl)
      //                                     .toPromise().
      //                                     then( 
      //                                       response => {
      //                                           this.user = response;
      //                                           resolve(response)
      //                                       }
      //                                       , error => {
      //                                             reject(error)
      //                                       }
      //                                     )
                                  
      //                       }
      //   )

      //   return promise;
  }


  //geting user repos
  getUserRepos(user:string){
       //with url with PAK for dev
       //let apiUrl= `https://api.github.com/users/${user}/repos?access_token=${environment.apiKey}`;

       //with url withiout PAK for produdtion
       let apiUrl= `https://api.github.com/users/${user}/repos`;

      let reposObservable = this.http.get<Repo[]>(apiUrl);

      return reposObservable;

      //   let promise =  new Promise( (resolve,reject) => {
      //                                         this.http
      //                                         .get<Repo[]>(url+'?access_token=' + environment.apiKey)
      //                                         .toPromise()
      //                                         .then(
      //                                             response => {
      //                                                 this.repos = response;
                                                  
      //                                                 resolve(response)
      //                                             }
      //                                             , error => {
      //                                                   reject(error)

      //                                             }
      //                                         )

      //                             })
      //   return promise;

  }

}
