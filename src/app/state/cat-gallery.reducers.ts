import { createReducer, on } from "@ngrx/store";
import { GalleryImageFilter, IMAGE_TYPE, initialCatGalleryState } from "./cat-gallery.state";
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
  on(CatGalleryActions.ToggleFilter, (state, {filter, selected}) => {
    console.log(filter);
    const newFilter = {...filter, selected};
    const imageFilters = state.imageFilters.map(currentFilter => currentFilter.imageType === newFilter.imageType ? newFilter : currentFilter);
    console.log(imageFilters);
    return {...state, imageFilters};
  })
);