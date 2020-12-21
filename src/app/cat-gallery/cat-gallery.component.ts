import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CatGalleryState } from '../state/cat-gallery.state';
import * as CatGalleryActions from '../state/cat-gallery.actions'

@Component({
  selector: 'app-cat-gallery',
  templateUrl: './cat-gallery.component.html',
  styleUrls: ['./cat-gallery.component.css']
})
export class CatGalleryComponent implements OnInit {

  constructor(private store: Store<CatGalleryState>) { }

  ngOnInit(): void {
    this.store.dispatch(CatGalleryActions.GetImages({imageType: 'gif', limit: "10"}));
  }
}