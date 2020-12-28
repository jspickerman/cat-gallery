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

export interface ImageFilter {
  imageType: IMAGE_TYPE;
  selected: boolean;
}

export enum IMAGE_TYPE {
  GIF = 'gif',
  PNG = 'png',
  JPG = 'jpg'
}

export interface CatGalleryState {
  imageFilters: ImageFilter[];
  imageData: CatImageData;
}

export const initialCatGalleryState: CatGalleryState = {
  imageFilters: [],
  imageData: {
    pending: false,
    error: '',
    images: []
  }
}