import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CatGalleryState, GalleryImageFilter } from "./cat-gallery.state";

export const selectCatGalleryState = createFeatureSelector<CatGalleryState>('catgallery')

// export const selectFilters = createSelector(
//   selectCatGalleryState,
//   (state: CatGalleryState) => {
//     return state.imageFilters;
//   }
// )

export const selectFilters = createSelector(
  (state: CatGalleryState) => {
    console.log(state);
    return state.imageFilters;
  },
  (filters: GalleryImageFilter[]) => filters
);

export const filteredImages = createSelector(
  selectCatGalleryState,
  (state: CatGalleryState) => {
    const selectedFilters = state.imageFilters.filter(currentFilter => currentFilter.selected);
    const filteredImages = state.imageData.images.filter((currentImage) => {
      const imageExtension = currentImage.url.substring(currentImage.url.length - 3);
      return selectedFilters.find(filter => filter.imageType === imageExtension);
    });
    return {...state, images: filteredImages};
  }
)