import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient ) { }

  onGet() {
    return this.http.get('https://api.github.com/users');
  }


}
