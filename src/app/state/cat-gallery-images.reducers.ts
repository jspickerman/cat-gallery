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
    const result = {
      ...state,
      pending: true,
      images: new Array(limit).fill({})
    };
    console.log(result);
    return result;
  }),
  on(CatGalleryActions.ImagesLoaded, (state, {imageResponse}) => {
    return {
      ...state,
      pending: false,
      images: imageResponse
    };
  }),
  on(CatGalleryActions.ImagesAdded, (state, {imageResponse}) => {
    return {
      ...state,
      pending: false,
      images: [...state.images, ...imageResponse]
    }
  })
);