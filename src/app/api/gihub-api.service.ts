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

  constructor(private http:HttpClient) { }

  //geting user
  getUser(user:string){
      
        let promise = new Promise(
                            (resolve, reject) => {
                               this.http.
                                    get<User>('https://api.github.com/users/'+user+'?access_token=' + environment.apiKey)
                                    .toPromise().then( 
                                      response => {
                                          this.user = response;
                                          resolve(response)
                                      }, error => {
                                            reject(error)
                                      }
                                    )
                            }
        )

        return promise;
  }


  //geting user repos
  getUserRepos(user:string){
        let promise =  new Promise( (resolve,reject) => {
                                              this.http
                                              .get<Repo[]>('https://api.github.com/users/'+user+'/repos?access_token=' + environment.apiKey)
                                              .toPromise()
                                              .then(
                                                  res => {
                                                      this.repos = res;
                                                      resolve(res)
                                                  }
                                                  , error => {
                                                        reject(error)

                                                  }
                                              )

                                  })
        return promise;

  }

}
