import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CatGalleryState } from '../state/cat-gallery.state';
import * as CatGalleryActions from '../state/cat-gallery.actions'
import { images } from '../state/cat-gallery.selectors';

@Component({
  selector: 'app-cat-gallery',
  templateUrl: './cat-gallery.component.html',
  styleUrls: ['./cat-gallery.component.css']
})
export class CatGalleryComponent implements OnInit {

  images$ = this.store.select(images);

  constructor(private store: Store<CatGalleryState>) { }

  ngOnInit(): void {
    this.store.dispatch(CatGalleryActions.GetImages({imageType: 'gif', limit: "10"}));
  }
}