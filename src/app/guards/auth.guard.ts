import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private roteador: Router){}

  canActivate(){

    const temToken = localStorage.getItem('cmail-token');

    if(temToken){
      return true
    }

    this.roteador.navigate(['/login'])
  }

}