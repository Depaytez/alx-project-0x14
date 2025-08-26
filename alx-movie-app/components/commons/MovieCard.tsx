import React from 'react';
import { MovieCardProps } from '@/interfaces';
// interface MovieCardProps {
//  title: string;
//  posterImage: string;
//  releaseYear: string;
// }

const MovieCard: React.FC<MovieCardProps> = ({title, posterImage, releaseYear}) => {
 return(
  <div className="container">
   <h2>{title}</h2>
   <img src={posterImage} alt={title} />
   <p>Release Year: {releaseYear}</p>
  </div>
 );
};

export default MovieCard;