import { Component, OnInit } from '@angular/core';
import { GihubAPIService } from '../api/gihub-api.service';
import { Repo } from '../repo';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:User = new User('','','');

  repos:Repo[] = [];
  constructor(private githubAPIservice:GihubAPIService) { }

  ngOnInit(): void {
  }

   onSubmit(){
       //get user response (observable)
        this.githubAPIservice.getUser('daneden').subscribe(
          res =>{
              this.user=res;
          }
        );
        //get repos
        this.githubAPIservice.getUserRepos('daneden').subscribe(
              res=>{
                this.repos = res;
              }
        )
       
   }

}
