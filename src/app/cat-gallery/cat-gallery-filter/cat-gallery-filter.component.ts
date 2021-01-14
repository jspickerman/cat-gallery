import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CatGalleryState, CatGalleryImageFilter } from '../../state/cat-gallery.state';
import * as CatGalleryActions from '../../state/cat-gallery.actions';


@Component({
  selector: 'app-cat-gallery-filter',
  templateUrl: './cat-gallery-filter.component.html',
  styleUrls: ['./cat-gallery-filter.component.css']
})
export class CatGalleryFilterComponent implements OnInit {

  @Input()
  filter: CatGalleryImageFilter;

  constructor(private store: Store<CatGalleryState>) { }

  ngOnInit() {
  }

  toggle(): void {
    this.store.dispatch(CatGalleryActions.ToggleFilter({filter: this.filter, selected: !this.filter.selected}))
  }
}