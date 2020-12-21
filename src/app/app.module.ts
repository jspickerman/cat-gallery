import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CatGalleryComponent } from './cat-gallery/cat-gallery.component';
import { CatGalleryItemComponent } from './cat-gallery/cat-gallery-item/cat-gallery-item.component';
import { CatImageServiceService } from './cat-gallery/cat-image-service.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CatGalleryComponent, CatGalleryItemComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CatImageServiceService]
})
export class AppModule { }
