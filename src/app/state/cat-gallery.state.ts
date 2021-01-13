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

export interface GalleryImageFilter {
  imageType: IMAGE_TYPE;
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
  }
};
