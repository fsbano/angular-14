import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../user'

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http : HttpClient) {}
  
  get_users(){
    return this.http.get<User>( '/api/users.json', {'headers': headers} );
  }
}
