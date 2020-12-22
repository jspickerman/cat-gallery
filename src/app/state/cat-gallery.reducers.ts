import { createReducer, on } from "@ngrx/store";
import { initialCatGalleryState } from "./cat-gallery.state";
import * as CatGalleryActions from "./cat-gallery.actions";

export const catGalleryReducers = createReducer(
  initialCatGalleryState,
  on(CatGalleryActions.GetImages, (state, {limit}) => {
    const imageData = {
      pending: true,
      error: '',
      images: []
    }
    console.log(imageData);
    return {...state, imageData};
  }),
  on(CatGalleryActions.ImagesLoaded, (state, {imageResponse}) => {
    const imageData = {
      pending: false,
      error: '',
      images: imageResponse
    };
    console.log(imageData);
    return {...state, imageData}
  })
);