import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap, withLatestFrom } from "rxjs/operators";
import { CatImageService } from "../cat-gallery/cat-image.service";
import * as CatGalleryActions from "./cat-gallery.actions";
import { CatGalleryState, GalleryImageFilter } from "./cat-gallery.state";
import {selectFilters} from "./cat-gallery.selectors";

@Injectable()
export class CatGalleryEffects {

  private getSelectedImageTypes(filters: GalleryImageFilter[]): string {
    return filters.reduce((imageTypes, currentFilter, index, array) => {
      if (currentFilter.selected) {
        if (index !== 0 && index + 1 <= array.length) {
          imageTypes += ',';
        }
        imageTypes+= currentFilter.imageType;
      };
      return imageTypes;
    }, '');
  };

  public loadImages$ = createEffect(() => this.actions$.pipe(
    ofType(CatGalleryActions.GetImages),
    withLatestFrom(this.store.select(selectFilters)),
    mergeMap(([action, filters]) => this.catImageService.getImages(this.getSelectedImageTypes(filters), action.limit)
      .pipe(
        map(response => CatGalleryActions.ImagesLoaded({imageResponse: response})),
        catchError(() => EMPTY)
      )
    )
  ));

  public addImages$ = createEffect(() => this.actions$.pipe(
    ofType(CatGalleryActions.AddImages),
    withLatestFrom(this.store.select(selectFilters)),
    mergeMap(([action, filters]) => this.catImageService.getImages(this.getSelectedImageTypes(filters), action.limit)
      .pipe(
        map(response => CatGalleryActions.ImagesAdded({imageResponse: response})),
        catchError(() => EMPTY)
      )
    )
  ));

  constructor(private store: Store<CatGalleryState>, private actions$: Actions, private catImageService: CatImageService) {}
}
