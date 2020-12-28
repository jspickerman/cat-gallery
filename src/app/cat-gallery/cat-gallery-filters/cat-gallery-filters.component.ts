import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CatGalleryState } from '../../state/cat-gallery.state';
import * as CatGalleryActions from '../../state/cat-gallery.actions';

@Component({
  selector: 'app-cat-gallery-filters',
  templateUrl: './cat-gallery-filters.component.html',
  styleUrls: ['./cat-gallery-filters.component.css']
})
export class CatGalleryFiltersComponent implements OnInit {

  constructor(private store: Store<CatGalleryState>) { }

  ngOnInit() {
  }

  filterGIF(): void {
    this.store.dispatch(CatGalleryActions.FilterGIF());
  }

  filterJPG(): void {
    this.store.dispatch(CatGalleryActions.FilterJPG());
  }

    filterPNG(): void {
    this.store.dispatch(CatGalleryActions.FilterPNG());
  }
}