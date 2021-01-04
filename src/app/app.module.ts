import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CatGalleryComponent } from './cat-gallery/cat-gallery.component';
import { CatImageService } from './cat-gallery/cat-image.service';
import { CatGalleryItemComponent } from './cat-gallery/cat-gallery-item/cat-gallery-item.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { catGalleryReducers } from './state/cat-gallery.reducers';
import {CatGalleryEffects} from './state/cat-gallery.effects';
import { HttpClientModule } from '@angular/common/http';
import { CatGalleryFilterComponent } from './cat-gallery/cat-gallery-filter.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, StoreModule.forRoot({'catgallery': catGalleryReducers}), EffectsModule.forRoot([CatGalleryEffects])],
  declarations: [ AppComponent, HelloComponent, CatGalleryComponent, CatGalleryItemComponent, CatGalleryFiltersComponent, CatGalleryFilterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CatImageService]
})
export class AppModule { }
