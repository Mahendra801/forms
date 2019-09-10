import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import{map}from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor( public http:HttpClient) { }
  getdata(value){
    let body={
    id:JSON.parse(localStorage.getItem("logindata")).success._id,
    MovieName:value.movieName,
    Language:value.language,
    Genre:value.Genre,
  }
  return this.http.post("https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/add_movies",body).pipe(map(data=>{
    console.log(data)
  })).subscribe(result=>{})
}
}
