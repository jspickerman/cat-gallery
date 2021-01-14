import { createSelector } from "@ngrx/store";
import { CatGalleryState, CatImageData,  CatGalleryImageFilter, IMAGE_ORIENTATION, CatImage } from "./cat-gallery.state";

export const selectFilters = createSelector(
  (state: CatGalleryState) => {
    return state.imageFilters;
  },
  (filters: CatGalleryImageFilter[]) => {
    return filters;
  }
);

export const selectImageData = createSelector(
  (state: CatGalleryState) => {
    return state.imageData;
  },
  (imageData: CatImageData) => imageData
);

export const selectFilteredImages = createSelector(
  selectFilters,
  selectImageData,
  (filters: CatGalleryImageFilter[], imageData: CatImageData) => {
    const selectedFilters = filters.filter(currentFilter => currentFilter.selected);
    const images = selectedFilters.reduce((images: CatImage[], filter: CatGalleryImageFilter) => {
      if (filter.imageOrientation === IMAGE_ORIENTATION.PORTRAIT) {
        images = [...images, ...imageData.images.filter(image => image.height > image.width)]
      } else if (filter.imageOrientation === IMAGE_ORIENTATION.LANDSCAPE) {
        images = [...images, ...imageData.images.filter(image => image.width > image.height)]
      }
      return images;
    }, []);
    return {...imageData, images};
  }
)