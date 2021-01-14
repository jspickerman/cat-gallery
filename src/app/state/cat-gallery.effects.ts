import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap, withLatestFrom } from "rxjs/operators";
import { CatImageService } from "../cat-gallery/cat-image.service";
import * as CatGalleryActions from "./cat-gallery.actions";
import { selectFilters } from "./cat-gallery.selectors";
import { CatGalleryState } from "./cat-gallery.state";

@Injectable()
export class CatGalleryEffects {

  public loadImages$ = createEffect(() => this.actions$.pipe(
    ofType(CatGalleryActions.GetImages),
    mergeMap((action) => this.catImageService.getImages(action.limit.toString())
      .pipe(
        map(response => CatGalleryActions.ImagesLoaded({imageResponse: response})),
        catchError(() => EMPTY)
      )
    )
  ));

  public addImages$ = createEffect(() => this.actions$.pipe(
    ofType(CatGalleryActions.AddImages),
    mergeMap((action) => this.catImageService.getImages(action.limit.toString())
      .pipe(
        map(response => CatGalleryActions.ImagesAdded({imageResponse: response})),
        catchError(() => EMPTY)
      )
    )
  ));

  constructor(private store: Store<CatGalleryState>, private actions$: Actions, private catImageService: CatImageService) {}
}
