import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { CatImage, CatImageData } from '../state/cat-gallery.state';

@Injectable()
export class CatImageService {
  IMAGE_ENDPOINT: string = 'https://api.thecatapi.com/v1/images/search';
  DEFAULT_IMAGE_TYPE: string = 'gif';

  constructor(private httpClient: HttpClient) { }

  public getImages(limit: string): Observable<CatImage[]> {
    const params = new HttpParams().set('limit', limit).set('mime_types', this.DEFAULT_IMAGE_TYPE);
    return this.httpClient.get<CatImage[]>(this.IMAGE_ENDPOINT + '?' + params);
  }
}