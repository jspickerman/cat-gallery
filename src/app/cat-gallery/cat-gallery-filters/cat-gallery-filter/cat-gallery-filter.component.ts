import { Component, Input, OnInit } from '@angular/core';
import { GalleryImageFilter } from '../../../state/cat-gallery.state';

@Component({
  selector: 'app-cat-gallery-filter',
  templateUrl: './cat-gallery-filter.component.html',
  styleUrls: ['./cat-gallery-filter.component.css']
})
export class CatGalleryFilterComponent implements OnInit {

  @Input()
  filter: GalleryImageFilter;

  constructor() { }

  ngOnInit() {
  }

}