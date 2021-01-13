import { createReducer, on } from "@ngrx/store";
import { initialCatGalleryState } from "./cat-gallery.state";
import * as CatGalleryActions from "./cat-gallery.actions";

export const catGalleryReducers = createReducer(
  initialCatGalleryState,
  on(CatGalleryActions.GetImages, (state, {limit}) => {
    console.log('get images: ', state);
    const imageData = {
      pending: true,
      error: '',
      images: []
    }
    return {...state, imageData};
  }),
  on(CatGalleryActions.ImagesLoaded, (state, {imageResponse}) => {
    console.log('images loaded: ', state);
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
  }),
  on(CatGalleryActions.ToggleFilter, (state, {filter, selected}) => {
    const newFilter = {...filter, selected};
    const imageFilters = state.imageFilters.map(currentFilter => currentFilter.imageType === newFilter.imageType ? newFilter : currentFilter);
    return {...state, imageFilters};
  })
);