import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CatGalleryState, CatImageData } from '../state/cat-gallery.state';
import * as CatGalleryActions from '../state/cat-gallery.actions'
import { selectFilteredImages, selectFilters } from '../state/cat-gallery.selectors';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-cat-gallery',
  templateUrl: './cat-gallery.component.html',
  styleUrls: ['./cat-gallery.component.css']
})
export class CatGalleryComponent implements OnInit {

  DEFAULT_LIMIT: number = 25;

  images$ = this.store.pipe(select(selectFilteredImages));
  filters$ = this.store.pipe(select(selectFilters));

  constructor(private store: Store<CatGalleryState>) { }

  ngOnInit(): void {
    this.loadImages();
    this.images$.pipe(
      tap((imageData: CatImageData) => {
        if (imageData.images.length < this.DEFAULT_LIMIT) {

        }
      })
    )
  }

  loadImages(): void {
    this.store.dispatch(CatGalleryActions.GetImages({limit: this.DEFAULT_LIMIT}));
  }

  addImages(): void {
    this.store.dispatch(CatGalleryActions.AddImages({limit: this.DEFAULT_LIMIT}));
  }
}