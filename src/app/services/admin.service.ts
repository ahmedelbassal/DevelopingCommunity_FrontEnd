import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private userClient: HttpClient) { }

  // baseUrl: string = "https://localhost:44347/api/admins/"

  // baseUrl:string=process.env.backendUrl+"/api/admins/"


  ////
  // baseUrl:string="http://team1project-001-site1.htempurl.com"+"/api/admins/"


  baseUrl:string="https://developing-community-api.herokuapp.com"+"/api/admins/"
/////


  // baseUrl:string=process.env.backendUrl? process.env.backendUrl+"/api/admins/" :"https://localhost:44347/api/admins/";


  Login(LoginDetails: any) {
    console.log(LoginDetails)


    return this.userClient.post(this.baseUrl+"login", LoginDetails, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }), responseType: "json"
    })

  }


}
