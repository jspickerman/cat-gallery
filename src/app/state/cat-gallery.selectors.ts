import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CatGalleryState, IMAGE_TYPE } from "./cat-gallery.state";

export const selectCatGalleryState = createFeatureSelector<CatGalleryState>('catgallery');

export const images = createSelector(
  selectCatGalleryState,
  (state: CatGalleryState) => {
    return state.imageData;
  }
)