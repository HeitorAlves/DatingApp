import { catchError } from 'rxjs/operators';
import { AlertifyService } from './../services/alertify.service';
import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class MemberDetailResolver implements Resolve<User>{
    constructor(private userService: UserService,
                private router: Router,
                private alertify: AlertifyService
            ){}

    resolve(route: ActivatedRouteSnapshot): Observable<User>{
        return this.userService.getUser(route.params['id']).pipe(
            catchError(error => {
                this.alertify.erro(error);
                this.router.navigate(['/members']);
                return of(null);
            }
            )
        );
    }
}