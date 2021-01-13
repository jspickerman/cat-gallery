import { createAction, props } from "@ngrx/store";
import { CatImage, CatImageData, GalleryImageFilter} from "./cat-gallery.state";

export const GetImages = createAction(
  '[Cat Gallery] Get Images',
  props<{limit: number}>()
);

export const AddImages = createAction(
  '[Cat Gallery] Add Images',
  props<{limit: number}>()
);

export const ImagesLoaded = createAction(
  '[Cat Gallery] Images Loaded',
  props<{imageResponse: CatImage[]}>()
);

export const ImagesAdded = createAction(
  '[Cat Gallery] Images Added',
  props<{imageResponse: CatImage[]}>()
);

export const ToggleFilter = createAction(
  '[Cat Gallery] Toggle Filter State',
  props<{filter: GalleryImageFilter, selected: boolean}>()
)

