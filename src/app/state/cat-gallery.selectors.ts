import { createSelector } from "@ngrx/store";
import { CatGalleryState, CatImageData,  GalleryImageFilter, IMAGE_ORIENTATION } from "./cat-gallery.state";

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

// export const selectFilteredImages = createSelector(
//   selectFilters,
//   selectImageData,
//   (filters: GalleryImageFilter[], imageData: CatImageData) => {
//     const selectedFilters = filters.filter(currentFilter => currentFilter.selected);
//     const images = imageData.images.filter((currentImage) => {
//       const imageExtension = currentImage.url.substring(currentImage.url.length - 3);
//       return selectedFilters.find(filter => filter.imageType === imageExtension);
//     });
//     return {...imageData, images};
//   }
// )

export const selectFilteredImages = createSelector(
  selectFilters,
  selectImageData,
  (filters: GalleryImageFilter[], imageData: CatImageData) => {
    const selectedFilters = filters.filter(currentFilter => currentFilter.selected);
    const images = selectedFilters.reduce((images, filter) => {
      if (filter.imageOrientation === IMAGE_ORIENTATION.PORTRAIT) {
        images = [...images, ...imageData.images.filter(image => image.height > image.width)]
      } else if (filter.imageOrientation === IMAGE_ORIENTATION.LANDSCAPE) {
        images = [...images, ...imageData.images.filter(image => image.width > image.height)]
      }
      return images;
    }, []);
    console.log(images);
    return {...imageData, images};
  }
)