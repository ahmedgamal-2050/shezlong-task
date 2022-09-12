import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Pagination } from '../pagination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
    
export class HomeComponent implements OnInit {
    therapists: any[] = [];
    pagination!: Pagination;
    page: number = 1;

    constructor(private mainService: MainService) {}

    ngOnInit(): void {
        this.mainService.getTherapists(this.page).subscribe((res) => {
            this.therapists = res.data.therapists;
            this.pagination = res.meta.pagination;
            console.log('pagination >>', this.pagination);
        });
    }
  
    prevPage(page: number) {
        if (page > 0) {
            this.page -= 1;
            this.mainService.getTherapists(this.pagination.page).subscribe((res) => {
                this.therapists = res.data.therapists;
                this.pagination = res.meta.pagination;
                console.log('pagination >>', this.pagination);
            });
        }
    }
  
    nextPage(page: number) {
        if (page > 0) {
            this.page += 1;
            this.mainService.getTherapists(this.pagination.page).subscribe((res) => {
                this.therapists = res.data.therapists;
                this.pagination = res.meta.pagination;
                console.log('pagination >>', this.pagination);
            });
        }
    }

}
