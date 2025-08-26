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

   <div className="flex justify-between py-4">
    <p className="text-xl font-bold">
     Movie Title: {title}
    </p>
    <p className="text-xl text-[#E2D609]">
     Release Year: {releaseYear}
    </p>
   </div>
  </div>
 );
};

export default MovieCard;