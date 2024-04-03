import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/models/cat-model';
import { CatServiceService } from 'src/app/services/cat-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public catsData: Cat[] = [];

  constructor(private catService: CatServiceService) {
    this.catService.getCats(0, 10).subscribe((cats) => {
      this.catsData = cats;
    });
  }
  ngOnInit(): void {}
}
