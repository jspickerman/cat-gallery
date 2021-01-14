import { createReducer, on } from "@ngrx/store";
import { GalleryImageFilter, IMAGE_ORIENTATION,  IMAGE_TYPE } from "./cat-gallery.state";
import * as CatGalleryActions from "./cat-gallery.actions";

const initialState: GalleryImageFilter[] = [
    { imageOrientation: IMAGE_ORIENTATION.LANDSCAPE, selected: false },
    { imageOrientation: IMAGE_ORIENTATION.PORTRAIT, selected: false },
  ];

export const filterReducers = createReducer(
  initialState,
  on(CatGalleryActions.ToggleFilter, (state, {filter, selected}) => {
    const newFilter = {...filter, selected};
    return state.map(currentFilter => currentFilter.imageOrientation === newFilter.imageOrientation ? newFilter : currentFilter);
  })
);