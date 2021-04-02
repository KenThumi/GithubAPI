import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GihubAPIService } from '../api/gihub-api.service';
import { Repo } from '../repo';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:User ;

  repos:Repo[] = [];

  username:string;

  error:any;

  constructor(private githubAPIservice:GihubAPIService,private route:ActivatedRoute,private router:Router) {
           this.user == new User('','','','');
   }

  ngOnInit(): void {
  }

   onSubmit(f:NgForm){
     
      //retrieve username from form
       this.username = f.form.value.username;
       
       //get user response using observables
        this.githubAPIservice.getUser(this.username).subscribe(
                                            response => {
                                                this.user = response;
                                            },err=>{
                                                console.log(err);
                                                this.error = err;
                                          }
                                      )

      //get user using promises
        // this.githubAPIservice.getUser(this.username);
        
        // this.user = this.githubAPIservice.user;

       
   }



}
