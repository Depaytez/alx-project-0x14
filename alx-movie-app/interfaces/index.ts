import { ReactNode } from "react";

export interface ComponentProps {
 children: ReactNode;
}

export interface MovieCardProps {
 title: string;
 posterImage: string;
 releaseYear: string;
}

export interface ButtonProps {
 title: string;
 action?: () => void;
}