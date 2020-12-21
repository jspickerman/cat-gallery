import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { CatImageService } from "../cat-gallery/cat-image.service";
import * as CatGalleryActions from "./cat-gallery.actions";

@Injectable()
export class CatGalleryEffects {
  loadStates$ = createEffect(() => this.actions$.pipe(
    ofType(CatGalleryActions.GetImages),
    mergeMap((action) => this.catImageService.getImages(action.imageType, action.limit)
      .pipe(
        map(response => CatGalleryActions.ImagesLoaded({images: response})),
        catchError(() => EMPTY)
      )
    )
  ));

  constructor(private actions$: Actions, private catImageService: CatImageService) {}
}
