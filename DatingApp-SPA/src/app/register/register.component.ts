import { AlertifyService } from './../services/alertify.service';
import { AuthService } from './../services/auth.service';
import { registerLocaleData } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    @Output() cancelRegister = new EventEmitter();

    model: any = {};

    constructor(private authService: AuthService,
                private alertify: AlertifyService
                ){}


    register(): void {
        this.authService.register(this.model).subscribe
        (
            () =>
                {
                    this.alertify.sucess('registration sucess');
                },
            erro =>
                {
                    this.alertify.erro(erro);
                }
        )
    }

    cancel(): void{
        this.cancelRegister.emit(false);
        this.alertify.message('canceled');
    }
}