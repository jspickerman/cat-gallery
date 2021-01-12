import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CatGalleryState } from '../state/cat-gallery.state';
import * as CatGalleryActions from '../state/cat-gallery.actions'
import { selectFilters, selectImageData } from '../state/cat-gallery.selectors';

@Component({
  selector: 'app-cat-gallery',
  templateUrl: './cat-gallery.component.html',
  styleUrls: ['./cat-gallery.component.css']
})
export class CatGalleryComponent implements OnInit {

  DEFAULT_LIMIT: string = "25";

  images$ = this.store.pipe(select(selectImageData));
  filters$ = this.store.pipe(select(selectFilters));

  constructor(private store: Store<CatGalleryState>) { }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.store.dispatch(CatGalleryActions.GetImages({limit: this.DEFAULT_LIMIT}));
  }

  addImages(): void {
    this.store.dispatch(CatGalleryActions.AddImages({limit: this.DEFAULT_LIMIT}));
  }
}