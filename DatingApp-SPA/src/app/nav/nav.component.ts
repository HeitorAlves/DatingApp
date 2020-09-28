import { AlertifyService } from './../services/alertify.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']

})

export class NavComponent implements OnInit {

    model: any = {};

    constructor(public authService: AuthService,
                private alertify: AlertifyService,
                private router: Router
                ){}

    ngOnInit() {}

    login(): void {
        this.authService.login(this.model).subscribe(
            next => { this.alertify.sucess('logged in sucess'); },
            erro => { this.alertify.erro(erro); },
            () => { this.router.navigate(['./members']); }
        );
    }

    loggedIn(): boolean {
        return this.authService.loggedIn();
    }

    logout(): void{
        localStorage.removeItem('token');
        this.alertify.message('logged out');
        this.router.navigate(['./home']);
    }
}