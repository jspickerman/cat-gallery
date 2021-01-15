import { Component, Input, OnInit } from '@angular/core';
import { CatImage } from '../../state/cat-gallery.state';

@Component({
  selector: 'app-cat-gallery-item',
  templateUrl: './cat-gallery-item.component.html',
  styleUrls: ['./cat-gallery-item.component.css']
})
export class CatGalleryItemComponent implements OnInit {

  @Input()
  image: CatImage

  @Input()
  loading: boolean;

  constructor() { }

  ngOnInit() {
    console.log(this.loading);
  }
}