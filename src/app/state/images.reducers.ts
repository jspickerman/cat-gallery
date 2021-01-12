import { createReducer, on } from "@ngrx/store";
import { CatImageData, initialCatGalleryState } from "./cat-gallery.state";
import * as CatGalleryActions from "./cat-gallery.actions";

const initialState: CatImageData = {
  pending: false,
  error: '',
  images: []
}

export const imageReducers = createReducer(
  initialState,
  on(CatGalleryActions.GetImages, (state, {limit}) => {
    const imageData = {
      pending: true,
      error: '',
      images: []
    }
    return imageData;
  }),
  on(CatGalleryActions.ImagesLoaded, (state, {imageResponse}) => {
    const imageData = {
      pending: false,
      error: '',
      images: imageResponse
    };
    return imageData;
  }),
  on(CatGalleryActions.ImagesAdded, (state, {imageResponse}) => {
    const imageData = {
      pending: false,
      error: '',
      images: [...state.images, ...imageResponse]
    };
    return imageData;
  })
);