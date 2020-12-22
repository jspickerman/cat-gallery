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

export enum IMAGE_TYPE {
  GIF = 'gif',
  PNG = 'png',
  JPG = 'jpg'
}

export interface CatGalleryState {
  currentImageTypes: IMAGE_TYPE[];
  imageData: CatImageData;
}

export const initialCatGalleryState: CatGalleryState = {
  currentImageTypes: [IMAGE_TYPE.GIF, IMAGE_TYPE.JPG, IMAGE_TYPE.PNG],
  imageData: {
    pending: false,
    error: '',
    images: []
  }
}