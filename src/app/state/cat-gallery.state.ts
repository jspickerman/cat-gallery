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
  images: CatImage[];
}

export const initialCatGalleryState: CatGalleryState = {
  images: []
}