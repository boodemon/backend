import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { Base } from './app.service';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  private API_URI = Base.API_URI;

  constructor(
    private http : HttpClient,
  ) { }

  getAdmin(){
    console.log( 'url ', this.API_URI );
    return this.http.get<Admins[]>( this.API_URI + '/admin');
  }

}
