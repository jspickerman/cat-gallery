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

export interface CatGalleryState {
  images: CatImageData;
}

export const initialCatGalleryState: CatGalleryState = {
  images: {
    pending: false,
    error: '',
    images: []
  }
}