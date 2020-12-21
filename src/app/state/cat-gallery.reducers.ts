import { createReducer, on } from "@ngrx/store";
import { initialCatGalleryState } from "./cat-gallery.state";
import * as CatGalleryActions from "./cat-gallery.actions";

export const catGalleryReducers = createReducer(
  initialCatGalleryState
);