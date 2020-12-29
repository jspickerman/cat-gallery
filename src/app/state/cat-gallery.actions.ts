import { createAction, props } from "@ngrx/store";
import { CatImageData, GalleryImageFilter} from "./cat-gallery.state";

export const GetImages = createAction(
  '[Cat Gallery] Get Images',
  props<{limit: string}>()
);

export const ImagesLoaded = createAction(
  '[Cat Gallery] Images Loaded',
  props<{imageResponse: CatImageData[]}>()
);

export const ToggleFilter = createAction(
  '[Cat Gallery] Toggle Filter State',
  props<{filter: GalleryImageFilter, selected: boolean}>()
)

