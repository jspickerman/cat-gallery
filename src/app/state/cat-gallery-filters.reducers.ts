import { createReducer, on } from "@ngrx/store";
import { CatGalleryImageFilter, IMAGE_ORIENTATION } from "./cat-gallery.state";
import * as CatGalleryActions from "./cat-gallery.actions";

const initialState: CatGalleryImageFilter[] = [
    { imageOrientation: IMAGE_ORIENTATION.LANDSCAPE, selected: true },
    { imageOrientation: IMAGE_ORIENTATION.PORTRAIT, selected: true },
  ];

export const filterReducers = createReducer(
  initialState,
  on(CatGalleryActions.ToggleFilter, (state, {filter, selected}) => {
    const newFilter = {...filter, selected};
    return state.map(currentFilter => currentFilter.imageOrientation === newFilter.imageOrientation ? newFilter : currentFilter);
  })
);