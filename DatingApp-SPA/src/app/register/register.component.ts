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

    constructor(private authService: AuthService){}


    register(): void {
        this.authService.register(this.model).subscribe
        (
            () =>
                {
                    console.log('registration sucess');
                },
            erro =>
                {
                    console.log('Error Registrate User Erro code:', erro);
                }
        )
    }

    cancel(): void{
        this.cancelRegister.emit(false);
        console.log('canceled');
    }
}