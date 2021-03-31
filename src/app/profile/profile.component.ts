import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  username:string;

  findRepo:string = '';

  constructor(private githubAPIservice:GihubAPIService) { }

  ngOnInit(): void {
  }

   onSubmit(f:NgForm){
       
      //retrieve username from form
       this.username = f.form.value.username;
       
       //get user response
        this.githubAPIservice.getUser(this.username);
        this.user = this.githubAPIservice.user;


        //get repos
  
        this.githubAPIservice.getUserRepos(this.username);
        this.repos = this.githubAPIservice.repos;
       
   }

}
