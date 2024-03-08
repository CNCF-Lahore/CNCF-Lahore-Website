// import React, { useEffect, useState, useRef } from "react";
// import Image from "next/image";

// interface HeroProps {
//   images: string[];
// }

// export function Hero({ images }: HeroProps) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slideInterval = useRef<NodeJS.Timeout | null>(null);

//   const goToNext = () => {
//     const isLastImage = currentIndex === images.length - 1;
//     const newIndex = isLastImage ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const startSlideShow = () => {
//     stopSlideShow();
//     slideInterval.current = setInterval(goToNext, 3000);
//   };

//   const stopSlideShow = () => {
//     if (slideInterval.current) {
//       clearInterval(slideInterval.current);
//     }
//   };

//   useEffect(() => {
//     startSlideShow();
//     return () => stopSlideShow(); // This ensures the interval is cleared when the component unmounts or updates
//   }, [currentIndex]); // Depend on `currentIndex` to restart the slideshow when it changes

//   return (
//     <div className="relative">
//       <div className="relative text-white h-38 max-w-80 md:w-96 flex items-center justify-center text-center right-4">
//         {images.map((img, index) => (
//           <div
//             key={img}
//             className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
//           >
//             <Image
//               src={img}
//               alt={`Slide ${index + 1}`}
//               height={400}
//               width={400}
//               className="object-contain"
//               priority={index === currentIndex} // Load the current image with priority
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
