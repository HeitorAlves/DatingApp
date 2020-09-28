import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from './../../services/alertify.service';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
    selector: 'app-members-detail',
    templateUrl: './members-detail.component.html',
    styleUrls: ['./members-detail.component.css']
})

export class MemberDetailComponent implements OnInit{
    user: User;
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];


    constructor(private userService: UserService, private alertify: AlertifyService,
                private route: ActivatedRoute){}

    ngOnInit(){
        //load user
        this.route.data.subscribe(data =>{
            this.user = data['user'];
        })

        this.galleryOptions = [
            {
                width: '500px',
                height: '500px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide,
                preview: false
            }
        ];

        this.galleryImages = this.getImages();
    }

    getImages(): NgxGalleryImage[]{
        const imageUrls = [];
        for (const photo of this.user.photos){
            imageUrls.push({
                small: photo?.url,
                medium: photo?.url,
                big: photo?.url
            });
        }
        return imageUrls;
    }

    loadUser(){
        this.userService.getUser(+this.route.snapshot.params[ 'id' ])
        .subscribe((user: User) => {
            this.user = user;
            
        }, error => { this.alertify.erro(error); }
        );
    }

}