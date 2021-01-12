import { createReducer, on } from "@ngrx/store";
import { CatImageData, initialCatGalleryState } from "./cat-gallery.state";
import * as CatGalleryActions from "./cat-gallery.actions";

const initialState: CatImageData = {
  pending: false,
  error: '',
  images: []
}

export const catGalleryReducers = createReducer(
  initialCatGalleryState,
  on(CatGalleryActions.GetImages, (state, {limit}) => {
    const imageData = {
      pending: true,
      error: '',
      images: []
    }
    return {...state, imageData};
  }),
  on(CatGalleryActions.ImagesLoaded, (state, {imageResponse}) => {
    const imageData = {
      pending: false,
      error: '',
      images: imageResponse
    };
    return {...state, imageData}
  }),
  on(CatGalleryActions.ImagesAdded, (state, {imageResponse}) => {
    const imageData = {
      pending: false,
      error: '',
      images: [...state.imageData.images, ...imageResponse]
    };
    return {...state, imageData}
  })
);