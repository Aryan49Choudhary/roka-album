import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import img1 from "./photo-01.JPG";
import img2 from "./photo-02.JPG";
import img3 from "./photo-03.JPG";
import img4 from "./photo-04.JPG";
import img5 from "./photo-05.JPG";
import img6 from "./photo-06.JPG";
import img7 from "./photo-07.JPG";
import img8 from "./photo-08.JPG";
// import img9 from "./photo-09.JPG";
import img10 from "./photo-10.JPG";
import img11 from "./photo-11.JPG";
import img12 from "./photo-12.JPG";
import img13 from "./photo-13.JPG";
import img14 from "./photo-14.JPG";
import img15 from "./photo-15.JPG";
import img16 from "./photo-16.JPG";
import img17 from "./photo-17.JPG";
import img18 from "./photo-18.JPG";
import img19 from "./photo-19.JPG";
import img20 from "./photo-20.JPG";
import img21 from "./photo-21.JPG";
import img22 from "./photo-22.JPG";
import img23 from "./photo-23.JPG";
import img24 from "./photo-24.JPG";
import img25 from "./photo-25.JPG";
import img26 from "./photo-26.JPG";
import img27 from "./photo-27.JPG";
import img28 from "./photo-28.JPG";
import img29 from "./photo-29.JPG";
import img30 from "./photo-30.JPG";
import img31 from "./photo-31.JPG";
import img32 from "./photo-32.JPG";
import img33 from "./photo-33.JPG";
import img34 from "./photo-34.JPG";
// import img35 from "./photo-35.JPG";
import img36 from "./photo-36.jpg";
// import frontcover from "./new front.jpg";
import backcover from "./back cover.png";
import frontcover2 from "./new front2.jpg";

const Album = () => {
  const [currPage, setCurrPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const creatingAlbum = () => {
    const photos = [
      frontcover2,
      img4, img2, img3, img1, img5, img6, img7, img8, img10,
      img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
      img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
      img31, img32, img33, img34, img36,
      backcover
    ];

    return photos.map((src, index) => ({
      id: index,
      type: index === 0 ? "front-cover" : index === photos.length - 1 ? "back-cover" : "content",
      content: {
        src,
        alt: `Page ${index + 1}`
      }
    }));
  };

  const albumPages = creatingAlbum();
  const totalPages = albumPages.length;

  const turnPage = (direction) => {
    /**
     * @param {"next" | "prev"} direction
     */
    if (isFlipping) return;
    setIsFlipping(true);

    if (direction === "next" && currPage < totalPages - 1) {
      setCurrPage((prev) => prev + 1);
    }
    if (direction === "prev" && currPage > 0) {
      setCurrPage((prev) => prev - 1);
    }

    setTimeout(() => {
      setIsFlipping(false);
    }, 500);
  };

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") turnPage("next");
    if (e.key === "ArrowLeft") turnPage("prev");
  };

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="bg-gradient-to-br from-rose-100 via-pink-100 to-amber-100 w-screen h-screen flex items-center justify-center overflow-auto px-2"
    >
      <div className="relative w-full max-w-[800px] h-auto sm:h-[600px] bg-white border-4 sm:border-8 border-rose-300 shadow-2xl rounded-xl flex flex-col items-center justify-start sm:justify-center py-6 sm:py-0">
        {/* Title */}
        <div className="text-center z-10 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-900 mb-2 tracking-wide">💕 Roka Function Album 💕</h1>
          <p className="text-rose-700 text-sm sm:text-base md:text-lg font-medium">
            {currPage === 0
              ? "Welcome to our special moments"
              : currPage === totalPages - 1
              ? "Thank you for viewing our memories"
              : ``}
          </p>
        </div>

        <div className="w-full max-w-[700px] h-auto sm:h-[500px] mt-4 bg-white border-2 sm:border-4 border-rose-200 rounded-lg overflow-hidden flex items-center justify-center">
          <div
            className={`relative w-full max-w-[630px] h-auto sm:h-[420px] flex items-center justify-center transition-all duration-300 transform ${
              isFlipping ? "rotate-y-180" : "rotate-y-0"
            }`}
          >
            <img
              src={albumPages[currPage].content.src}
              alt={albumPages[currPage].content.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-auto max-h-[420px] object-contain rounded-lg shadow-xl ring-2 ring-rose-300 hover:ring-4 hover:ring-rose-500 transition-all duration-500"
            />
            {isFlipping && (
              <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-pink-200 animate-page-turn rounded-lg"></div>
            )}
          </div>
        </div>

        {/* Page indicator dots */}
        <div className="mt-4 flex justify-center space-x-2">
          {albumPages.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currPage ? "bg-rose-700 w-6" : "bg-rose-400 hover:bg-rose-500"
              }`}
            ></div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          className={`absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-rose-500 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-rose-600 transition-all duration-300 ${
            currPage === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => turnPage("prev")}
          disabled={currPage === 0 || isFlipping}
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>

        <button
          className={`absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-rose-500 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-rose-600 transition-all duration-300 ${
            currPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => turnPage("next")}
          disabled={currPage === totalPages - 1 || isFlipping}
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>

        <div className="mt-4 text-center z-10">
          <p className="text-rose-700 text-sm sm:text-lg font-medium">
            {`Page ${currPage + 1} of ${totalPages}`}
          </p>
        </div>
      </div>

      {/* Bottom decorative text */}
      <div className="absolute bottom-4 left-0 right-0 text-center px-2">
        <p className="text-rose-600 text-xs sm:text-sm font-medium">
          Use the arrow buttons or keyboard arrow keys to navigate through our precious memories
        </p>
      </div>
    </div>
  );
};

export default Album;
