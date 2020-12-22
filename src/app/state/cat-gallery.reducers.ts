import { createReducer, on } from "@ngrx/store";
import { initialCatGalleryState } from "./cat-gallery.state";
import * as CatGalleryActions from "./cat-gallery.actions";

export const catGalleryReducers = createReducer(
  initialCatGalleryState,
  on(CatGalleryActions.GetImages, (state, {limit}) => {
    console.log('get images!');
    return {...state};
  }),
  on(CatGalleryActions.ImagesLoaded, (state, {imageData}) => {
    const images = {
      pending: false,
      error: '',
      images: imageData[0]
    };
    console.log(images);
    return {...state}
  })
);