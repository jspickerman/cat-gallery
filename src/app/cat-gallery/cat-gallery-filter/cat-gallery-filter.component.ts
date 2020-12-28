import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CatGalleryState } from '../../state/cat-gallery.state';
import * as CatGalleryActions from '../../state/cat-gallery.actions';

@Component({
  selector: 'app-cat-gallery-filter',
  templateUrl: './cat-gallery-filter.component.html',
  styleUrls: ['./cat-gallery-filter.component.css']
})
export class CatGalleryFilterComponent implements OnInit {

  constructor(private store: Store<CatGalleryState>) { }

  ngOnInit() {
  }

  filterGif(): void {
    this.store.dispatch(CatGalleryActions.FilterGIF);
  }
}