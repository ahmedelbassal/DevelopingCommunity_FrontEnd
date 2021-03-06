import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  // private baseUrl = 'https://localhost:44347/api/Projects';

  // baseUrl:string=process.env.backendUrl+"/api/Projects"

  /////
  // baseUrl:string="http://team1project-001-site1.htempurl.com"+"/api/Projects"


  baseUrl:string="https://developing-community-api.herokuapp.com"+"/api/Projects"
  ///////

  // baseUrl:string=process.env.backendUrl? process.env.backendUrl+"/api/Projects" :"https://localhost:44347/api/Projects";



  constructor(private httpClient:HttpClient) { }

  GetProjects(){
    return this.httpClient.get(this.baseUrl+'/',{observe:'response'});
  }
  GetProjectById(_id:any){
    return this.httpClient.get(this.baseUrl+'/'+_id,{observe:'response'});
  }

}
