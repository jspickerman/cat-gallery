import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CatGalleryComponent } from './cat-gallery/cat-gallery.component';
import { CatImageService } from './cat-gallery/cat-image.service';
import { CatGalleryItemComponent } from './cat-gallery/cat-gallery-item/cat-gallery-item.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {CatGalleryEffects} from './state/cat-gallery.effects';
import { HttpClientModule } from '@angular/common/http';
import { CatGalleryFilterComponent } from './cat-gallery/cat-gallery-filter/cat-gallery-filter.component';
import { filterReducers } from './state/filters.reducers';
import { imageReducers } from './state/images.reducers';
import { catGalleryReducers } from './state/cat-gallery.reducers';
import { CatGalleryState } from './state/cat-gallery.state';
import { breedFilterReducers } from './state/breed-filters.reducers';

const reducerMap: ActionReducerMap<CatGalleryState> = {imageData: imageReducers, imageFilters: filterReducers, breedFilters: breedFilterReducers};

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, 
    // StoreModule.forRoot({imageData: catGalleryReducers, imageFilters: catGalleryReducers}), 
    StoreModule.forRoot(reducerMap),
    EffectsModule.forRoot([CatGalleryEffects])],
  declarations: [ AppComponent, HelloComponent, CatGalleryComponent, CatGalleryItemComponent, CatGalleryFilterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CatImageService]
})
export class AppModule { }
