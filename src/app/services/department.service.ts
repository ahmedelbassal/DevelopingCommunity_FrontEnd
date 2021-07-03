import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private userClient:HttpClient) { }

  //  baseUrl:string=process.env.backendUrl+"/api/"
  
  // baseUrl: string = "https://localhost:44347/api/"
  
  //////
  // baseUrl:string="http://team1project-001-site1.htempurl.com"+"/api/"


  baseUrl:string="https://developing-community-api.herokuapp.com"+"/api/"
///////////

  // baseUrl:string=process.env.backendUrl? process.env.backendUrl+"/api/" :"https://localhost:44347/api/";



  getAll(){

    return this.userClient.get(this.baseUrl+"Departments");
  }


  getById(id:number){

    return this.userClient.get(this.baseUrl+"Departments/"+id);
  }

  
}
