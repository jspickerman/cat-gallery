import { createAction, props } from "@ngrx/store";
import { CatImageData} from "./cat-gallery.state";

export const GetImages = createAction(
  '[Cat Gallery] Get Images',
  props<{imageType: string, limit: string}>()
)

export const ImagesLoaded = createAction(
  '[Cat Gallery] Images Loaded',
  props<{images: CatImageData[]}>()
) 