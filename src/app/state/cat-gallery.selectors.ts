import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CatGalleryState, IMAGE_TYPE } from "./cat-gallery.state";

export const selectCatGalleryState = createFeatureSelector<CatGalleryState>('catgallery');

export const images = createSelector(
  selectCatGalleryState,
  (state: CatGalleryState) => {
    return state.imageData;
  }
)

export const filteredImages = createSelector(
  selectCatGalleryState,
  (state: CatGalleryState) => {
    const selectedFilters = state.imageFilters.filter(currentFilter => currentFilter.selected);
    return state.imageData.images.filter((currentImage) => {
      const imageExtension = currentImage.url.substring(currentImage.url.length - 3);
      console.log(imageExtension);
      return selectedFilters.find(filter => filter.imageType === imageExtension);
    });
  }
)

export const filters = createSelector(
  selectCatGalleryState,
  (state: CatGalleryState) => {
    return state.imageFilters;
  }
)