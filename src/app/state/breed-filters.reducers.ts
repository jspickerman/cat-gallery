import { createReducer, on } from "@ngrx/store";
import { CatBreedFilter, GalleryImageFilter, IMAGE_TYPE } from "./cat-gallery.state";
import * as CatGalleryActions from "./cat-gallery.actions";

const initialState: CatBreedFilter[] = [];

export const breedFilterReducers = createReducer(
  initialState,
  on(CatGalleryActions.ImagesLoaded,(state, {imageResponse}) => {
    console.log(imageResponse);
    return [...state];
  })
);