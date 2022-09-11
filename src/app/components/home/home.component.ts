import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
    
export class HomeComponent implements OnInit {
    therapists: any[] = [];

    constructor(private mainService: MainService) {}

    ngOnInit(): void {
        this.mainService.getTherapists().subscribe((res) => {
            this.therapists = res.data.therapists;
            console.log('therapist 2 >>', this.therapists);
        });
    }

}
