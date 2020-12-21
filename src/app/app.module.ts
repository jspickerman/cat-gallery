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

@NgModule({
  imports: [BrowserModule, FormsModule, StoreModule.forRoot({'catgallery': catGalleryReducers}), EffectsModule.forRoot([])],
  declarations: [ AppComponent, HelloComponent, CatGalleryComponent, CatGalleryItemComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CatImageService]
})
export class AppModule { }
