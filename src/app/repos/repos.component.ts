import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GihubAPIService } from '../api/gihub-api.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repositories:Repo[] = [ new Repo('','','')];

  repos:Repo[] = [ new Repo('','','')];

  username:string;

  findRepo:string = '';

  loading:boolean =false;

  error:boolean = false;

  constructor(private route:ActivatedRoute, private githubAPIservice:GihubAPIService) {  }

  ngOnInit(): void {
    this.loading=true;
    this.error = false;  

    this.username = this.route.snapshot.queryParams['username'];

    this.githubAPIservice.getUserRepos(this.username).subscribe(
                            response => { 
                                          this.repositories = response;

                                          this.setRepos();

                                          this.loading = false;
                                        },
                            error => {
                                          this.error = true;
                                          this.loading = false;
                            }
    )
       
   
  }
  setRepos(){
        this.repos = this.repositories;
  }

}
