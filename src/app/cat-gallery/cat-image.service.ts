import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface CatImage {
  breeds: string[];
  id: string;
  url: string;
  width: string;
  height: string;
}

@Injectable()
export class CatImageService {
  httpClient: HttpClient;

  IMAGE_ENDPOINT: string = 'api.thecatapi.com/v1/images/search';
  DEFAULT_IMAGE_TYPE: string = 'image';
  DEFAULT_LIMIT: string = "1";

  constructor() { }

  public getImages(imageType?: string, limit?: number): Observable<CatImage[]> {
    const params = new HttpParams().set('mime_types', imageType ? imageType : this.DEFAULT_IMAGE_TYPE)
    .set('limit', limit ? limit : this.DEFAULT_LIMIT);

    return this.httpClient.get(<CatImage[])>(this.IMAGE_ENDPOINT + params);
  }
}