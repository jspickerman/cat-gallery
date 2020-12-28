import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CatGalleryState, GalleryImageFilter } from '../../state/cat-gallery.state';

@Component({
  selector: 'app-cat-gallery-filters',
  templateUrl: './cat-gallery-filters.component.html',
  styleUrls: ['./cat-gallery-filters.component.css']
})
export class CatGalleryFiltersComponent implements OnInit {

  @Input()
  filters: GalleryImageFilter[];

  constructor() { }

  ngOnInit() {
  }
}