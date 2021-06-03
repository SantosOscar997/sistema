import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

import { UsuariosI } from '../models/usuarios';
import { TokensI } from '../models/tokens';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  AUTH_SERVER: string = 'https://localhost:3100/api/';
  authSubject = new BehaviorSubject(false);
  private token: any ='';
  constructor(private httpClient: HttpClient) { }


login(user: UsuariosI):Observable<TokensI>{
  return this.httpClient.post<TokensI>(this.AUTH_SERVER+'/login',user)
  .pipe(tap(
    (res)=>{
      if(res.success){
        var decoded:any = jwt_decode(res.token);
        this.saveToken(res.token,decoded.exp);
      }
      return this.token;
    })
  );
}

logout():void {
  this.token ='';
  localStorage.removeItem("ACCESS_TOKEN");
  localStorage.removeItem("EXPIRESS_IN");
}

private saveToken(token:string,expiresIn:string):void{
  localStorage.setItem("ACCESS_TOKEN",token);
  localStorage.setItem("EXPIRESS_IN",expiresIn);
  this.token = token;
}

private getToken():string {
  if (this.token) {
    this.token = localStorage.getItem("ACCESS_TOKEN");
  }
  return this.token;
}

}
