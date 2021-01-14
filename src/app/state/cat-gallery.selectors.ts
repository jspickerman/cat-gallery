import { createSelector } from "@ngrx/store";
import { CatGalleryState, CatImageData,  GalleryImageFilter } from "./cat-gallery.state";

// export const selectCatGalleryState = createFeatureSelector<CatGalleryState>('catgallery')

// export const selectFilters = createSelector(
//   selectCatGalleryState,
//   (state: CatGalleryState) => {
//     return state.imageFilters;
//   }
// )

export const selectFilters = createSelector(
  (state: CatGalleryState) => {
    return state.imageFilters;
  },
  (filters: GalleryImageFilter[]) => {
    return filters;
  }
);

export const selectImageData = createSelector(
  (state: CatGalleryState) => {
    return state.imageData;
  },
  (imageData: CatImageData) => imageData
);

// export const filteredImages = createSelector(
//   selectCatGalleryState,
//   (state: CatGalleryState) => {
//     const selectedFilters = state.imageFilters.filter(currentFilter => currentFilter.selected);
//     const filteredImages = state.imageData.images.filter((currentImage) => {
//       const imageExtension = currentImage.url.substring(currentImage.url.length - 3);
//       return selectedFilters.find(filter => filter.imageType === imageExtension);
//     });
//     return {...state, images: filteredImages};
//   }
// )

export const selectFilteredImages = createSelector(
  selectFilters,
  selectImageData,
  (filters: GalleryImageFilter[], imageData: CatImageData) => {
    const selectedFilters = filters.filter(currentFilter => currentFilter.selected);
    const images = imageData.images.filter((currentImage) => {
      const imageExtension = currentImage.url.substring(currentImage.url.length - 3);
      return selectedFilters.find(filter => filter.imageType === imageExtension);
    });
    return {...imageData, images};
  }
)