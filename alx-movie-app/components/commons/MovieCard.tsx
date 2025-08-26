import React from 'react';
import { MovieCardProps } from '@/interfaces';
import Image from "next/image";

const MovieCard: React.FC<MovieCardProps> = ({title, posterImage, releaseYear}) => {
 return(
  <div className="h-[563px] container">
   <div>
    <Image 
     className="h-[430px] w-full rounded-md hover:cursor-pointer"
     src={posterImage} 
     alt={title} 
     width={100} 
     height={100} 
    />

   </div>
   <h2>{title}</h2>
   <p>Release Year: {releaseYear}</p>
  </div>
 );
};

export default MovieCard;