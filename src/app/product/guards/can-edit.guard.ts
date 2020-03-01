import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanEditGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    
      console.log("Can Edit guard ", state.url);

      console.log("P id ", next.params['id']);

      return window.confirm("Do you want to edit?");

  }
  
}
