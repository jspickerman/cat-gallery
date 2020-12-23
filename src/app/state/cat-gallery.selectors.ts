import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CatGalleryState, IMAGE_TYPE } from "./cat-gallery.state";

export const selectCatGalleryState = createFeatureSelector<CatGalleryState>('catgallery');

export const images = createSelector(
  selectCatGalleryState,
  (state: CatGalleryState) => {
    const images = state.imageData.images.filter((image) => {
      const fileType: IMAGE_TYPE = image.url.substring(image.url.length - 3) as IMAGE_TYPE;
      return state.currentImageTypes.includes(fileType);
    });
    console.log(images);
    return {...state.imageData, images};
  }
)