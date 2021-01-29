import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CatGalleryComponent } from './cat-gallery/cat-gallery.component';
import { CatImageService } from './cat-gallery/cat-image.service';
import { CatGalleryItemComponent } from './cat-gallery/cat-gallery-item/cat-gallery-item.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {CatGalleryEffects} from './state/cat-gallery.effects';
import { HttpClientModule } from '@angular/common/http';
import { CatGalleryFilterComponent } from './cat-gallery/cat-gallery-filter/cat-gallery-filter.component';
import { CatGalleryState } from './state/cat-gallery.state';
import { filterReducers } from './state/cat-gallery-filters.reducers';
import { imageReducers } from './state/cat-gallery-images.reducers';

const catGalleryReducerMap: ActionReducerMap<CatGalleryState> = {
  imageData: imageReducers, 
  imageFilters: filterReducers
};

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    StoreModule.forRoot(catGalleryReducerMap),
    EffectsModule.forRoot([CatGalleryEffects])
  ],
  declarations: [ AppComponent, CatGalleryComponent, CatGalleryItemComponent, CatGalleryFilterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CatImageService]
})
export class AppModule { }
