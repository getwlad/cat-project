import { Component, OnInit, Input } from '@angular/core';
import { Cat } from 'src/app/models/cat-model';

@Component({
  selector: 'app-card-cat',
  templateUrl: './card-cat.component.html',
  styleUrls: ['./card-cat.component.scss'],
})
export class CardCatComponent implements OnInit {
  @Input() cat!: Cat;
  public breedName: string | null = null;
  public temperament: string | null = null;
  public urlWiki: string | null = null;

  constructor() {}

  ngOnInit(): void {
    if (this.cat.breeds && this.cat.breeds.length > 0) {
      this.breedName = this.cat.breeds[0].name;
      this.temperament = this.cat.breeds[0].temperament;
      this.urlWiki = this.cat.breeds[0].wikipedia_url;
    }
  }
}
