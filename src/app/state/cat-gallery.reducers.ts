import { createReducer, on } from "@ngrx/store";
import { initialCatGalleryState } from "./cat-gallery.state";
import * as CatGalleryActions from "./cat-gallery.actions";

export const catGalleryReducers = createReducer(
  initialCatGalleryState,
  on(CatGalleryActions.GetImages, (state, {limit}) => {
    const images = {
      pending: true,
      error: '',
      images: []
    }
    console.log(images);
    return {...state, images};
  }),
  on(CatGalleryActions.ImagesLoaded, (state, {imageData}) => {
    const images = {
      pending: false,
      error: '',
      images: imageData
    };
    console.log(images);
    return {...state}
  })
);