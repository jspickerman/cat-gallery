import { createReducer, on } from "@ngrx/store";
import { IMAGE_TYPE, initialCatGalleryState } from "./cat-gallery.state";
import * as CatGalleryActions from "./cat-gallery.actions";

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
  on(CatGalleryActions.FilterGIF, (state) => {
    const images = state.imageData.images.filter((image) => {
      const fileExtension = image.url.substring(image.url.length - 3);
      return fileExtension === IMAGE_TYPE.GIF;
    });
    return {...state, imageData: {...state.imageData, images}};
  }),
    on(CatGalleryActions.FilterJPG, (state) => {
    const images = state.imageData.images.filter((image) => {
      const fileExtension = image.url.substring(image.url.length - 3);
      return fileExtension === IMAGE_TYPE.JPG;
    });
    return {...state, imageData: {...state.imageData, images}};
  }),
  on(CatGalleryActions.FilterPNG, (state) => {
    const images = state.imageData.images.filter((image) => {
      const fileExtension = image.url.substring(image.url.length - 3);
      return fileExtension === IMAGE_TYPE.PNG;
    });
    return {...state, imageData: {...state.imageData, images}};
  })
);