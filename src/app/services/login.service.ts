import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user) {
    console.log(user);
    this.http.post('someserver.com/login', user)
      .subscribe(res => {
        console.log(res);
      },
      errr => {
        console.log('Oops some error!', errr);
      }
      )
    ;
  }
}
