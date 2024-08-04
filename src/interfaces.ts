export interface CallToAction {
  url: string;
  text?: string;
  external?: boolean;
  className?: string;
}

export interface Image {
  src: string;
  alt?: string | null;
}

export interface Video {
  src: string;
  alt?: string | null;
}