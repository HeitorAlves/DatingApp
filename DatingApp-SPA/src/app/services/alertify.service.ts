import { Injectable } from "@angular/core";
import * as alertify from 'alertifyjs';
@Injectable()

export class AlertifyService {

    constructor(){}

    confirm(message: string, okcallback: () => any): void{
        alertify.confirm(message, (e: any)=> {
            if (e) {
                okcallback();
            }else{}
        });
    }
    sucess(message: string): void{
        alertify.success(message);
    }
    warning(message: string): void{
        alertify.warning(message);
    }
    erro(message: string): void{
        alertify.error(message);
    }
    message(message: string): void{
        alertify.message(message);
    }
}