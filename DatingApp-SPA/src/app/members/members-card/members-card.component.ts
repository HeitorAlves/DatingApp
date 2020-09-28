import { User } from './../../models/user';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-member-card',
    templateUrl: './members-card.component.html',
    styleUrls: ['./members-card.component.css']
})

export class MemberCardComponent implements OnInit {
    @Input() user: User;

    constructor(){}

    ngOnInit(){}
}