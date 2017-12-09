import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private Auth:AuthService, private Router:Router) { }
  private _token:string = window.localStorage.getItem('_token');
  private username:string;
  private password:string;
  private responsding:string;

  ngOnInit() {
    this.Auth.setToken();
    this._token = window.localStorage.getItem('_token');
    console.log( 'token : ',  window.localStorage.getItem('_token') );
  }

  login(){
    console.log('click login username : ', this.username ,' password : ', this.password, ' token : ', this._token );
    this.Auth.postLogin( this.username, this.password, this._token).subscribe((response)=>{
      console.log('response : ', response);
      if( response.response == 'error'){
        this.responsding = '<p class="text-danger">' + response.message + '</p>';
        this.username = '';
        this.password = '';
      }else{
          window.localStorage.setItem('auth0',JSON.stringify(response));
          this.Router.navigateByUrl('dashboard');
      }
    });
  }

}
