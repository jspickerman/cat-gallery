import { createReducer, on } from "@ngrx/store";
import { CatImageData } from "./cat-gallery.state";
import * as CatGalleryActions from "./cat-gallery.actions";

const initialState: CatImageData = {
  pending: false,
  error: '',
  images: []
}

export const imageReducers = createReducer(
  initialState,
  on(CatGalleryActions.GetImages, (state, {limit}) => {
    return {
      pending: true,
      error: '',
      images: []
    }
  }),
  on(CatGalleryActions.ImagesLoaded, (state, {imageResponse}) => {
    return {
      pending: false,
      error: '',
      images: imageResponse
    };
  }),
  on(CatGalleryActions.ImagesAdded, (state, {imageResponse}) => {
    return {
      pending: false,
      error: '',
      images: [...state.images, ...imageResponse]
    }
  })
);