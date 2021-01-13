import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { CatImage, CatImageData } from '../state/cat-gallery.state';

@Injectable()
export class CatImageService {
  IMAGE_ENDPOINT: string = 'https://api.thecatapi.com/v1/images/search';
  DEFAULT_IMAGE_TYPE: string = 'image';
  DEFAULT_LIMIT: string = "1";

  constructor(private httpClient: HttpClient) { }

  public getImages(imageType?: string, limit?: string) {
    console.log('yo!');
    const params = new HttpParams().set('mime_types', imageType ? imageType : this.DEFAULT_IMAGE_TYPE)
    .set('limit', limit ? limit : this.DEFAULT_LIMIT);
    const dummyData: CatImage[] = [  {
    "breeds": [],
    "height": 900,
    "id": "5op",
    "url": "https://cdn2.thecatapi.com/images/5op.jpg",
    "width": 600
  }]
    return of(dummyData);
   // return this.httpClient.get<CatImageData[]>(this.IMAGE_ENDPOINT + '?' + params);
  }
}