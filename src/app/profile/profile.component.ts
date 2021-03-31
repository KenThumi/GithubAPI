import { Component, OnInit } from '@angular/core';
import { GihubAPIService } from '../api/gihub-api.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:User = new User('','','');

  constructor(private githubAPIservice:GihubAPIService) { }

  ngOnInit(): void {
  }

   onSubmit(){
       
        this.githubAPIservice.getUser('daneden').subscribe(
          res =>{
              this.user=res;
          }
        );

       
   }

}
