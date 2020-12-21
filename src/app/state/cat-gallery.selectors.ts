import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CatGalleryState } from "./cat-gallery.state";

export const selectCatGalleryState = createFeatureSelector<CatGalleryState>('catgallery');

export const images = createSelector(
  selectCatGalleryState,
  (state: CatGalleryState) => state.images
)