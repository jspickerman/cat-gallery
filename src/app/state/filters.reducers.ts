import { createReducer, on } from "@ngrx/store";
import { CatImageData, GalleryImageFilter, IMAGE_TYPE, initialCatGalleryState } from "./cat-gallery.state";
import * as CatGalleryActions from "./cat-gallery.actions";

const initialState: GalleryImageFilter[] = [
    { imageType: IMAGE_TYPE.GIF, selected: true },
    { imageType: IMAGE_TYPE.JPG, selected: false },
    { imageType: IMAGE_TYPE.PNG, selected: false }
  ];

export const catGalleryReducers = createReducer(
  initialCatGalleryState,
  on(CatGalleryActions.ToggleFilter, (state, {filter, selected}) => {
    const newFilter = {...filter, selected};
    const imageFilters = state.imageFilters.map(currentFilter => currentFilter.imageType === newFilter.imageType ? newFilter : currentFilter);
    return {...state, imageFilters};
  })
);