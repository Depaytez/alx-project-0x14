import { ReactNode } from "react";

export interface ComponentProps {
 children: ReactNode;
}

export interface MovieCardProps {
 title: string;
 posterImage: string;
 releaseYear: string;
 id?: string;
}

export interface ButtonProps {
 title: string;
 action?: () => void;
}

export interface PrimaryImage {
 url: string;
}

export interface PrimaryImage {
 url: string;
}

export interface TitleText {
 text: string;
}

export interface ReleaseYear {
 year: string;
}

export interface MoviesProps {
  id: string
  primaryImage: PrimaryImage
  titleText: TitleText
  releaseYear: ReleaseYear
}