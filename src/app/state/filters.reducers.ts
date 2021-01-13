import { createReducer, on } from "@ngrx/store";
import { GalleryImageFilter, IMAGE_TYPE } from "./cat-gallery.state";
import * as CatGalleryActions from "./cat-gallery.actions";

const initialState: GalleryImageFilter[] = [
    { imageType: IMAGE_TYPE.GIF, selected: true },
    { imageType: IMAGE_TYPE.JPG, selected: false },
    { imageType: IMAGE_TYPE.PNG, selected: false }
  ];

export const filterReducers = createReducer(
  initialState,
  on(CatGalleryActions.ToggleFilter, (state, {filter, selected}) => {
    const newFilter = {...filter, selected};
    return state.map(currentFilter => currentFilter.imageType === newFilter.imageType ? newFilter : currentFilter);
  })
);