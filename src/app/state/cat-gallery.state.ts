export interface CatImage {
  breeds: string[];
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CatImageData {
  pending: boolean;
  error: string;
  images: CatImage[];
}

export enum IMAGE_ORIENTATION {
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape'
}

export interface CatGalleryImageFilter {
  imageOrientation: IMAGE_ORIENTATION;
  selected: boolean;
}

export interface CatGalleryState {
  imageFilters: CatGalleryImageFilter[];
  imageData: CatImageData;
}