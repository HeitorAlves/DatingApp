import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent implements OnInit {


    registerMode: boolean = false;


    constructor(private http: HttpClient){}

    ngOnInit(): void
    {

    }

    registerToggle(): void
    {
        this.registerMode = true;
    }

    cancelRegisterMode(registerMode: boolean): void
    {
        this.registerMode = registerMode;
    }
}