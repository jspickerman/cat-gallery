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

// export interface GalleryImageFilter {
//   imageType: IMAGE_TYPE;
//   selected: boolean;
// }

export interface GalleryImageFilter {
  imageOrientation: IMAGE_ORIENTATION;
  selected: boolean;
}

export enum IMAGE_TYPE {
  GIF = "gif",
  PNG = "png",
  JPG = "jpg"
}

export enum IMAGE_ORIENTATION {
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape'
}

// export interface CatGalleryState {
//   imageFilters: GalleryImageFilter[];
//   imageData: CatImageData;
// }

// export const initialCatGalleryState: CatGalleryState = {
//   imageFilters: [
//     { imageType: IMAGE_ORIENTATION.GIF, selected: true },
//     { imageType: IMAGE_TYPE.JPG, selected: false },
//     { imageType: IMAGE_TYPE.PNG, selected: false }
//   ],
//   imageData: {
//     pending: false,
//     error: "",
//     images: []
//   }
// };

export interface CatGalleryState {
  imageFilters: GalleryImageFilter[];
  imageData: CatImageData;
}

export const initialCatGalleryState: CatGalleryState = {
  imageFilters: [
    { imageOrientation: IMAGE_ORIENTATION.LANDSCAPE, selected: false },
    { imageOrientation: IMAGE_ORIENTATION.PORTRAIT, selected: false }
  ],
  imageData: {
    pending: false,
    error: "",
    images: []
  }
};