export interface CatImage {
  breeds: string[];
  id: string;
  url: string;
  width: string;
  height: string;
}

export interface CatImageData {
  pending: boolean;
  error: string;
  images: CatImage[];
}

export interface GalleryImageFilter {
  imageType: IMAGE_TYPE;
  selected: boolean;
}

export interface CatBreedFilter {
  breed: string;
  selected: boolean;
}

export enum IMAGE_TYPE {
  GIF = "gif",
  PNG = "png",
  JPG = "jpg"
}

export interface CatGalleryState {
  imageFilters: GalleryImageFilter[];
  imageData: CatImageData;
  breedFilters: CatBreedFilter[];
}

export const initialCatGalleryState: CatGalleryState = {
  imageFilters: [
    { imageType: IMAGE_TYPE.GIF, selected: true },
    { imageType: IMAGE_TYPE.JPG, selected: false },
    { imageType: IMAGE_TYPE.PNG, selected: false }
  ],
  imageData: {
    pending: false,
    error: "",
    images: []
  },
  breedFilters: []
};
