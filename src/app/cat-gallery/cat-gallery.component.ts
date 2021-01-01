import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CatGalleryState } from '../state/cat-gallery.state';
import * as CatGalleryActions from '../state/cat-gallery.actions'
import { filteredImages, filters, images } from '../state/cat-gallery.selectors';

@Component({
  selector: 'app-cat-gallery',
  templateUrl: './cat-gallery.component.html',
  styleUrls: ['./cat-gallery.component.css']
})
export class CatGalleryComponent implements OnInit {

  DEFAULT_LIMIT: string = "25";

  images$ = this.store.select(filteredImages);
  filters$ = this.store.select(filters);

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