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

  // public getImages(imageType?: string, limit?: string): Observable<CatImage[]> {
  //   console.log('get images!');
  //   const params = new HttpParams().set('mime_types', imageType ? imageType : this.DEFAULT_IMAGE_TYPE)
  //   .set('limit', limit ? limit : this.DEFAULT_LIMIT);
  //   return this.httpClient.get<CatImage[]>(this.IMAGE_ENDPOINT + '?' + params);
  // }

  public getImages(limit?: string): Observable<CatImage[]> {
    const params = new HttpParams().set('limit', limit ? limit : this.DEFAULT_LIMIT).set('mime_types', 'gif');
    return this.httpClient.get<CatImage[]>(this.IMAGE_ENDPOINT + '?' + params);
  }
}